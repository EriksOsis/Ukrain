import './TopMenu.css';

export function TopMenu() {
    return (
        <section className={'menu-container'}>
            <div className={'left-side'}>
                <p className={'logo-heading'}>DONATE.UA</p>
            </div>
            <div className={'right-side'}>
                <p>DONATE</p>
                <p>ABOUT US</p>
                <p>EN</p>
            </div>
        </section>
    )
}
