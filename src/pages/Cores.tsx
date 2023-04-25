import { useState } from "react";
import Container from "../components/Container";

const Cores = () => {
  const [copyText, setCopyText] = useState<string>("");
  const handleCopyText = (e: { target: { value: string }; }) => {
    setCopyText(e.target.value);
    navigator.clipboard.writeText(copyText)
    console.log(copyText);
    
  }

  return (
    <Container id="cores">
      <div className="grid grid-rows-2 grid-cols-2 items-center justify-center ">
        <div className="text-bold font-lato text-6xl text-light-purple col-span-3 flex items-center justify-center ">
          <h1>Cores</h1>
        </div>
        <div className="font-roboto text-2xl text-ice-white m-5 grid grid-cols-2 grid-rows-2 gap-4">
          <input onChange={() => console.log("teste")} className="text-ice-white text-center bg-light-purple" type="text" readOnly value="#924FD2" />
          <input onChange={(e) => handleCopyText} className="text-ice-white text-center bg-dark-purple" type="text" readOnly value="#5E2EB1" />
          <input onChange={(e) => handleCopyText} className="text-dark-black text-center bg-ice-white" type="text" readOnly value="#FFFAFA" />
          <input onChange={(e) => handleCopyText} className="text-ice-white drop-shadow-xl text-center bg-dark-black" type="text" readOnly value="#252525" />
        </div>
        <div className="font-roboto text-lg text-ice-white m-5">
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


