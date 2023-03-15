import React, { useContext } from "react";
import "./Works.css";
import Fujitsu from "../../img/Fujitsu.png";
import mobisoft from "../../img/mobisoft-infotech.png";
import pmr from "../../img/pmr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Companies</span>
          <spane>
            I have worked with a diverse range of companies across various industries,
            <br />
            including startups, small businesses, and large corporations. These experiences
            <br />
            have enabled me to develop customized solutions to meet the specific needs of
            <br />
            each client. I am proud of the work I have done and look forward to collaborating
            <br />
            with organizations of all sizes and backgrounds.
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={mobisoft} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={pmr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fujitsu} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
