import React from "react";
import './Contact.css';

const Contact =()=>{
    return(
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span>Get in touch</span> <br/>
                    <span>Contact me</span>
                    <div className="blur t-blur1" style={{background:"ABF1FF94"}}>
                        
                    </div>
                </div>
            </div>
            <div className="c-right">
               <form>
               <input type="name" name="user_name" className="user" placeholder="Name" />
                <input type="email" name="user_email" className="user" placeholder="Email" />
                <input type="massage" className="user" placeholder="Message" />
                <input type="submit" className="button" value="Send" />
                <div
                className="blur c-blur1"
                style={{background:"var(--purple)"}}
                >
                    
                </div>
               </form>
            </div>
        </div>
    )
}

export default Contact