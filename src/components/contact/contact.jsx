import React, { Fragment, useEffect } from 'react';
import { Helmet } from 'react-helmet';

const Contact = () => {
    useEffect(() => {
        // go to top of the page
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])
    return ( 
        <Fragment>
            <Helmet>
                <title>تماس با ما</title>
            </Helmet>
            <div className="border rounded w-100 p-5" style={{backgroundColor: "#F7FAFD"}}>
                <h1>تماس با ما</h1>
                <ul className="contact-info mt-4">
                    <li  className="text-right py-2">آدرس: ایران - شهر ... - خیابان ... - کوچه ... - پلاک 83 - طبقه همکف</li>
                    <li  className="text-right py-2">تلفن: 
                        3729182-31-98+
                    </li>
                    <li  className="text-right py-2">ایمیل: r.darouvar@protonmail.com</li>
                </ul>
                <div>
                    
                    <form className = "contact-form form-group border row justify-content-center pb-2 rounded" 
                          onSubmit={e => {
                                    e.preventDefault()
                                    e.target.reset();
                                }
                          }
                    >
                        <h2 className = "text-center col-12 font-weight-bold py-2 bg-info text-white rounded-top">فرستادن پیام</h2>
                        <input className = "col-11 col-md-10 mb-2 form-control" type="text" placeholder="نام و نام خانوادگی" required/>
                        <input className = "col-11 col-md-10 mb-2 form-control" type="email" placeholder="ایمیل" required/>
                        <textarea className = "col-11 col-md-10 mb-2 form-control contact-mesage" placeholder="پیامتان را اینجا بنویسید ..." required/>
                        <button className="col-5 col-sm-3 btn btn-primary" style={{fontSize: "25px"}}>بفرست</button>
                    </form>
                </div>
            </div>
        </Fragment> 
        );
}
 
export default Contact;