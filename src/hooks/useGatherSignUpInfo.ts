import { useState } from 'react';

type SignUpData = {
  firstName: string;
  lastName: string;
  email: string;
  programme: string;
  password: string;
};

type SignUpDataUpdater = (value: string, fieldName: keyof SignUpData) => void;

const useGatherSignUpInfo = (): [SignUpData, SignUpDataUpdater] => {
  const [signUpData, setSignUpData] = useState<SignUpData>({
    firstName: '',
    lastName: '',
    email: '',
    programme: '',
    password: '',
  });

  const handleSignUpData: SignUpDataUpdater = (value, fieldName) => {
    setSignUpData(prevState => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  return [signUpData, handleSignUpData];
};

export default useGatherSignUpInfo;
