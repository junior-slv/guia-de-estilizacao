import React from "react";
import Container from "../components/Container";
import logo from "../assets/unifil.png";
import logoWhite from "../assets/logo-white.png";
import logoBlack from "../assets/logo-black.png";
import logoW from "../assets/logo-w.png";
import Button from "../components/Button";
import manual from '../assets/manual.pdf'

const Logo = () => {
  return (
    <Container id="logo">
      <div className="grid m-10">
        <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center">
          <h1>Logo</h1>
        </div>
        <div>
          <img src={logoW} alt="" />
          <img src={logo} alt="" />
          <img src={logoWhite} alt="" />
        </div>
        <div className="font-roboto text-2xl text-ice-white m-32 flex flex-col items-center">
          <p>
            Para garantir uma identidade visual coesa e consistente em nosso
            projeto, gostaríamos de informar as logos que devem ser utilizadas.
            Caso haja a necessidade de fazer alguma mudança nas logos, é
            imprescindível seguir as regras estabelecidas em nosso manual de
            identidade visual. Esse manual contém informações importantes sobre
            as cores, fontes, proporções e outras características que devem ser
            respeitadas para garantir a consistência da marca.
          </p>
          <div className="space-x-7">
            <Button>Baixar</Button>
            <Button><a href={manual} target="_blank">Manual</a></Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Logo;
