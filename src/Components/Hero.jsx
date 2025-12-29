import React from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import hp1 from "../assets/heropic.jpg"
import hv from "../assets/hero-vid.mp4"
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger,SplitText)

const Hero = () => {
    useGSAP(() => {
        let box=document.getElementById('slide-last')
        let c=SplitText.create(".slider-child-text",{type:"words"})
        console.log(c.words)

        gsap.set(box,{
            clipPath: "inset(0 0 0 0)"
        })

        gsap.to(box,{
            clipPath:"inset(0 100% 0 0)",
            duration:0.5,
            scrollTrigger:{
                trigger:".hero",
                start:"top top",
                end:"bottom bottom",
                scrub:1
            }
        })

    }, [])
    return (
        <div className='hero'>
            <div className='slider'>
                <div className="slider-child" id="slide-last">
                    <div className='slider-child-media'>
                        <img src={hp1} alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className='slider-child-text text-[5.5rem] md:text-8xl xl:text-9xl text-slate-200 uppercase font-bold'>king of skies</div>
                </div>
                <div className="slider-child overflow-hidden" >
                   <video src={hv} muted={true} autoPlay={true} loop={true} controls={true} className='object-cover w-full h-full'/>
                </div>
            </div>
        </div>
    )
}

export default Hero