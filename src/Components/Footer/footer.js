import React, { useState, useEffect } from "react";
import './footer.css';

const Footer = () => {
    const [ time, setTime ] = useState(new Date().toTimeString())

useEffect(() => {
    const interval = setInterval(() => tick(), 1000);
    return () => {
        clearInterval(interval);
    }; 
})

const tick = () => {
    setTime(new Date().toTimeString())
}

    return(
        <div className="footer">
             <p><span>&#169;</span> stntsk</p>
            <p>{time}</p>
        </div>

    )
}

export default Footer;