import React from "react";
import logo from "../assets/images/netflix-logo.png";

const Logo = () => {
    return <img src={logo} alt="logo" className="logo" />;
};

export default React.memo(Logo);
