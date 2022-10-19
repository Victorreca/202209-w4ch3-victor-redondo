import { useCallback, useState } from "react";
import PhoneContext from "./PhoneContext";

interface NumbersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const NumbersContextProvider = ({
  children,
}: NumbersContextProviderProps): JSX.Element => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const loadNumbers = useCallback((numbers: number[]) => {
    setNumbers([...numbers]);
  }, []);

  const addNumber = (number: number) => {
    if (numbers.length > 8) return;

    setNumbers([...numbers, number]);
  };

  return (
    <PhoneContext.Provider value={{ numbers, loadNumbers, addNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default NumbersContextProvider;
