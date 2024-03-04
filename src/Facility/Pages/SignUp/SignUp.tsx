import { useState } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import { Link } from "react-router-dom";
import { Form, Row, Col, Button, Input } from "antd";
import useGatherInputFields from "../../../hooks/useGatheInputFields";

interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  programme?: string;
  password?: string;
}

const SignUp: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<FormData | undefined>(undefined);

  const formSubmitHandler = async () => {
    setLoading(true);
    try {
      const sendData = await fetch("https://ams-backend-yjri.onrender.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const response = await sendData.json();
      setLoading(false);

      console.log(response);
      alert(response?.responseMessage);
    } catch (error) {
      console.log(`There is error while trying to send ${error}`);
      setLoading(false);
    }
  };

  const { setEventInputs } = useGatherInputFields(setFormData);

  return (
    <div className="grid-cols-2 h-[100vh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className="justify-center m-auto items-center bg-white w-[25rem]">
        <div className="text-center text-2xl font-bold">
          <h1>Sign Up</h1>
        </div>

        <div className="block justify-center items-center flex-col h-80 mt-10">
          <div className="ml-[1.4rem]">
            <Form
              layout="vertical"
              onFinish={formSubmitHandler}
              fields={[
                { name: "email", value: formData?.email },
                { name: "password", value: formData?.password },
                { name: "firstName", value: formData?.firstName },
                { name: "lastName", value: formData?.lastName },
                { name: "programme", value: formData?.programme },
              ]}
            >
              <Row>
                <Col span={24}>
                  <Form.Item>
                    <Input
                      onChange={(e) => {
                        setEventInputs(e.target.value, "firstName");
                      }}
                      name="firstName"
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      rules={[
                        { required: true, message: "please enter your First Name" },
                      ]}
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                {/* Other form items go here */}

                <Col span={24}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    className="bg-[#134c98] flex items-center justify-center py-5"
                    block
                  >
                    Sign Up
                  </Button>
                </Col>
                <Col span={24}>
                  <span className="text-sm font-normal md-2 pl-[1rem]">
                    Already have an account?{" "}
                    <Link to="/" className="text-[#75C2F6]">
                      Sign In
                    </Link>
                  </span>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
