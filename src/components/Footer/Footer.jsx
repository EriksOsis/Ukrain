import './Footer.css';

export function Footer() {
    return (
        <section className={'footer-container'}>
            <div>
                <p>
                    For additional information or if you have needs that<br/>
                    need to be fulfilled do not hesitate to contact<br/>
                    us and we will look over it:
                </p>
                <p className={'email'}>infodonateukraine@gmail.com</p>
            </div>
            <div className={'social-menu'}>
                <a href={'/#'}><i className="fa-brands fa-facebook"></i></a>
                <a href={'/#'}><i className="fa-brands fa-instagram"></i></a>
                <a href={'/#'}><i className="fa-brands fa-discord"></i></a>
                <a href={'/#'}><i className="fa-brands fa-twitter"></i></a>
                <a href={'/#'}><i className="fa-brands fa-telegram"></i></a>
            </div>
        </section>
    )
}
