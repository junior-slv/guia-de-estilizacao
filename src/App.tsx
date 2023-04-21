import React from "react";

const App = () => {
  return (
    <div className="container-2xl h-screen flex items-center justify-center alig bg-dark-black">
      <div className="text-light-purple flex flex-col items-center">
        <div>
          <h1 className="text-2xl font-bold">H1 heading</h1>
        </div>
        <div className="pt-6">
          <h2>H2 heading</h2>
          <input
            className="text-ice-white bg-dark-purple h-10 w-60 rounded-2xl cursor-pointer text-center"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="p-6">
          <h2>H2 heading</h2>
          <input
            className="text-ice-white bg-dark-purple h-10 w-60 rounded-2xl cursor-pointer text-center"
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <div className="p-6">
          <input
            className="text-ice-white bg-dark-purple h-10 w-36 rounded-2xl cursor-pointer"
            type="button"
            value="Button"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
