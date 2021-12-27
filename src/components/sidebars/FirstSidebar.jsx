import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const FirstSidebar = () => {
    return ( 
        <Fragment>
            <div className="card" style={{background: "#2F719B", color: "white"}}>
                <img className="card-img-top" src="./images/driving-test.jpg" alt="traffic-rules-exam" />
                <div className="card-body">
                    <h3>درباره ما</h3>
                    <p className="card-text text-justify" style={{fontSize: "18px"}}>
                        هدف از ساخت این وبسایت، شبیه سازی آزمون آیین نامه راهنمایی و رانندگی است. 
                        {" "}
                        <br className="d-none d-lg-block"/>
                        این آزمون به لحاظ محاسبه نمره و زمان پاسخ گویی مطابق با آزمون اصلی می باشد.
                    </p>
                </div>
            </div>
        </Fragment>
     );
}
 
export default FirstSidebar;