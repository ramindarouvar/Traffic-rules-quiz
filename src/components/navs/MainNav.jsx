import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => {
    return ( 
        <div className="nav-menu py-md-0" style={{marginBottom: "20px"}}>
            <div className="row">
                <nav className="col-12 col-md-11 mx-auto row navbar py-0 navbar-expand-md pb-2 pb-md-0" style={{direction: 'rtl'}}>
                    <div className="collapse navbar-collapse pb-3 pb-md-0 row" id="main-navbar">
                        <div className="col-12 col-md-12 col-lg-8 col-xl-9 text-right text-md-center text-lg-right p-0 nav-menu" >
                            <ul className="list-unstyled w-100 list-inline m-0 p-0 d-inline-block navbar-nav">
                                <li className="d-block d-md-inline text-center m-0">
                                    <NavLink
                                    className="nav-link d-block d-md-inline-block p-1 px-3"
                                    to="/"
                                    activeClassName="font-weight-bold border-bottom border-top"
                                    exact
                                    >خانه</NavLink>
                                </li>
                                <li className="d-block d-md-inline text-center m-0 nav-item">
                                    <NavLink
                                    className="nav-link d-block d-md-inline-block p-1 px-3"
                                    activeClassName="font-weight-bold border-bottom border-top"
                                    exact
                                    to="/weather">آب و هوای امروز <small>(api)</small></NavLink>
                                </li>
                                <li className="d-block d-md-inline text-center m-0 nav-item">
                                    <NavLink
                                    className="nav-link d-block d-md-inline-block p-1 px-3"
                                    activeClassName="font-weight-bold border-bottom border-top"
                                    exact
                                    to="/about-us">درباره ما</NavLink>
                                </li>
                                <li className="d-block d-md-inline text-center m-0 nav-item dropdown">
                                    <NavLink
                                        className="nav-link d-block d-md-inline-block p-1 px-3 dropdown-toggle"
                                        activeClassName="font-weight-bold border-bottom border-top"
                                        exact
                                        to="/contact">
                                            تماس با ما
                                    </NavLink>

                                    <ul className="dropdown-menu dropdown-menu-left dropdown-menu-lg-right">
                                        <li  className="dropdown-item text-right py-3">تلفن: 
                                        3729182-31-98+
                                        </li>
                                        <div className="dropdown-divider m-0"></div>
                                        <li  className="dropdown-item text-right py-3">ایمیل: r.darouvar@protonmail.com</li>
                                        <div className="dropdown-divider m-0"></div>
                                        <li  className="dropdown-item text-right py-3">آدرس: ایران - شهر ... - خیابان ... - کوچه ... - پلاک 83 - طبقه همکف</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="col-12 d-none d-md-block d-lg-none my-2"></div>

                        <div className="col-12 col-md-9 col-lg-4 col-xl-3 mx-md-auto text-right text-md-center text-lg-right p-md-0 pb-md-3 pb-lg-0">
                            <form className="form-inline h-100">
                                <div className="search-box input-group mx-0 mx-md-auto mx-lg-0">
                                    <div className="input-group-prepend">
                                        <button type="submit" className="btn btn-info search-button " >
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </button>
                                    </div>
                                    <input type="text" className="search-text form-control" 
                                        placeholder="جستجو (نمادین)" 
                                        onFocus={e => {
                                            e.target.setAttribute("placeholder", "");
                                        }}
                                        onBlur={e => {
                                            e.target.setAttribute("placeholder", "جستجو (نمادین)");
                                        }}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#main-navbar">
                        <span className = "navbar-toggler-icon text-white">
                            <i className ="fa fa-bars fa-2x" aria-hidden="true"></i>
                        </span>
                    </button>
                </nav>
            </div>
        </div>
     );
}
 
export default MainNav;