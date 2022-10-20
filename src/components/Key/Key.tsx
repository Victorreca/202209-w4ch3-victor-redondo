interface KeyProps {
  text: string;
  className: string;
  action: () => void;
}

const Key = ({ text, className, action }: KeyProps): JSX.Element => {
  return (
    <button className={className} onClick={action}>
      {text}
    </button>
  );
};

export default Key;
