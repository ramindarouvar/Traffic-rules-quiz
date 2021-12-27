import React from 'react';
import { Fragment } from 'react/cjs/react.production.min';

const SecondSidebar = () => {
    return ( 
        <Fragment>
            <div className="card mb-4 sidebar">
                <div className="card-header sidebar-header">آخرین خبر ها</div>
                    <ul className="list-group list-group-flush px-0">
                        <li className="list-group-item py-1 px-2 sidebar-li">
                            <a className="sidebar-link" href="https://www.isna.ir/news/1400093023473/" target="_blank" rel="noreferrer">- تنها 5نفر از سرنشینان اتوبوس مشهد بستری شدند</a>
                        </li>
                        <li className="list-group-item py-1 px-2 sidebar-li">
                            <a className="sidebar-link" href="https://www.isna.ir/news/1400093023307/" target="_blank" rel="noreferrer">- توصیه‌های پلیس برای رانندگی در بارندگی</a>
                        </li>
                        <li className="list-group-item py-1 px-2 sidebar-li">
                            <a className="sidebar-link" href="https://www.isna.ir/news/1400093023298/" target="_blank" rel="noreferrer">- بی‌مسئولیتی شرکت‌های به‌کارگیرنده موتورسیکلت سواران نسبت به تخلفات آنان</a>
                        </li>
                        <li className="list-group-item py-1 px-2 sidebar-li">
                            <a className="sidebar-link" href="https://www.isna.ir/news/1400092922410/" target="_blank" rel="noreferrer">- ترافیک پرحجم محورهای غربی منتهی به تهران/ بارش باران در جاده های ۳ استان</a>
                        </li>
                        <li className="list-group-item py-1 px-2 sidebar-li">
                            <a className="sidebar-link" href="https://www.isna.ir/news/1400092922401/" target="_blank" rel="noreferrer">- ۵۰ میلیارد تومان برای اجرای طرح راهداری زمستانی هزینه می‌شود</a>
                        </li>
                    </ul>
            </div>   
            <div className="card sidebar">
                <div className="card-header sidebar-header">عضویت در خبرنامه</div>
                <div className="card-body px-3">
                    <p className="card-text text-justify mr-1" style={{fontSize: "18px"}}>
                        برای دریافت آخرین خبر ها در خبرنامه ما عضو شوید.
                    </p>
                    <form className="form-group" onSubmit={e => {
                        e.preventDefault()
                        alert("شما با موفقیت در خبرنامه عضو شدید.")
                        e.target.firstElementChild.children[1].value = "";
                        }
                    }>
                        <div className="row input-group mx-auto">
                            <button className="col-2 form-control btn btn-info input-group-prepend" type="submit">
                                <i className="fa fa-paper-plane w-100 h-100 p-1" aria-hidden="true"></i>
                            </button>
                            <input type="email" id="newsSubscription" className="col-10 w-100 form-control input-group-append" placeholder="ایمیل خود را وارد کنید" />
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
 
export default SecondSidebar;