import {  useLayoutEffect, useState, ChangeEvent, FormEvent,FC } from "react";
import SailLogo from "../../assets/SailInnovationLogo.png";
import Modal from "./ForgotModal";
import { Button, Col, Form, Input, Row } from "antd";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios'

interface SignInInfo {
  email: string;
  password: string;
}

const Signin:FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [_message, setMessage] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [signInInfo, setSignInInfo] = useState<SignInInfo>({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState<Partial<SignInInfo>>({
    email: '',
  });

  // const openModal = () => {
  //   setModalIsOpen(true);
  // };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const navigate = useNavigate();

  useLayoutEffect(() => {
    document.title = "Login | Sail Admin Portal"
    if (sessionStorage.getItem("user")) {
      window.location.href = "/resetpassword"
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignInInfo((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let newErrors: Partial<SignInInfo> = {};
    if (!signInInfo.email) {
      newErrors.email = 'Email is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (validateForm()) {
        const { email } = signInInfo;
        const response = await axios.post(
          process.env.REACT_APP_SSMP_BACKEND_API + "user/forgotPassword", { email }
        )
        setMessage(response.data.responseMessage?.toUpperCase());
        if (response.data.responseCode === "00") {
          toast.success(response.data.responseMessage, {
            duration: 4000,
            position: "top-center",
          });
          
          
          sessionStorage.getItem("token");
          sessionStorage.getItem("userRole");
          setMessage('Login successful');
          navigate('/dashboard');
        } else {
          setMessage('Invalid credentials');
          toast.error(response.data.responseMessage, {
            duration: 4000,
            position: "top-center",
          });
          setLoading(false);
         
        }
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="grid-cols-2  h-[100svh]">
      <div className="w-[10rem] mx-[2rem]">
        <img src={SailLogo} alt="SailLogo" />
      </div>

      <div className="justify-center m-auto my-[4rem] items-center bg-white w-[25rem]">
        <div className="text-center text-2xl font-bold mt-[50%]">
          <h1>Forgot Password</h1>
        </div>
        <div className="block justify-center items-center flex-col h-80 mt-10 ">
          <div className="ml-[1.4rem] ">
            <Form
              layout="vertical"
              onFinish={loginHandler}
              fields={[
                {
                  name: "email",
                  value: signInInfo?.email,
                },
              ]}
            >
              <Row>
                <Col span={24}>
                  <Form.Item
                    rules={[
                      {
                        required: true,
                        message: "Please input your EmailAddress!",
                      },
                    ]}
                    validateStatus={errors.email ? 'error' : ''}
                    help={errors.email}
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
                  <Link to={"/resetpassword"}>
                    <Button
                      loading={loading}
                      type="primary"
                      htmlType="submit"
                      className="bg-[#134c98] mt-[2rem] flex items-center justify-center py-5"
                      block
                    >
                      Forgot Password
                    </Button>
                    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} />
                  </Link>
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
