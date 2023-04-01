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
                    Over the past year, we have gotten used to news about the brutal inva-<br/>
                    sion of Russia in Ukraine and its<br/>
                    current situation. However, the war is still very active, and the<br/>
                    future of Ukraine and all of free Europe <br/>
                    is at stake. When Ukraine wins, we'll sigh in relief, but for all of<br/>
                    us to achieve that there is need for all<br/>
                    of us to come together and help by any ways we can, either it will be<br/>
                    monetary help or by taking <br/>
                    active involvement in all.<br/>
                    By collaborating of people from Latvia and Ukraine and invoking embas-<br/>
                    sy and politicians from both<br/>
                    countries, we have achieved government support donation program, which<br/>
                    will help to relief the war<br/>
                    efforts and to rebuild Ukraine after the war.
                </p>
            </div>
        </section>
    )
}
