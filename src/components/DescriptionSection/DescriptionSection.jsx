import './DescriptionSection.css';
import warImg from './desc_img.png';

export function DescriptionSection() {
    return (
        <section className={'description-container'}>
            <div className={'img-container'}>
                <img src={warImg} alt={'War in Ukraine'}/>
            </div>
            <div className={'description-text-container'}>
                <p className={'description-text'}>
                    Over the past year, we have gotten used to news about the brutal 
                    invasion of Russia in Ukraine and it's
                    current situation. However, the war is still very active, and the
                    future of Ukraine and all of free Europe 
                    is at stake. When Ukraine wins, we'll sigh in relief, but for all of
                    us to achieve that there is need for all
                    of us to come together and help by any ways we can, either it will be
                    monetary help or by taking 
                    active involvement in all.
                    By collaborating of people from Latvia and Ukraine and invoking 
                    embassy and politicians from both
                    countries, we have achieved government support donation program, which
                    will help to relief the war
                    efforts and to rebuild Ukraine after the war.
                </p>
            </div>
        </section>
    )
}
