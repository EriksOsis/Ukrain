import './DonationCard.css';
import {useState} from "react";
import { gsap } from "gsap";


export function DonationCard(props) {
    const [containerAnimation, setContainerAnimation] = useState({});
    const [imgAnimation, setImgAnimation] = useState({});

    // const [gsapTL, setGsapTL] = useState(gsap.timeline());

    const tl = gsap.timeline({paused: false})

    let init = false

    // const parent = this
    // const bgBox = parent.querySelector(".donation__bg")
    // const imgBox = parent.querySelector(".donation__image")
    // const title = parent.querySelector("h2")

    // tl.to(bgBox, { width: '100%', duration: 0.1 })
    // tl.to(title, { backgroundPositionX: '0%', duration: 0.2 })
    // tl.to(imgBox, { translateY: "0%" })

    // tl.revese()

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

        console.log(bgBox);

        
    };

    const onLeave = ({ currentTarget }) => {
        tl.reversed(!tl.reversed())
        console.log("stuff");
        // gsap.to(currentTarget, { backgroundColor: "#28a92b", scale: 1 });
    };

    // function onHoverHandler() {
    //     setContainerAnimation({
    //         animationName: 'container-open',
    //         animationDuration: '.2s',
    //         animationTimingFunction: 'ease-out',
    //         animationFillMode: 'forwards'
    //     });

    //     setImgAnimation({
    //         animationName: 'img-open',
    //         animationDuration: '.2s',
    //         animationTimingFunction: 'ease-out',
    //         animationFillMode: 'forwards',
    //         animationDelay: '.5s'
    //     });
    // }

    // function offHoverHandler() {
    //     setContainerAnimation({
    //         animationName: 'container-close',
    //         animationDuration: '.2s',
    //         animationTimingFunction: 'ease-out',
    //         animationFillMode: 'forwards',
    //         animationDelay: '.5s'
    //     });

    //     setImgAnimation({
    //         animationName: 'img-close',
    //         animationDuration: '.2s',
    //         animationTimingFunction: 'ease-out',
    //         animationFillMode: 'forwards',
    //         animationDelay: '0s'
    //     });
    // }

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

            {
                /* <div className={'donation-img-container'}>
                    <img className={'donation-img'} src={props.img} alt={`${props.heading} image`} style={imgAnimation}/>
                </div>
                <div className={'overlay'}>
                    <div className={'heading-container-open'} style={containerAnimation}/>
                </div>
                <div className={'heading-container'} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <h2 className={'donation-heading'}>
                        {props.heading}
                    </h2>
                </div> */
            }
        </div>
    )
}
