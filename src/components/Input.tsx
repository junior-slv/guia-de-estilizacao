type InputProps = {
  type?: string;
  placeholder?: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      className="h-10 w-60 rounded-2xl cursor-pointer text-center text-dark-black bg-light-purple dark:text-ice-white dark:bg-dark-purple"
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
