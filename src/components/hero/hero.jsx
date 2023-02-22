import React from "react";
import "./hero.scss";
import logo from "../../assets/images/netflix-logo.png";
import FormComponent from "../forminput/form";
import { headerParagraph, headerParagraphSmall } from "../../utils/strings";

const Hero = () => {
    return (
        <header className="header-wrapper">
            <div className="container">
                <nav className="nav">
                    <img src={logo} alt="logo" className="logo" />
                    <a
                        style={{
                            textDecoration: "none",
                            fontSize: "1.2rem",
                            backgroundColor: "var(--primary-color)",
                            color: "var(--color)",
                            padding: "9px 15px",
                            border: "none",
                            outline: "none",
                            borderRadius: "5px",
                        }}
                        href="/"
                        rel="no-referrer"
                    >
                        Sign In
                    </a>
                </nav>
                <div className="header-content">
                    <h1>
                        Unlimited movies, TV <br /> shows, and more.
                    </h1>
                    <p className="paragraph-1">{headerParagraph}</p>
                    <p className="paragraph-2">{headerParagraphSmall}</p>

                    <FormComponent />
                </div>
            </div>
        </header>
    );
};

export default React.memo(Hero);
