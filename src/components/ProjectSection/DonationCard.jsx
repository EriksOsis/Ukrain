import './DonationCard.css';
import {useState} from "react";
import { gsap } from "gsap";


export function DonationCard(props) {
    const [containerAnimation, setContainerAnimation] = useState({});
    const [imgAnimation, setImgAnimation] = useState({});

    const tl = gsap.timeline({paused: false})
    let init = false

    const onEnter = ({ currentTarget }) => {
        const parent = currentTarget
        const bgBox = parent.querySelector(".donation__bg")
        const imgBox = parent.querySelector(".donation__image")
        const title = parent.querySelector("h2")
        if (!init) {
            tl.to(bgBox, { width: '100%', duration: 0.1 })
            tl.to(title, { backgroundPositionX: '0%', duration: 0.2 })
            tl.to(imgBox, { translateY: "0%", duration: 0.3 })
            init = true
        }

        tl.reversed(false)
    };

    const onLeave = ({ currentTarget }) => {
        tl.reversed(!tl.reversed())
    };


    return (
        <div className={'donation'} onMouseEnter={onEnter} onMouseLeave={onLeave}>

            <div className="donation__title" >
                <div className="donation__bg"></div>
                <h2>
                    {props.heading}
                </h2>
            </div>

            <div className="donation__image"
                style={{
                    backgroundImage: `url(${(props.img)})`
                }}>
            </div>
        </div>
    )
}
