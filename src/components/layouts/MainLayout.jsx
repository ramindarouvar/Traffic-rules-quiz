import React, { useEffect, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import MainNav from './../navs/MainNav';
import Header from './../common/Header';
import Footer from './../common/Footer';
import FirstSidebar from './../sidebars/FirstSidebar';
import SecondSidebar from '../sidebars/SecondSidebar';

const MainLayout = props => {
    const [btnDisplay, setBtnDisplay] = useState(false)

    useEffect(() => {
       document.body.addEventListener("scroll", () => {
        if (document.body.scrollTop > 50|| document.documentElement.scrollTop > 50) {
            // display "back to top" button during scroll down
            setBtnDisplay(true);
          } else {
            // hide "back to top" button during going to top of the page
            setBtnDisplay(false);
          }
       }) 
    },[])
    // function for going to top of the page
    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return ( 
        <Fragment>
            <Header />
            <MainNav />
            <main>
                <div className="row mx-lg-2 mx-xl-5 justify-content-around">
                    <div className="d-none d-xl-block col-xl-2 mb-4">
                        <FirstSidebar />
                    </div>

                    <div className="col-11 col-lg-8 col-xl-7 order-md-0 mx-auto mb-3 px-0">{props.children}</div>

                    <div className="col-11 col-lg-4 col-xl-3 mb-4 px-0 px-lg-2 pl-xl-4 pr-xl-3">
                        <div className="d-block d-xl-none mb-4">
                            <FirstSidebar />
                        </div>
                        <SecondSidebar />
                    </div>
                
                </div>
            </main>
            <button id="backToTop" className={btnDisplay ? "d-block btn btn-info p-3" : "d-none" } onClick={() => backToTop()} title="رفتن به بالای صفحه">
                <i className="fa fa-hand-pointer-o fa-2x" aria-hidden="true"></i>
            </button>
            <Footer />
        </Fragment>
     );
}
 
export default MainLayout;