import React from "react";
import Form from "./pages/Form";
import Index from "./pages/Index";
import Cores from "./pages/Cores";
import Tipografia from "./pages/Tipografia";
import Logo from "./pages/Logo";

const App = () => {
  return (
    <main className="flex flex-col">
      <Index/>
      <Tipografia/>
      <Cores/>
      <Logo/>
    </main>
  );
};

export default App;
