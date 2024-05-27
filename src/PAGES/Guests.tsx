import { useState, useEffect, FC } from "react";
import axios, { AxiosResponse } from "axios";
import { Col, Form, Input, Row, Select, message, Spin, Modal  } from "antd";
import logo from "../images/sail_logo-removebg-preview.png";
import stem from "../images/stem.jpg";
import tech from "../images/tech talent.png";
import data from "../images/datascience.png";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface GuestState {

  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  sex: string;
  address: string;
  reasonForVisit: string;
}



const Guest: FC = () => {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageURL, setImageURL] = useState<string>('');
  const [_locationOptions, setLocationOptions] = useState<any[]>([]); 
  const [localState, setLocalState] = useState<GuestState>({
     
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    sex: "",
    address: "",
    reasonForVisit: "",

  });
  // const [_identifier, setidentifier] = useState<string>("");
  // const guestCode = "https://ssmp-api.onrender.com/api/v1/visit/getVisitorqrCode"




  
  const useFetchOptions = async (): Promise<any[]> => {
    const formUrl = import.meta.env.VITE_GUEST_FORM;
    console.log("Form URL:", formUrl);
    if (!formUrl) {
      console.error("Form URL is not defined.");
      return [];
    }
  
    try {
      setLoading(false);
      const response: AxiosResponse<any> = await axios.post(
        formUrl
      );
      console.log(formUrl);
      
      return response.data;
    } catch (error) {
      console.error("Error fetching options:", error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    useFetchOptions()
      .then((fetchedOption) => setLocationOptions(fetchedOption as any[]))
      .catch((error) =>
        console.error("Error setting location options:", error)
      );
  }, []);

  const handleInputChange = (fieldName: keyof GuestState, value: string) => {
    setLocalState((prevState) => ({ ...prevState, [fieldName]: value }));
  };

  const handleSubmit = async () => {
    const formUrl = import.meta.env.VITE_GUEST_FORM;
    try {
      setLoading(true);
      if (!localState.sex) {
        throw new Error("Please select a gender.");
      }
      console.log("Data being sent:", localState);
      const response = await axios.post(formUrl, localState);
      console.log("Form submitted!", response.data);
      
      // Displaying the response data
      message.success("Form submitted!");
      console.log("Response:", response.data);
  
      // If the response contains an identifier and image URL, you can set them in state
      const Identifier = response.data.user.visitor._id
      console.log(Identifier);
      
      // Get the userQR from the response data
      const userQR = response.data.qrCode;
  console.log(userQR);
  
      // Fetch the QR code using the obtained userQR
      // const qrCode = await axios.post(userQR, { id: Identifier } )
      // const {  imageUrl } = qrCode.data.image;
      //  setIdentifier(id);
       setImageURL(userQR);
  
      // Just showing the modal for now
      setModalVisible(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        const { status, data } = error.response;
        if (status === 400 && data.error === "email_exists") {
          message.error("Email already exists");
        } else {
          message.error(`Server error: ${status} - ${data.message}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        message.error("Network error: No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an error
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

   /* const handleSubmit = async () => {
    const formUrl = import.meta.env.VITE_GUEST_FORM;
    try {
      setLoading(true);
      if (!localState.sex) {
        throw new Error("Please select a gender.");
      }
      console.log("Data being sent:", localState);
      const response = await axios.post(formUrl, localState);
      console.log("Form submitted!", response.data);
      
      // Displaying the response data
      message.success("Form submitted!");
      console.log("Response:", response.data);
  
      // If the response contains an identifier and image URL, you can set them in state
      const Identifier = response.data.user.visitor._id
      console.log(Identifier);
      
      const userQR = import.meta.env.VITE_GUEST_Code
      const qrCode = await axios.post(userQR, { id: Identifier } )
      const {  imageUrl } = qrCode.data.image;
      //  setIdentifier(id);
       setImageURL(imageUrl);
  
      // Just showing the modal for now
      setModalVisible(true);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        const { status, data } = error.response;
        if (status === 400 && data.error === "email_exists") {
          message.error("Email already exists");
        } else {
          message.error(`Server error: ${status} - ${data.message}`);
        }
      } else if (error.request) {
        // The request was made but no response was received
        message.error("Network error: No response received from the server.");
      } else {
        // Something happened in setting up the request that triggered an error
        message.error("An unexpected error occurred. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  }; */

  const downloadPDF = () => {
    const modalImage = document.getElementById('modal-image');
  
    if (!modalImage) return;
  
    html2canvas(modalImage).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0, pdf.internal.pageSize.getWidth(), pdf.internal.pageSize.getHeight());
      pdf.save('qr_code.pdf');
    });
  };

  
  
  
  
  
  
  
  
  


  return (
    <div className=" flex flex-col bg-blue-100 h-screen overflow-auto">
      <img
        src={logo}
        alt=""
        className="w-[8rem] h-[5rem] mb-[3rem] ml-[2rem] mt-5"
      />

      <main className=" flex flex-col mx-[auto] justify-center items-center">
        <footer className="mb-9 flex justify-center items-center gap-[.7rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]">
          <img
            src={stem}
            alt=""
            className="w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
          <img
            src={tech}
            alt=""
            className="w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
          <img
            src={data}
            alt=""
            className="w-[7rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
        </footer>
        <Spin spinning={loading}>
          <Form className="flex flex justify-center">
          <Row gutter={24} className="md:w-[70%] flex justify-center px-8">
            <Col xs={24} md={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "first name is required",
                  },
                ]}
              >
                <Input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("firstName", e.target.value)
                  }
                  value={localState.firstName}
                  className=""
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "last name is required",
                  },
                ]}
              >
                <Input
                  type="text"
                  onChange={(e) =>
                    handleInputChange("lastName", e.target.value)
                  }
                  value={localState.lastName}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Phone No."
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: "Phone number is required",
                  },
                  {
                    pattern: /^[0][\d]{10}$/,
                    message: "Invalid phone number",
                  },
                ]}
              >
                <Input
                  type="tel"
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  value={localState.phoneNumber}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Email is required",
                  },
                  {
                    pattern: /^[\w\.-]+@\w+\.\w+(\.\w+)?$/,
                    message: "Invalid email format",
                  },
                ]}
              >
                <Input
                  type="email"
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  value={localState.email}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Sex"
                name="sex"
                rules={[
                  {
                    required: true,
                    message: "Gender type is required",
                  },
                ]}
              >
                <Select
                  onChange={(e) => handleInputChange("sex", e)}
                  value={localState.sex}
                >
                  <Select.Option value="male">Male</Select.Option>
                  <Select.Option value="female">Female</Select.Option>
                  <Select.Option value="binary">Non-Binary</Select.Option>
                  <Select.Option value="others">
                    Prefer not to say
                  </Select.Option>
                </Select>
              </Form.Item>
            </Col>

            <Col xs={24} md={12}>
              <Form.Item
                label="Address"
                name="homeAddress"
                rules={[
                  {
                    required: true,
                    message: "Residential Address is required",
                  },
                ]}
              >
                <Input
                  className="input"
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  value={localState.address}
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={12}>
              <Form.Item
                label="Reason For Visit"
                name="reasonForVisit"
                rules={[
                  {
                    required: true,
                    message: "Residential Address is required",
                  },
                ]}
              >
                <Input
                  className="input"
                  onChange={(e) =>
                    handleInputChange("reasonForVisit", e.target.value)
                  }
                  value={localState.reasonForVisit}
                />
              </Form.Item>
            </Col>
          </Row>
          </Form>
        </Spin>
      </main>
      <footer className="mb-[1rem] flex justify-center items-center gap-[.7rem] md:gap-[2rem] lg:gap-[2rem] xl:gap-[2rem] 2xl:gap-[2rem]">
        <button
          onClick={handleSubmit}
          className="w-[8rem] rounded bg-[#48c4b4] p-2"
        >
          Submit
        </button>
      </footer>

      <Modal
        title="QR Code"
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        footer={[
          <button
            key="download-pdf"
            onClick={downloadPDF}
            className="w-[8rem] rounded bg-[#48c4b4] p-2"
          >
            Download PDF
          </button>
        ]}
      >
        <div id="modal-image " >
          <img src={imageURL} alt="QR Code" className="flex justify-center items-center " style={{ maxWidth: "100%" }} />
        </div>
      </Modal>
    </div>
  );
};

export default Guest;
