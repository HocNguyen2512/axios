import React from "react";
import './Works.css';

import Upwork from "../../imgs/Upwork.png";
import Fiverr from "../../imgs/fiverr.png";
import Amazon from "../../imgs/amazon.png";
import Shopify from "../../imgs/Shopify.png";
import Facebook from "../../imgs/Facebook.png";



const Works =()=>{
    return(
        <div className="works">
             <div className="awesome">
                <span>Works for All these</span>
                <span>Brands & Clients</span>
                <spane>
                    Lorem ispum is simley dummy text of printing of printing Lorem
                    <br />
                    ispum is simley dummy text of printing
                    <br/>
                    ispum is simley dummy text of printing
                    <br/>
                </spane>
                <button className="button s-button"> Hire me! </button>
                <div className="blur s-blur" style={{background:"ABF1FF94"}}></div>
            </div>
            <div className="w-right">
                <div className="w-mainCircle">
                    <div className="w-secCircle">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Fiverr} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Amazon} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Shopify} alt="" />
                    </div>
                    <div className="w-secCircle">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}
export default Works