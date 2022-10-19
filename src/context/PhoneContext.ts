import { createContext } from "react";

interface PhoneContextStructure {
  numbers: number[];
  loadNumbers: (numbers: number[]) => void;

  addNumber: (numbers: number) => void;
}

const NumbersContext = createContext<PhoneContextStructure>(
  {} as PhoneContextStructure
);

export default NumbersContext;
