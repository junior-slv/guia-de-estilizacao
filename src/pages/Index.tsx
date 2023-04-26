import React from "react";
import Container from "../components/Container";
import logoWhite from "../assets/logo-white.png";

const Index = () => {
  return (
    <Container>
      <div className="justify-around w-screen grid grid-rows-2 items-center sm:grid-rows-2 font-roboto bg-purple-room bg-no-repeat sm:bg-cover bg-cover bg-fixed ">
        <div className="text-ice-white flex flex-col justify-center items-center font-lato">
          <h1 className="text-4xl md:text-8xl font-bold">
            &lt; Guia de estilização /&gt;
          </h1>
          <h2 className="text-2xl md:text-4xl">Projetos do NPI</h2>
        </div>

        <div className="flex flex-col items-center justify-center font-lato">
          <span>
            <img src={logoWhite} alt="" />
          </span>
          <ul className="flex md:flex-row flex-col text-ice-white space-x-7 text-2xl ">
            <li className="hover:border-b-4 ease-in-out duration-300 hover:text-ice-white">
              <a href="#tipografia">Tipografia</a>
            </li>
            <li className="hover:border-b-4 ease-in-out duration-300 hover:text-ice-white">
              <a href="#cores">Cores</a>
            </li>
            <li className="hover:border-b-4 ease-in-out duration-300 hover:text-ice-white">
              <a href="#logo">Logo</a>
            </li>
            <li className="hover:border-b-4 ease-in-out duration-300 hover:text-ice-white">
              <a href="#exemplos">Exemplos</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Index;
