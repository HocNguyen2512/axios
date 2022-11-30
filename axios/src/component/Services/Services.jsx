import React from "react";
import'./Services.css';
import HeartEmoji from "../../imgs/heartemoji.png";
import Glasses from "../../imgs/glasses.png";
import Humble from "../../imgs/humble.png"
import Card from '../Card/Card' 
import Experience from "../Experience/Experience";
import Resume from './resume.pdf';
const Services=()=>{
    return(
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>services</span>
                <spane>
                    Lorem ispum is simley dummy text of printing of printing Lorem
                    <br />
                </spane>
              <a href={Resume} Download>
                <button className="button s-button"> Download CV </button>
              </a>
                <div className="blur s-blur" style={{background:"ABF1FF94"}}></div>
            </div>
            <div className="cards">
                <div style={{left:'14rem'}}>
                    <Card
                        emoji = {HeartEmoji}
                        heading = {"Design"}
                        detail = {"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
                    />
                </div>
           
                <div style={{top:'12rem', left:'-11rem'}}>
                    <Card
                        emoji = {Glasses}
                        heading = {"Developer"}
                        detail = {"Html, Css, JavaScript, React"}
                    />
                </div>
                <div style={{top:'19rem', left:'12rem'}}>
                    <Card
                        emoji = {Humble}
                        heading = {"UI/UX"}
                        detail = {"Lorem ispum dummy text are usually use in section where..."}
                    />
                </div>
                <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
            </div>

        </div>
    )
}

export default Services