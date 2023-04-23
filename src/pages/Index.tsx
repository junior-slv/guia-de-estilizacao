import React from "react";
import Container from "../components/Container";

const Index = () => {
  return (
    <Container>
      <div className="justify-around w-screen grid grid-cols-1 items-center sm:grid-cols-2">
        <div className="text-light-purple flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold">
            &lt; Portal da computação /&gt;
          </h1>
          <h2 className="text-4">Guia de estilização</h2>
        </div>
        <div className="flex items-center justify-center ">
          <ul
            role="list"
            className="marker:text-sky-400 list-disc pl-5 space-y-3 text-ice-white"
          >
            <li>
              <a href="#paleta">Paleta de cores</a>
            </li>
            <li>
              <a href="#tipografia">Tipografia</a>
            </li>
            <li>
              <a href="#formulario">Formulário</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Index;
