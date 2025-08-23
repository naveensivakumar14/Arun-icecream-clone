import { useState } from "react"
import aboutBanner from "../assets/images/about-banner.jpg"

import Testimonial from "./Testimonial"

function About(){

    return(
       <div>
        <div className="flex justify-center items-center">
            <img className="md:w-3/4" src={aboutBanner} alt="aboutsection" />
        </div>

        <Testimonial/>
        </div>

    )
}

export default About