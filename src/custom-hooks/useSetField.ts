import { useCallback, Dispatch, SetStateAction } from "react";

interface UseSetFieldProps {
  setfield: Dispatch<SetStateAction<{ [key: string]: any }>>;
}

const useSetField = ({ setfield }: UseSetFieldProps) => {
  const setRequest = useCallback(
    (key: string, value: any) => {
      setfield((prev) => {
        return {
          ...prev,
          [key]: value,
        };
      });
    },
    [setfield]
  );

  return { setRequest };
};

export default useSetField;
