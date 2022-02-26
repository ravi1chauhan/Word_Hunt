import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <hr style={{ width: "90%", marginTop: 20 }} />
            <span className="name">
                Made by{" "}
                Ravi Chauhan
            </span>
            <div className="iconContainer">
                <a href="https://www.linkedin.com/in/ravi1chauhan" target="__blank">
                    <i className="fab fa-linkedin fa-2x"></i>
                </a>
                <a href="https://www.github.com/c/ravi1chauhan" target="__blank">
                    <i className="fab fa-github fa-2x"></i>
                </a>
                <a href="https://www.instagram.com/ravi1chauhan/" target="__blank">
                    <i className="fab fa-instagram-square fa-2x"></i>
                </a>
                <a href="https://www.facebook.com/erravi1chauhan/" target="__blank">
                    <i className="fab fa-facebook-square fa-2x"></i>
                </a>
            </div>
        </div>
    );
};

export default Footer;