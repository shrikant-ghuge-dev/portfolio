import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import yourip from "../../img/You-Rip.png";
import thecookaway from "../../img/theCookAway.png";
import AdminWellprompt from "../../img/Wellprompt-admin.png";
import adminyourip from "../../img/You-Rip-Admin-Panel.png";
import speechToText from "../../img/Speech-to-Text.png";
import qrCodeScanner from "../../img/Qrcodescanner.PNG";
import yoom from "../../img/Yoom.PNG";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://www.yourip.com" target="_blank" rel="noreferrer">
            <img src={yourip} alt="yourip" />
            <div className="text-center">YouRip</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://www.thecookaway.com" target="_blank" rel="noreferrer">
            <img src={thecookaway} alt="thecookaway" />
            <div className="text-center">TheCookAway</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="http://admin.yourip.com" target="_blank" rel="noreferrer">
            <img src={adminyourip} alt="yourip admin panel" />
            <div className="text-center">YouRip Admin Panel</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://app.wellprompt.com" target="_blank" rel="noreferrer">
            <img src={AdminWellprompt} alt="Admin Wellprompt" />
            <div className="text-center">Wellprompt Admin Panel</div>
          </a>
        </SwiperSlide>

        <SwiperSlide>
          <a href="https://speechscribe.netlify.app/" target="_blank" rel="noreferrer">
            <img src={speechToText} alt="Speech to text" />
            <div className="text-center">Speech to Text</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://quickqrcodegenerator.vercel.app/" target="_blank" rel="noreferrer">
            <img src={qrCodeScanner} alt="Speech to text" />
            <div className="text-center">QR Code Generator</div>
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://zoom-clone-nextjs.vercel.app/sign-in" target="_blank" rel="noreferrer">
            <img src={yoom} alt="Zoom clone" />
            <div className="text-center">Zoom Clone</div>
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
