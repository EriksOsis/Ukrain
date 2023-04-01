import './TopMenu.css';

import logo from './logo.svg';

export function TopMenu() {
    return (
        <section className={'menu-container'}>

            <div className={'left-side'}>

                <img className='logo' src={logo} alt="" />

            </div>
            <div className={'right-side'}>
                <div className={'menu-divider'}/>
                <div className={'disabled'}>
                    <p>DONATE</p>
                    <p className={'coming-soon'}>coming soon</p>
                </div>
                <div className={'menu-divider'}/>
                <p className={'right-side-link'}>ABOUT US</p>
                <div className={'menu-divider'}/>
                <p className={'right-side-link lang-select'}>EN<span><i className="fa-sharp fa-solid fa-chevron-down"></i></span></p>
            </div>
        </section>
    )
}
