import React, { useContext } from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by SMA")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Innovation icon by {" "}
          <a href="https://www.flaticon.com/authors/geotatah">
            geotatah
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Product maturity and final pitch icon by {" "}
          <a href="https://www.flaticon.com/authors/Freepik">
            Freepik
          </a>
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Implementation complexity icon by {" "}
          <a href="https://www.flaticon.com/authors/eucalyp">
            eucalyp
          </a>
        </p>
      </div>
    </Fade>
  );
}
