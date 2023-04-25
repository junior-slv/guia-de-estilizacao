import React from "react";
import Form from "./pages/Form";
import Index from "./pages/Index";
import Cores from "./pages/Cores";
import Tipografia from "./pages/Tipografia";
import Logo from "./pages/Logo";
import ScrollButton from "./components/ScrollButton";

const App = () => {
  return (
    <main className="flex flex-col">
      <Index/>
      <Tipografia/>
      <Cores/>
      <Logo/>
      <ScrollButton/>
    </main>

  );
};

export default App;
