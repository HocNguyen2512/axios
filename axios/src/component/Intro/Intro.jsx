import React from "react";
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import {motion} from 'framer-motion';
import { Link } from "react-scroll";


import Github from '../../imgs/github.png';
import LinkedIn from '../../imgs/linkedin.png';
import Instagram from '../../imgs/instagram.png';
import Vector1 from '../../imgs/Vector1.png';
import Vector2 from '../../imgs/Vector2.png';
import boy from '../../imgs/boy.png';
import thumbup from '../../imgs/thumbup.png';
import Crown from '../../imgs/crown.png';
import glassesimoji from '../../imgs/glassesimoji.png';
import { themeContext } from "../../context";
import { useContext } from "react";


const Intro=()=>{
    const transition = {duration:2, type:'spring'};

    const theme =useContext(themeContext);
    const darkMode = theme.state.darkMode;
 return(
    <div className="Intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color: darkMode? 'white': ''}}>Hy ! I Am</span>
                <span>Andrew Thomas</span>
                <span>Frontend Developer with high level of experience in web designing
                    and development, producting the Quality work
                </span>
            </div>
            <button className="button i-button">Hire me</button>
            <div className="i-icons">
                <img src={Github} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={boy} alt="" />
            <motion.img  
            initial={{left:'-36%'}}
            whileInView={{left:'-24%'}}
            transition={transition}
            src={glassesimoji} alt="" />
            <div style={{top:'-4%', left:'68%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Best Design'  txt2='Award' />
            </div>
             

             <div className="blur" style={{ background: "rgb(238 210 255)"}}>

             </div>
             <div className="blur"
                style={{
                    background:'C1F5FF',
                    top:'17rem',
                    width:'21rem',
                    height:'11rem',
                    left:'-9rem',
                }}
             >

             </div>
        </div>
    </div>
 )   
}
export default Intro