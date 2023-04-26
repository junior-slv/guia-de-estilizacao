import React from "react";
import Container from "../components/Container";

const Tipografia = () => {
  return (
    <Container id="tipografia">
      <div className="grid grid-rows-2 grid-cols-1 items-center justify-center">
        <div className="text-bold font-lato text-6xl text-light-purple  flex items-center justify-center">
          <h1>Tipografia</h1>
        </div>
        <div className="font-roboto text-lg text-ice-white m-5">
          <p>
            Padronize sua identidade visual utilizando Lato bold ou regular para
            títulos e Roboto regular para demais textos em seu guia de estilo.
            Transmita uma imagem profissional e coerente.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center font-roboto text-2xl text-ice-white m-7 text-center">
          <div>
            <h2 className="font-lato font-bold">Para títulos:</h2>
            <p className="font-roboto text-lg">
              {" "}
              <a
                className="text-light-purple underline font-roboto font-normal"
                target="_blank"
                href="https://fonts.google.com/specimen/Lato"
              >
                Lato
              </a>
              - Bold ou Regular
            </p>
          </div>
          <div>
            <h2 className="font-lato font-bold">Para demais textos:</h2>
            <p className="font-roboto text-lg">
              {" "}
              <a
                className="text-light-purple underline font-roboto font-normal"
                target="_blank"
                href="https://fonts.google.com/specimen/Roboto"
              >
                Roboto
              </a>
              - Regular
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Tipografia;
