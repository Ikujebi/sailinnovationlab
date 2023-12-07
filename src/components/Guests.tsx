import { useState, useEffect, FC } from "react";
import axios, { AxiosResponse } from "axios";
import { Col, Form, Input, Row, Select, message, Spin } from "antd";
import logo from "../images/sail_logo-removebg-preview.png";
import stem from "../images/stem.jpg";
import tech from "../images/tech talent.png";
import data from "../images/datascience.png";

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

  const useFetchOptions = async (): Promise<any[]> => {
    try {
      setLoading(true);
      const response: AxiosResponse<any> = await axios.post(
        import.meta.env.VITE_APP_VITE_GUEST_FORM
      );
      return response.data.data;
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

  const handleSubmit = () => {
    message.success("Form submitted!");
    console.log("Form submitted!");
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
            className="w-[11rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
          <img
            src={tech}
            alt=""
            className="w-[11rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
          <img
            src={data}
            alt=""
            className="w-[11rem] md:w-[15rem] xl:w-[15rem] lg:w-[15rem] 2xl:w-[15rem]"
          />
        </footer>
        <Spin spinning={loading}>
          <Row gutter={24} className="md:w-[70%] flex justify-center">
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
    </div>
  );
};

export default Guest;
