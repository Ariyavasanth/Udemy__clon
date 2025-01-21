import "../App.css"
import udemy_white_logo from "../assets/udemy_logo-white.png";

const footer = () =>{
    return (
        
    <footer className="footer">
        <div className="footer__one">
            <ul className="footer__one-1 footer--line-height">
                <li>Udemy Business</li>
                <li>Tech On Udemy</li>
                <li>Get the app</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <ul className="footer__two-2 footer--line-height">
                <li>Careers</li>
                <li>Blog</li>
                <li>Help and Support</li>
                <li>Afflicate</li>
                <li>Investors</li>
            </ul>

            <ul className="footer__two-3 footer--line-height">
                <li>Blog</li>
                <li>Investors</li>
                <li>Career</li>

            </ul>

            <ul className="footer__one-4 footer--line-height">
                <li>Legal & Accessibility</li>
                <li>Accessibility statement</li>
                <li>Privacy policy</li>
                <li>Sitemap</li>
                <li>Terms</li>
            </ul>

        </div>


        <div className="footer__two">
            <div className="footer__two--one">
                <img src={udemy_white_logo} alt="udemy_logo" className="navbar__logo"/>
                <p className="footer__two-one__copy footer--align-item a">&copyUdemy, inc</p>
            </div>
            <p className="footer__two-one__cookies footer__two--align-item">Cookie settings</p>
            <div className="footer__two--english">
                <svg width="300px" height="300px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12C21 13.6569 16.9706 15 12 15C7.02944 15 3 13.6569 3 12M21 12C21 10.3431 16.9706 9 12 9C7.02944 9 3 10.3431 3 12M12 21C7.02944 21 3 16.9706 3 12M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <p className="footer__two-one__english footer__two--align-item">English</p>
            </div>
        </div>

    </footer>
    )
}


export default footer;