import './TeamSection.css';
import peterisImg from './peter.png';
import {useState, useEffect, useLayoutEffect, useRef} from "react";
import { gsap } from "gsap";

export function TeamSection() {

    const ref = useRef();
    const textModal = useRef();

    const [marginBottom, setMarginBottom] = useState(0);
    const [textClasses, setTextClasses] = useState('team-text-container  closed-modal');
    const [textIsOpen, setTextIsOpen] = useState(false);
    const [mouseOnTeamBox, setMouseOnTeamBox] = useState(false);
    const [crossAnimationY, setCrossAnimationY] = useState({});
    const [crossAnimationX, setCrossAnimationX] = useState({});

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            closeText()
        }
    };
    

    // const resizeWindow = (event) => {
    //     const modalY = textModal.current.getBoundingClientRect().top
    //     // const modalEnd = textModal.current.offsetBot
    //     const modalH = textModal.current.offsetHeight
    //     const modalEnd = modalY + modalH
    //     console.log('modalE',modalEnd);

    //     const teamBlockY = ref.current.getBoundingClientRect().top
    //     const teamBlockH = ref.current.offsetHeight
    //     const teamBlockEnd = teamBlockY + teamBlockH
    //     console.log('teamBE',teamBlockEnd);

    //     const diff = modalEnd - teamBlockEnd
    //     // ref.style.marginBottom = diff + 50 + "px"
    //     setMarginBottom(diff > 0 ? diff : 0);
    //     // console.log(diff)
    //     // console.log(textModal.current.node.clientHeight);
    //     // const textModalHeight = textModal.current.node.getBoundingClientRect().height;
    //     // console.log(textModalHeight);
    // }

    useLayoutEffect(() => {
        function resizeWindow() {
            const modalY = textModal.current.getBoundingClientRect().top
            // const modalEnd = textModal.current.offsetBot
            const modalH = textModal.current.offsetHeight
            const modalEnd = modalY + modalH
            console.log('modalE',modalEnd);
    
            const teamBlockY = ref.current.getBoundingClientRect().top
            const teamBlockH = ref.current.offsetHeight
            const teamBlockEnd = teamBlockY + teamBlockH
            console.log('teamBE',teamBlockEnd);
    
            const diff = modalEnd - teamBlockEnd + 60
            // ref.style.marginBottom = diff + 50 + "px"
            setMarginBottom(diff > 0 ? diff : 0);
            // console.log(diff)
            // console.log(textModal.current.node.clientHeight);
            // const textModalHeight = textModal.current.node.getBoundingClientRect().height;
            // console.log(textModalHeight);
        }

        setTimeout(() => {
            
            resizeWindow()
        }, 500);

        window.addEventListener('resize', resizeWindow)
        window.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('resize', resizeWindow)
          window.removeEventListener('mousedown', handleClickOutside)
        };
    }, [ref]);

    // useEffect(() => {
    //     window.addEventListener('resize', resizeWindow)
    //     window.addEventListener('mousedown', handleClickOutside)
    //     return () => {
    //         window.removeEventListener('resize', resizeWindow)
    //       window.removeEventListener('mousedown', handleClickOutside)
    //     };
    // }, [ref, textModal]);

    const tl = gsap.timeline({paused: false})

    let init = false

    const onEnter = ({ currentTarget }) => {
        setMouseOnTeamBox(false)
        console.log("mouseInBox:",mouseOnTeamBox);
        const parent = currentTarget
        const x = parent.querySelector(".cross-x")
        const y = parent.querySelector(".cross-y")

        if (!init) {
            // tl.to(bgBox, { width: '100%', duration: 0.1 })
            init = true
        }

        tl.reversed(false)
        
    };

    const onLeave = ({ currentTarget }) => {
        setMouseOnTeamBox(true)
        console.log("mouseInBox:",mouseOnTeamBox);
        tl.reversed(!tl.reversed())
    };

    const toggleText = () => {
        console.log("text is open", textIsOpen);
        if (textIsOpen) {
            setTextClasses('team-text-container closed-modal');
            setCrossAnimationY({
                animationName: 'cross-close-y',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });
            setCrossAnimationX({
                animationName: 'cross-close-x',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });
        } else if (!textIsOpen) {
            setTextClasses('team-text-container');
            setCrossAnimationY({
                animationName: 'cross-open-y',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });
            setCrossAnimationX({
                animationName: 'cross-open-x',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });

            
        }
        setTextIsOpen(!textIsOpen);
        console.log(textIsOpen);

    }

    const closeText = () => {
        if (!textIsOpen) {
            setTextClasses('team-text-container closed-modal');
            setCrossAnimationY({
                animationName: 'cross-close-y',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });
            setCrossAnimationX({
                animationName: 'cross-close-x',
                animationDuration: '.3s',
                animationFillMode: 'forwards'
            });
            setTextIsOpen(false)
        }
       
    }

    return (
        <section className={'team-section-container'} style={{ marginBottom: marginBottom }}>
            <h1 className={'team-header'}>TEAM</h1>
            <div className={'outer-team-img-container'} ref={ref} onClick={toggleText} onMouseEnter={onEnter} onMouseLeave={onLeave}>
                <div className={'team-img-container'}>
                    <div className={'blue'}/>

                    <img src={peterisImg} alt={'Peteris in Ukraine'}/>
                    <div className={'yellow'}/>
                </div>
            </div>
            <div className={'absolute'}>
                <div className={'text-description-group'}>
                    <div className={'cross-container'}>
                        <div className={'relative'}>
                            <div className={'cross-y'} style={crossAnimationY}/>
                            <div className={'cross-x'} style={crossAnimationX}/>
                        </div>
                    </div>
                    <div className={textClasses} ref={textModal}>
                        <p className={'team-text'}>
                            Pēteris Dimants, a Latvian volunteer who started helping Ukraine after the first
                            Russian attacks on Ukraine in 2014.<br/>
                            At that time, the city of Chernihiv was helped, because it was a sister city of
                            Ogre region and Peter was the executive director.<br/>
                            Unfortunately, the war happened again and Peter's friends were on the first
                            lines of defense on the front. Help began on the first night of the invasion by
                            Russian troops. Optics were then sent to the guys. Cars, generators, fuel,
                            clothing and food are only a part of what Peter personally delivered to the
                            volunteer defenders of Ukraine in the first days of the war. By helping, Pēteris
                            become the coordinator of the largest Latvian aid organization ziedot.lv and
                            the Embassy of Ukraine in Latvia. The task is to summarize Ukraine's needs
                            and Latvia's opportunities. As well as deliver all cargo to the addressees
                            together with the team, including on the front line. Currently have experience
                            in 15 missions.<br/>
                            Peter has four children, two of them twin girls. Helping Ukrainian hospitals
                            become a matter of duty and heart.<br/>
                            With the help of the people of Latvia, baby incubators, a breathing apparatus,
                            a milk bank, a milk pasteurizer, etc. have been delivered to the Lviv hospital.
                            Hospitals in Zhytomyr and Drogobic are being helped as well tills this moment
                            by Peter personally..<br/>
                            Future aid plans are in the fields of medicine, children, demining Ukraine and
                            soldier support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
