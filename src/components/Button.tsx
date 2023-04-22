import React, { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}
const Button = ({children}:ButtonProps) => {
  return (
    <button className="h-10 w-36 rounded-2xl cursor-pointer text-dark-black bg-light-purple dark:text-ice-white dark:bg-dark-purple">
        <span>{children}</span>
    </button>
  )
}

export default Button