import {FC} from "react"
import image from "../Profile/profile-image.avif";
import useGetUserInfo from "../../../hooks/useGetUserInfo";
import { Spin } from "antd";
import { FaPenAlt } from "react-icons/fa";

// import { uploadImage } from "./cloudinaryUtils";

const Profile:FC = () => {
  const { userInfo, loading } = useGetUserInfo({ endpoint: "getUserInfo" });
 /*  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [uploading, setUploading] = useState<boolean>(false); */

  if (loading) {
    return <Spin spinning={loading} />;
  }

  if (!userInfo) {
    return <div>No user information available</div>;
  }

  /* const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    setUploading(true);
    try {
      // const imageUrl = await uploadImage("file");
      // setProfileImage(imageUrl);
      message.success("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error uploading image:", error);
      message.error("Failed to update profile picture");
    } finally {
      setUploading(false);
    }
  }; */

  return (
    
      <div className="  mx-9  m-3 flex gap-[4rem] justify-center">
        <div className="flex flex-col justify-center items-center gap-4">
          <img id="profile-image"
            src={image}
            alt="image-profile"
            className="h-[14rem] w-[14rem] p-5 rounded-md"
          />
          <p className="flex gap-2">change profile picture {" "} <span className="rotate-icon">
            <FaPenAlt  className="w-30px"/>
          </span></p>
        <hr className="w-full mt-[12px]" />
          <h2 className=" bg-slate-100 p-4 rounded-md font-semibold">
            {userInfo?.firstName + " " + userInfo?.lastName}
            <span> - {userInfo?.role}</span>
          </h2>
  
         </div>
        <div className="grid gap-4 mt-8 ">
          <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
            <p className="">Full name : </p>
            <p>{userInfo?.firstName + " " + userInfo?.lastName}</p>
          </div>
          <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
            <p className="">Email : </p>
            <p>{userInfo?.email}</p>
          </div>
          {userInfo?.sex && (
            <div className="grid grid-cols-[1fr_1fr] h-[4rem] bg-slate-100 p-4 rounded-md font-medium">
              <p className="">Gender : </p>
              <p>{userInfo?.sex}</p>
            </div>
          )}
          {userInfo?.lga && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Local Govt. Area : </p>
              <p>{userInfo?.lga}</p>
            </div>
          )}
          {userInfo?.programme && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Programme : </p>
              <p>{userInfo?.programme}</p>
            </div>
          )}
          {userInfo?.occupation && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Occupation : </p>
              <p>{userInfo?.occupation}</p>
            </div>
          )}
          {userInfo?.techStack && (
            <div className="grid grid-cols-[10rem_10rem]">
              <p className="">Tech Stack : </p>
              <p>{userInfo?.techStack?.toUpperCase()}</p>
            </div>
          )}
        </div>
      </div>
    
  );
};

export default Profile;
