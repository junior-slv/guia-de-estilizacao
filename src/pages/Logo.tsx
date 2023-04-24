import React from "react";
import Container from "../components/Container";
import logo from "../assets/unifil.png";

const Logo = () => {
  return (
    <Container id="logo">
      <div className="grid">
        <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center">
          <h1>Logo</h1>
        </div>
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="font-roboto text-2xl text-ice-white m-5">
          <p>
            Para garantir uma identidade visual coesa e consistente em nosso
            projeto, gostaríamos de informar as logos que devem ser utilizadas.
            Caso haja a necessidade de fazer alguma mudança nas logos, é
            imprescindível seguir as regras estabelecidas em nosso manual de
            identidade visual. Esse manual contém informações importantes sobre
            as cores, fontes, proporções e outras características que devem ser
            respeitadas para garantir a consistência da marca.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Logo;
