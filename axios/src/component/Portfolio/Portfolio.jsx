import React from "react";
import './Portfolio.css';
import { themeContext } from "../../context";
import {Swiper, SwiperSlide} from 'swiper/react';

import Sidebar from "../../imgs/sidebar.png";
import Ecommerce from "../../imgs/ecommerce.png";
import HOC from "../../imgs/hoc.png";
import MusicApp from "../../imgs/musicapp.png";
import "swiper/css";

 const Portfolio =()=>{
    return(
        <div className="portfolio">
           <span>Recent Projects</span><br/>
           <span>Portfolio</span>

           <Swiper
          spaceBetween={0}
          slidesPerView={3}
          grabCursor={true}
          className="portfolio-slider">
                <SwiperSlide>
                <img src={Sidebar} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={Ecommerce} alt="" />
                </SwiperSlide>{""}
                <SwiperSlide>
                <img src={MusicApp} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img src={HOC} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
 }

 export default Portfolio