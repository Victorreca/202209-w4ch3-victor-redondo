import { createContext } from "react";

interface PhoneContextStructure {
  numbers: number[];

  deleteNumber: () => void;
  addNumber: (numbers: number) => void;
}

const NumbersContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default NumbersContext;
