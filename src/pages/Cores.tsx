import React from "react";
import Container from "../components/Container";
import Button from "../components/Button";
import ColorBox from "../components/ColorBox";

const Cores = () => {
  return (
    <Container id="cores">
      <div className="grid grid-rows-2 grid-cols-2 items-center justify-center">
        <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center">
          <h1>Cores</h1>
        </div>
        <div className="font-roboto text-2xl text-ice-white m-5 grid grid-cols-2 grid-rows-2 gap-4">
          <ColorBox className="bg-light-purple">#924FD2</ColorBox>
          <ColorBox className="bg-dark-purple">#5E2EB1</ColorBox>
          <ColorBox className="bg-ice-white text-dark-black">#FFFAFA</ColorBox>
          <ColorBox className="bg-dark-black drop-shadow-xl">#252525</ColorBox>
        </div>
        <div className="font-roboto text-2xl text-ice-white m-5"> 
          <p>
            Padronize sua identidade visual utilizando Lato bold ou regular para
            títulos e Roboto regular para demais textos em seu guia de estilo.
            Transmita uma imagem profissional e coerente para sua marca.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Cores;
