import './ProjectSection.css';
import {DonationCard} from "./DonationCard";
import equipmentImg from './img.png';
import rebuildImg from './img_1.png';
import medicineImg from './img_2.png';

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
                <DonationCard heading={'MEDICINE'} img={medicineImg}/>
                <DonationCard heading={'EQUIPMENT'} img={equipmentImg}/>
                <DonationCard heading={'REBUILD'} img={rebuildImg}/>
            </div>
        </section>
    )
}
