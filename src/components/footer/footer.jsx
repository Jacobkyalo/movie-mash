import React from "react";
import "./footer.scss";

const Footer = () => {
    const date = new Date().getFullYear();

    return (
        <footer className="footer">
            <p>
                &copy; {date} Netflix clone. Made by{" "}
                <a href="/" target="_blank">
                    Jacob
                </a>
            </p>
        </footer>
    );
};

export default React.memo(Footer);
