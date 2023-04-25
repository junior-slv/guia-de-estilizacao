import React from "react";

const ScrollButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="fixed bottom-0 right-0 mb-4 mr-4 p-4 rounded-full bg-light-purple text-white"
      onClick={handleClick}
    >
      <i className='bx bx-up-arrow-alt text-2xl text-ice-white'></i>
    </button>
  );
};

export default ScrollButton;
