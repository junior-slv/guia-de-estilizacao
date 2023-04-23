import React from "react";
import Form from "./pages/Form";
import Index from "./pages/Index";
import Paleta from "./pages/Paleta";
import Tipografia from "./pages/Tipografia";

const App = () => {
  return (
    <main className="flex flex-col">
      <Index/>
      <Form/>
      <Paleta/>
      <Tipografia/>
    </main>
  );
};

export default App;
