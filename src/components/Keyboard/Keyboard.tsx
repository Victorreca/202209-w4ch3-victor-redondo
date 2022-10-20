import "./Keyboard.css";
import Key from "../Key/Key";
import PhoneContext from "../../context/PhoneContext";
import { useContext } from "react";

const Keyboard = (): JSX.Element => {
  const keyboardValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  const { addNumber } = useContext(PhoneContext);

  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        {keyboardValues.map((value) => {
          return (
            <li key={value}>
              <Key
                className="key"
                text={value}
                action={() => addNumber(+value)}
              />
            </li>
          );
        })}
        <li key={keyboardValues.length + 1}>
          <Key className="key big" text="delete" action={() => {}} />
        </li>
      </ol>
    </div>
  );
};

export default Keyboard;
