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
      <div className="grid grid-rows-2 grid-cols-2 items-center justify-center ">
      <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center ">
          <h1>Logo</h1>
        </div>
        <div className="md:m-20">
          <a href={logoW} target="_blank"><img src={logoW} alt="" /></a>
          <a href={logo}><img src={logo} alt="" /></a>
          <a href={logoWhite}><img src={logoWhite} alt="" /></a>
        </div>
        <div className="font-roboto text-lg text-ice-white m-5 break-words">
          
          <p>
            Para garantir uma identidade visual coesa e consistente em nosso
            projeto, gostaríamos de informar as logos que devem ser utilizadas.
            Caso haja a necessidade de fazer alguma mudança nas logos, é
            imprescindível seguir as regras estabelecidas em nosso manual de
            identidade visual. Esse manual contém informações importantes sobre
            as cores, fontes, proporções e outras características que devem ser
            respeitadas para garantir a consistência da marca.
          </p>
          <div>
            <Button><a href={manual} target="_blank">Manual</a></Button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Logo;
