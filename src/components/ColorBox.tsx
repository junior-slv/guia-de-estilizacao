import { ReactNode } from "react";

type ColorBoxProps = {
    children: ReactNode
    className?: string;
  };
  
  const ColorBox = ({ children, className }: ColorBoxProps) => {
    return (
        <div className={`flex items-center justify-center w-64 h-64 ${className}`}>{children}</div>
    );
  };
  
  export default ColorBox;
  