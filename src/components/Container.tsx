import React, { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

const Container = ({ children, className, id }: ContainerProps) => {
  return (
    <div id={`${id}`} className={`container-2xl h-screen flex justify-center ${className}`} >
      {children}
    </div>
  );
};

export default Container;