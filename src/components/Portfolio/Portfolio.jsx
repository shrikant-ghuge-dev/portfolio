import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import yourip from "../../img/You-Rip.png";
import thecookaway from "../../img/theCookAway.png";
import AdminWellprompt from "../../img/Wellprompt-admin.png";
import adminyourip from "../../img/You-Rip-Admin-Panel.png";
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
      </Swiper>
    </div>
  );
};

export default Portfolio;
