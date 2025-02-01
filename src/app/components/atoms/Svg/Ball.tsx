import { motion } from "framer-motion";
import React from "react";

const Ball = () => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 780 780"
      xmlSpace="preserve"
    >
      <g>
        <circle fill="#231815" cx="390" cy="390" r="390" />
        <g>
          <path
            fill="#E40B20"
            d="M45.4,390C45.4,199.7,199.7,45.4,390,45.4S734.6,199.7,734.6,390"
          />
          <path
            fill="#FFFFFF"
            d="M734.6,390c0,190.3-154.3,344.6-344.6,344.6S45.4,580.3,45.4,390"
          />
        </g>
        <rect x="23.5" y="362.1" fill="#231815" width="733" height="55.7" />
        <circle fill="#231815" cx="390" cy="390" r="167.2" />
        <circle fill="#FFFFFF" cx="390" cy="390" r="114" />
      </g>
    </svg>
  );
};

export default Ball;
