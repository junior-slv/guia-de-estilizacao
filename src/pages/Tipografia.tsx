import React from "react";
import Container from "../components/Container";

const Tipografia = () => {
  return (
    <Container id="tipografia">
      <div className="grid grid-rows-2 grid-cols-2 items-center justify-center">
        <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center">
          <h1>Tipografia</h1>
        </div>
        <div className="font-roboto text-2xl text-ice-white m-5">
          <h2>
            Para títulos:
            <br />
            <a href="https://fonts.google.com/specimen/Lato">Lato</a> - Bold ou
            Regular
          </h2>
          <h2>
            Para demais textos:
            <br />
            <a href="https://fonts.google.com/specimen/Roboto">Roboto</a> -
            Regular
          </h2>
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

export default Tipografia;
