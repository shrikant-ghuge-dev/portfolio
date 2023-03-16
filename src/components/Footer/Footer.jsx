import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        {/* <span>Zainkeepscode@gmail.com</span> */}
        <div className="f-icons">
          <a target="_black" href="https://linkedin.com/in/shrikant-ghuge-01">
            <Linkedin color="white" size={"3rem"} />
          </a>
          <a target="_black" href="https://github.com/shrikant-ghuge-dev">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a target="_black" href="https://facebook.com/shrikant.ghuge1">
            <Facebook color="white" size={"3rem"} />
          </a>
          <a target="_black" href="https://instagram.com/shree.ghuge">
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>
      <div className="f-content b16">&copy; Copyright 2023 shrikant-ghuge.netlify.app</div>
    </div>
  );
};

export default Footer;
