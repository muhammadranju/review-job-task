type ButtonType = {
  text: string;
  colorStyle: string;
};

const Button = ({ text, colorStyle }: ButtonType) => {
  return (
    <button className={`px-4 py-2  ${colorStyle} rounded-xl cursor-pointer`}>
      {text}
    </button>
  );
};

export default Button;
