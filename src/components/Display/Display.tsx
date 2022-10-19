import { useContext } from "react";
import NumbersContext from "../../context/PhoneContext";
const Display = (): JSX.Element => {
  const { numbers } = useContext(NumbersContext);

  return <span className="number">{numbers}</span>;
};

export default Display;
