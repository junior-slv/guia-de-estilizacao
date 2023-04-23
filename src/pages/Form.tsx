import React, { useState } from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Input from "../components/Input";

const Form = () => {
  return (
    <Container id="formulario">
      <div className="justify-around w-screen grid grid-cols-2 items-center sm:flex-row">
        <div className="text-light-purple flex flex-col items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold">H1 heading</h1>
          </div>
          <div className="pt-6">
            <h2>H2 heading</h2>
            <Input type="text" placeholder="Enter your username" />
          </div>
          <div className="pt-6">
            <h2>H2 heading</h2>
            <Input type="password" placeholder="Enter your password" />
          </div>
          <div className="pt-6 flex flex-col ">
            <span onClick={() => console.log("teste")}>
              <Button>SEND</Button>
            </span>
          </div>
        </div>
        <div className="text-ice-white">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil rerum, unde suscipit perferendis ipsum dolores delectus esse provident praesentium placeat. Animi illo quam enim optio ut suscipit aliquam eligendi.</p>
        </div>
      </div>
    </Container>
  );
};

export default Form;
