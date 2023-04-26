import React from "react";
import Container from "../components/Container";
import logo from "../assets/unifil.png";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import logoW from "../assets/logo-w.png";
import Button from "../components/Button";
import manual from "../assets/manual.pdf";

const Logo = () => {
  return (
    <Container id="logo">
      <div className="grid grid-rows-3 grid-cols-1 items-center justify-center ">
        <div className="text-bold font-lato text-6xl text-light-purple flex items-center justify-center ">
          <h1>Logo</h1>
        </div>

        <div className="font-roboto text-lg text-ice-white m-5 fit max-h-80 overflow-auto">
          <p>
            Para garantir uma identidade visual coesa e consistente em nosso
            projeto, gostaríamos de informar as logos que devem ser utilizadas.
            Caso haja a necessidade de fazer alguma mudança nas logos, é
            imprescindível seguir as regras estabelecidas em nosso manual de
            identidade visual. Esse manual contém informações importantes sobre
            as cores, fontes, proporções e outras características que devem ser
            respeitadas para garantir a consistência da marca.
          </p>
          <div className="flex items-center justify-center space-x-7 m-5">
          <Button>
              <a href={manual} target="_blank">
                Logos
              </a>
            </Button>
            <Button>
              <a href={manual} target="_blank">
                Manual
              </a>
            </Button>
          </div>
          {/* <div className="md:m-20">
            <a href={logoWhite}>
              <img src={logoW} alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </Container>
  );
};

export default Logo;
