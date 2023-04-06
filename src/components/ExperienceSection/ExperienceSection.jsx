import './ExperienceSection.css';
import {useLayoutEffect, useRef} from "react";
import flagImg from './Asset 1@2x.png';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Typewriter from 'typewriter-effect/dist/core';

export function ExperienceSection() {

    const header = useRef()
    const textBox = useRef()
    const blueWing = useRef()

    gsap.registerPlugin (ScrollTrigger);

    useLayoutEffect ( () => {

        function writeText() {
            console.log('write');
            const tw = new Typewriter(header.current, {
                loop: false,
                // delay: 190
            });
            tw.typeString('PREVIOUS EXPERIENCE')
            .stop()
            .callFunction(() => {
                gsap.fromTo('.Typewriter__cursor', 
                { opacity: 1 },
                { 
                    ease: 'Power2.easeOut',
                    duration: 0.55,
                    opacity: 0 }
                ).then(() => {
                    document.querySelector('.Typewriter__cursor').remove()
                })
                // document.querySelector('.Typewriter__cursor').classList.add('fade')
                gsap.fromTo(
                    blueWing.current,
                    { height: '0%' },
                    {
                        height: '100%' ,
                        duration: 0.89,
                        ease: 'Power3.easeIn',
                        // scrollTrigger: {
                        //     trigger: blueWing.current,
                        //     start: 'bottom 55%',
                        //     end: 'bottom 55%',
                        //     toggleActions: 'play none none reverse',
                        //     once: true
                        // },
                    }
                )
            })
            .start()
        }

        gsap.fromTo(header.current, 
            { opacity: 0 },
            {
            duration: 0.01,
            opacity: 1,
            scrollTrigger: {
                trigger: blueWing.current,
                start: 'bottom 89%',
                end: 'bottom 89%',
                toggleActions: 'play none none reverse',
                onEnter: () => {
                    writeText()
                    console.log('trigger launch')
                },
                once: true
            },
        })

        // gsap.fromTo(
        //     blueWing.current,
        //     { height: '0%' },
        //     {
        //         height: '100%' ,
        //         duration: 0.89,
        //         ease: 'Power3.easeIn',
        //         scrollTrigger: {
        //             trigger: blueWing.current,
        //             start: 'bottom 55%',
        //             end: 'bottom 55%',
        //             toggleActions: 'play none none reverse',
        //             once: true
        //         },
        //     }
        // ).then(
        //     () => {
                
        //     }
        // )

        

        
        
        // gsap.fromTo(
        //     header.current,
        //     { opacity: 0},
        //     {
        //       opacity: 1,
        //       duration: 0.5,
        //       ease: 'power2.out',
        //       scrollTrigger: {
        //         trigger: header.current,
        //         start: 'top 80%',
        //         end: 'bottom 20%',
        //         toggleActions: 'play none none reverse',
        //       },
        //     }
        //   );
    });

    return (
        <section className={'experience-section'}>
            <img className={'flag-img'} src={flagImg} alt={'Ukrainian flag paint'}/>
            <div className={'experience-heading-container'}>
                <h1 ref={header}>P</h1>
                {/* <h1>OUS</h1>
                <h1>EXPE</h1>
                <h1>RIENCE</h1> */}
            </div>
            <div className={'experience-text-container'} ref={textBox}>
                <div ref={blueWing} className='blue-wing'></div>
                <p className={'experience-text'}>
                    The team and its board has more
                    than 10 year experience in raising
                    donations by outside investors,
                    government entities, private companies 
                    and individuals from
                    Europe, North America and South
                    east
                    Asia. Below we have put few 
                    projects that has been done in the
                    past 10 years and how it has gone
                    for us.
                </p>
            </div>
        </section>
    )
}
