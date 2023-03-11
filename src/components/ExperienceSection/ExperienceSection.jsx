import './ExperienceSection.css';
import flagImg from './Asset 1@2x.png';

export function ExperienceSection() {
    return (
        <section className={'experience-section'}>
            <img className={'flag-img'} src={flagImg} alt={'Ukrainian flag paint'}/>
            <div className={'experience-heading-container'}>
                <h1>PREVI</h1>
                <h1>OUS</h1>
                <h1>EXPE</h1>
                <h1>RIENCE</h1>
            </div>
            <div className={'experience-text-container'}>
                <p className={'experience-text'}>
                    The team and its board has more<br/>
                    than 10 year experience in raising<br/>
                    donations by outside investors,<br/>
                    government entities, private com-<br/>
                    panies and individuals from<br/>
                    Europe, North America and South<br/>
                    east<br/>
                    Asia. Below we have put few proj-<br/>
                    ects that has been done in the<br/>
                    past 10 years and how it has gone<br/>
                    for us.
                </p>
            </div>
        </section>
    )
}
