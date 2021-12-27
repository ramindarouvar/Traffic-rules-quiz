import React from 'react';

const Footer = () => {
    return ( 
        <footer style={{marginTop: "20px"}}>
            <div className="footer-navs">
                <div className="container-md text-center">
                    <div className="social-media py-4">
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="mx-4">
                            <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://telegram.org" target="_blank" rel="noreferrer" className="mx-4">
                            <i className="fa fa-telegram fa-2x" aria-hidden="true"></i>
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="mx-4">
                            <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className="footer-copyright pb-5">
                    © کلیه حقوق این سایت متعلق به رامین داروور  می‌باشد.
                    </div>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;