import { useState } from "react";
import PhoneContext from "./PhoneContext";

interface NumbersContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const NumbersContextProvider = ({
  children,
}: NumbersContextProviderProps): JSX.Element => {
  const [numbers, setNumbers] = useState<number[]>([]);

  const addNumber = (number: number) => {
    if (numbers.length > 8) return;

    setNumbers([...numbers, number]);
  };

  const deleteNumber = (): void => {
    setNumbers(numbers.slice(0, numbers.length - 1));
  };

  return (
    <PhoneContext.Provider value={{ numbers, addNumber, deleteNumber }}>
      {children}
    </PhoneContext.Provider>
  );
};

export default NumbersContextProvider;
