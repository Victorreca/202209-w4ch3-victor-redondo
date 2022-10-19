import { createContext } from "react";
import Number from "../data/types";

interface NumbersContextStructure {
  numbers: Number[];
}

const NumbersContext = createContext<NumbersContextStructure>(
  {} as NumbersContextStructure
);

export default NumbersContext;
