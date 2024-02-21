import { useState } from 'react';

interface EventData {
  email: string;
  password: string;
}

const useLoginData = (): [EventData | undefined, (data: EventData) => void] => {
  const [loginData, setLoginData] = useState<EventData | undefined>();

  const handleInputChange = (data: EventData) => {
    setLoginData(data);
  };

  return [loginData, handleInputChange];
};

export default useLoginData;