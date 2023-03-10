import './ProjectSection.css';
import {DonationCard} from "./DonationCard";

export function ProjectSection() {
    return (
        <section className={'project-section-container'}>
            <h1 className={'project-heading'}>PROJECTS</h1>
            <div className={'project-text-container'}>
                <p className={'project-text'}>
                    Your donation will help to buy and bring these <br/>
                    necessities to the people of <br/>
                    Ukraine. For your convenience we have put all into <br/>
                    three necessities so each one <br/>
                    of our donations can find what suits best
                </p>
            </div>
            <div className={'donations-container'}>
                <DonationCard heading={'MEDICINE'}/>
                <DonationCard heading={'EQUIPMENT'}/>
                <DonationCard heading={'REBUILD'}/>
            </div>
        </section>
    )
}
