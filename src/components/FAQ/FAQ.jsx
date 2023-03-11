import './FAQ.css';
import {useState} from "react";

export function FAQ() {
    const [answerIsOpen, setAnswerIsOpen] = useState(false);

    function answerHandler() {
        setAnswerIsOpen(!answerIsOpen);
    }

    return (
        <section className={'faq-container'}>
            <div className={'faq'}>
                <div className={'question-container'} onClick={answerHandler}>
                    <div className={'yellow-line'}/>
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
