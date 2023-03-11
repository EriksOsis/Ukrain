import './DonationCard.css';
import {useState} from "react";

export function DonationCard(props) {
    const [containerAnimation, setContainerAnimation] = useState({});
    const [imgAnimation, setImgAnimation] = useState({});

    function onHoverHandler() {
        setContainerAnimation({
            animationName: 'container-open',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards'
        });

        setImgAnimation({
            animationName: 'img-open',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards',
            animationDelay: '.5s'
        });
    }

    function offHoverHandler() {
        setContainerAnimation({
            animationName: 'container-close',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards',
            animationDelay: '.5s'
        });

        setImgAnimation({
            animationName: 'img-close',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards',
            animationDelay: '0s'
        });
    }

    return (
        <div className={'donation-container'}>
            <div className={'donation-img-container'}>
                <img className={'donation-img'} src={props.img} alt={`${props.heading} image`} style={imgAnimation}/>
            </div>
            <div className={'overlay'}>
                <div className={'heading-container-open'} style={containerAnimation}/>
            </div>
            <div className={'heading-container'}>
                <h2 className={'donation-heading'} onMouseEnter={onHoverHandler} onMouseLeave={offHoverHandler}>
                    {props.heading}
                </h2>
            </div>
        </div>
    )
}
