import { useEffect, useState } from "react";
import SailLogo from '../../assets/SailInnovationLogo.png';
import { Button, Col, Form, Input, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants/baseUrl";
import toast from "react-hot-toast";

interface EventData {
  email: string;
  password: string;
}

const Signin: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<EventData>({ email: "", password: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserRole = localStorage.getItem("userRole");

    if (storedToken && storedUserRole) {
      const isAdmin: boolean = storedUserRole === "ADMIN";
      const isUser: boolean = storedUserRole === "USER";

      if (isAdmin) {
        navigate("/dashboard/details", {
          replace: true,
        });
      }
      if (isUser) {
        navigate("/user/dashboard/", {
          replace: true,
        });
      }
    }
  }, [navigate]);

  const loginHandler = async () => {
    setLoading(true);
    try {
      const logIn: Response = await fetch(`${BASE_URL}signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      const response: any = await logIn.json();
      
      if (logIn.ok) {
        toast.success(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      
      if (response?.data?.role === "ADMIN") {
        navigate("/dashboard/details", {
          replace: true,
        });
      }
      
      if (response?.data?.role === "USER") {
        navigate("/user/dashboard/", {
          replace: true,
        });
      }
      
      if (!logIn.ok) {
        toast.error(response.responseMessage, {
          duration: 4000,
          position: "top-center",
        });
      }
      
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userRole", response.data.role);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <div className=" grid-cols-2  h-[100svh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className="  justify-center m-auto my-[4rem] items-center bg-white w-[25rem]">
        <div className="text-center  text-2xl font-bold">
          <h1>Sign In</h1>
        </div>
        <div className="block justify-center items-center flex-col  h-80 mt-10 ">
          <div className="ml-[1.4rem]">
            <Form
              layout="vertical"
              onFinish={loginHandler}
              initialValues={loginData}
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Email Address!",
                      },
                    ]}
                  >
                    <Input
                      onChange={handleInputChange}
                      name="email"
                      type="email"
                      id="email"
                      placeholder="Email Address"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>

                <Col span={24}>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password
                      onChange={handleInputChange}
                      name="password"
                      placeholder="Password"
                      type="text"
                      id="password"
                      className="py-3"
                    />
                  </Form.Item>
                </Col>
                <Col span={24}>
                  <Button
                    loading={loading}
                    type="primary"
                    htmlType="submit"
                    className="bg-[#134c98] flex items-center justify-center py-5"
                    block
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
