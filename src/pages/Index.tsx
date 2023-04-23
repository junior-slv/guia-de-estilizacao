import React from "react";

const Index = () => {
  return (
    <div className="container-2xl h-screen flex justify-center">
      <div className="text-light-purple w-screen justify-around items-center md:max-2xl:flex md:max-md:block">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-2xl font-bold">
            &lt; Portal da computação /&gt;
          </h1>
          <h2 className="text-4">Guia de estilização</h2>
        </div>
        <div className="flex items-center justify-center">
          <ul className="text-ice-white flex flex-col">
            <li>
              <a href="#formulario">Formulário</a>
            </li>
            <li>
              <a href="#paleta">Paleta de cores</a>
            </li>
            <li>
              <a href="#tipografia">Tipografia</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Index;
