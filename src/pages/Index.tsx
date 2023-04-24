import React from "react";
import Container from "../components/Container";

const Index = () => {
  return (
    <Container>
      <div className="justify-around w-screen grid grid-rows-2 items-center sm:grid-rows-2 font-roboto ">
        <div className="text-light-purple flex flex-col justify-center items-center font-lato">
          <h1 className="text-8xl font-bold">&lt; Guia de estilização /&gt;</h1>
          <h2 className="flex text-5xl">Projetos do NPI</h2>
        </div>
        <div className="flex items-center justify-center font-lato">
          <ul className="flex text-light-purple space-x-7 text-2xl">
            <li className="hover:text-ice-white">
              <a href="#tipografia">Tipografia</a>
            </li>
            <li className="hover:text-ice-white">
              <a href="#cores">Cores</a>
            </li>
            <li className="hover:text-ice-white">
              <a href="#logo">Logo</a>
            </li>
            <li className="hover:text-ice-white">
              <a href="#exemplos">Exemplos</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Index;
