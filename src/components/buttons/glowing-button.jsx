import React from "react";

const GlowingButton = ({ title }) => {
  return (
    <div
      className="flex flex-col justify-center items-center text-sm px-8 py-[6px] rounded-full bg-orange-100 text-white text-center glowing-border shadow-lg"
    >
      {title}
    </div>
  );
};

export default GlowingButton;
