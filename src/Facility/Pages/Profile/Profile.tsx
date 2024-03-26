import { FC, useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import Webcam from "react-webcam"; // Import the Webcam component
import useGetUserInfo from "../../../hooks/useGetUserInfo";
import { Spin, message } from "antd";
import { FaPenAlt } from "react-icons/fa";
import defaultImage from './profile-image.avif'

const Profile: FC = () => {
  const { userInfo, loading } = useGetUserInfo({ endpoint: "getUserInfo" });
  const [_uploading, setUploading] = useState<boolean>(false);
  const [captureMethod, setCaptureMethod] = useState<string>("file"); // State variable to track capture method
  const fileInputRef = useRef<HTMLInputElement>(null);
  const webcamRef = useRef<Webcam>(null) // Create a ref for the Webcam component
  const [imageSrc, setImageSrc] = useState<string>(defaultImage);

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    setUploading(true);
    try {
      const file = acceptedFiles[0];
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
      // Add your image upload logic here
      // For now, I'm just showing a success message
      message.success("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Failed to update profile picture");
    } finally {
      setUploading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleClickChangePicture = () => {
    if (captureMethod === "file") {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    } else if (captureMethod === "webcam") {
      captureImageFromWebcam();
    }
  };

  

  const captureImageFromWebcam = async () => {
    console.log("Capturing image from webcam...");
    
    if (!webcamRef.current) {
      console.error("Webcam reference is null.");
      return;
    }
  
    try {
      const imageSrc = await webcamRef.current.getScreenshot();
      console.log("Captured image:", imageSrc);
      if (imageSrc) {
        setImageSrc(imageSrc);
        console.log("Updated imageSrc state:", imageSrc);
      } else {
        console.error("Failed to capture image from webcam.");
      }
    } catch (error) {
      console.error("Error capturing image from webcam:", error);
      // Handle error if necessary
    }
  };
  
  

  const handleToggleCaptureMethod = () => {
    setCaptureMethod(prevMethod => {
      if (prevMethod === "file") {
        // Reset imageSrc when switching to webcam capture method
        setImageSrc(defaultImage);
      }
      return prevMethod === "file" ? "webcam" : "file";
    });
  };

  if (loading) {
    return <Spin spinning={loading} />;
  }

  if (!userInfo) {
    return <div>No user information available</div>;
  }
  console.log("webcamRef:", webcamRef.current);
  return (
    <div className="mx-9 m-3 flex gap-[4rem] justify-center">
      <div className="flex flex-col justify-center items-center gap-4">
        <div {...getRootProps()} className="cursor-pointer">
          <input {...getInputProps()} ref={fileInputRef} style={{ display: "none" }} />
          {captureMethod === "file" ? (
            <img
              id="profile-image"
              src={imageSrc}
              alt="image-profile"
              className="h-[14rem] w-[14rem] p-5 rounded-md"
            />
          ) : (
            <Webcam
              height={600}
              width={600}
              ref={webcamRef}
              screenshotFormat="image/jpeg" // Specify the format of the screenshot
            />
          )}
          <label onClick={handleClickChangePicture}>
            <p id="changeProfilePicture" className="flex gap-2 cursor-pointer">
              Change profile picture{" "}
              <span className="rotate-icon">
                <FaPenAlt className="w-30px" />
              </span>
            </p>
          </label>
        </div>
        <button className="p-2 text-gray-100 bg-[#713f12] rounded-2xl" onClick={handleToggleCaptureMethod}>
          {captureMethod === "file" ? "Use Webcam" : "CAPTURE"}
        </button>
        <hr className="w-full mt-[12px]" />
        <h2 className="bg-slate-100 p-4 rounded-md font-semibold">
          {userInfo?.firstName + " " + userInfo?.lastName}
          <span> - {userInfo?.role}</span>
        </h2>
      </div>
      <div className="grid gap-4 mt-8 ">
        {/* Your other profile information */}
      </div>
    </div>
  );
};

export default Profile;
