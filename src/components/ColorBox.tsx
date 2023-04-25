import { ReactNode } from "react";


type ColorBoxProps = {
    children: ReactNode;
    className?: string;
  };
  
  const ColorBox = ({ children, className}: ColorBoxProps) => {
    return (
        <div className={`flex items-center justify-center h-50 ${className}`}>{children}</div>
    );
  };
  
  export default ColorBox;
  