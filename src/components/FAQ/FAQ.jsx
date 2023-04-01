import './FAQ.css';
import { useState } from "react";
import { gsap } from "gsap";

export function FAQ() {
    const [answerIsOpen, setAnswerIsOpen] = useState(false);

    function answerHandler() {
        setAnswerIsOpen(!answerIsOpen);
        if (!answerIsOpen) {
            gsap.to(".blue-line", { translateY: "0%" });
        } else {
            gsap.to(".blue-line", { translateY: "-100%" });
        }
    }

    const hoverEnter = () => {
        gsap.to(".yellow-line", { translateX: "0px" });
    }

    const hoverLeave = () => {
        gsap.to(".yellow-line", { translateX: "-3px" });
    }

    return (
        <section className={'faq-container'}>
            <div className={'faq'}>
                <div className={'question-container'} onClick={answerHandler} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}>
                    <div className={'yellow-line'}>
                        <div className="blue-line"></div>
                    </div>
                    <p className={'question'}>Is my payment card data in safe hands?</p>
                </div>
                <div className={`answer-container ${answerIsOpen ? 'open' : 'closed'}`}>
                    <p className={'answer'}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate dicta
                        molestias officiis sunt. Dolorum labore necessitatibus nostrum qui repudiandae! Aspernatur aut
                        dolores fugit mollitia, necessitatibus nobis odit perferendis quidem sequi. Lorem ipsum dolor
                        sit amet, consectetur adipisicing elit. Beatae, modi, quos! Amet atque blanditiis consectetur
                        est excepturi facere nesciunt non quasi, sit voluptatibus. Accusamus aliquam eligendi expedita,
                        laboriosam provident ullam.
                    </p>
                </div>

                
            </div>
        </section>
    )
}
