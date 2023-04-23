import React, { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";

const Form = () => {
  return (
      <Container id="formulario">
        <div className="text-light-purple flex flex-col items-center">
          <div>
            <h1 className="text-2xl font-bold">H1 heading</h1>
          </div>
          <div className="pt-6">
            <h2>H2 heading</h2>
            <Input type="text" placeholder="Enter your username"/>
          </div>
          <div className="p-6">
            <h2>H2 heading</h2>
            <Input type="password" placeholder="Enter your password"/>
          </div>
          <div className="p-6 flex flex-col ">
            <span onClick={() => console.log("teste")}>
              <Button>SEND</Button>
            </span>
          </div>
        </div>
      </Container>
  );
};

export default Form;
