import './DonationCard.css';
import {useState} from "react";

export function DonationCard(props) {
    const [containerAnimation, setContainerAnimation] = useState({});

    function onHoverHandler() {
        setContainerAnimation({
            animationName: 'container-open',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards'
        });
    }

    function offHoverHandler() {
        setContainerAnimation({
            animationName: 'container-close',
            animationDuration: '.2s',
            animationTimingFunction: 'ease-out',
            animationFillMode: 'forwards'
        });
    }

    return (
        <div className={'donation-container'}>

            <div className={'overlay'}>
                <div className={'heading-container-open'} style={containerAnimation}/>
                {/*<img/>*/}
            </div>
            <div className={'heading-container'}>
                <h2 className={'donation-heading'} onMouseEnter={onHoverHandler}
                    onMouseLeave={offHoverHandler}><span data-content={props.heading} aria-hidden="true"></span>
                    {props.heading}
                </h2>
            </div>
        </div>
    )
}
