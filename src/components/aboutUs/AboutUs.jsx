import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    useEffect(() => {
        // go to top of the page
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])

    return ( 
        <Fragment>
            <Helmet>
                <title>درباره ما</title>
            </Helmet>
            <div className="border rounded w-100 p-5" style={{backgroundColor: "#F7FAFD"}}>
                <h1>درباره ما</h1>
                <div className="px-2 py-2 mt-3 text-justify">
                    <blockquote className="blockquote">
                        <p className="mb-3" style={{fontSize: "23px"}}>
                            این وبسایت با استفاده از زبان جاوااسکریپت و امکانات کتابخانه 
                            React
                            برنامه نویسی شده است.
                            در این برنامه برای مدیریت 
                            State 
                            از کتابخانه 
                            Redux 
                            استفاده کردم. 
                            استایل این وبسایت
                            Responsive
                            است.
                            <br />
                            هدف از ساخت این وبسایت، 
                            <b> "شبیه سازی آزمون آیین نامه راهنمایی و رانندگی" </b>
                            است.
                            این آزمون به لحاظ محاسبه نمره و زمان پاسخ گویی مطابق با آزمون اصلی می باشد.
                        </p>
                        <footer className="blockquote-footer" style={{fontSize: "20px"}}>رامین داروور</footer>
                    </blockquote>
                </div>
            </div>
        </Fragment>
     );
}
 
export default AboutUs;