import React from "react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src="/logo_transparent.png" alt="logo" style={{ width: "25%" }} />
    </div>
  );
};

export default Header;
