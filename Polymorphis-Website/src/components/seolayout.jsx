// src/components/SeoLayout.jsx
import React from "react";
import StructuredData from "./StructuredData";

const SeoLayout = ({ children }) => {
  return (
    <div>
      <StructuredData />
      {children}
    </div>
  );
};

export default SeoLayout;
