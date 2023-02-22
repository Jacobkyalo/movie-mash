import React from "react";
import "./section.scss";

const SectionComponent = ({ children }) => {
    return <section className="section-wrapper">{children}</section>;
};

export default React.memo(SectionComponent);
