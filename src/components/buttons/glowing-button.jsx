import React from "react";

const GlowingButton = ({ title }) => {
  return (
    <div className="flex flex-col justify-center items-center text-sm  px-8 py-[6px] rounded-full bg-[#0F0B15] text-white text-center glowing-border shadow-custom">
      {title}
    </div>
  );
};

export default GlowingButton;
