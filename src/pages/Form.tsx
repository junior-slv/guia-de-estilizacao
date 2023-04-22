import React, { useState } from "react";
import Button from "../components/Button";

const Form = () => {
  return (
      <div id="formulario" className="container-2xl h-screen flex items-center justify-center">
        <div className="text-light-purple flex flex-col items-center">
          <div>
            <h1 className="text-2xl font-bold">H1 heading</h1>
          </div>
          <div className="pt-6">
            <h2>H2 heading</h2>
            <input
              className="h-10 w-60 rounded-2xl cursor-pointer text-center text-dark-black bg-light-purple dark:text-ice-white dark:bg-dark-purple"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="p-6">
            <h2>H2 heading</h2>
            <input
              className="h-10 w-60 rounded-2xl cursor-pointer text-center text-dark-black bg-light-purple dark:text-ice-white dark:bg-dark-purple"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="p-6 flex flex-col ">
            <span onClick={() => console.log("teste")}>
              <Button>span</Button>
            </span>
          </div>
        </div>
      </div>
  );
};

export default Form;
