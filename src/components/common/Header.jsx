import React from 'react';
import { Fragment } from 'react';

const Header = () => {
    return ( 
        <Fragment>
            <header>
                <div className="row web-header">
                    <div className="col-sm-2 text-right">
                        <img src="images/lights.png" className="img-fluid d-none d-sm-inline" alt="traffic-lights" style={{width: "50%"}}/>
                    </div>
                    <div className="col-sm p-4 p-sm-0 align-self-center">
                        <p className="header-title text-center m-0">
                            آزمون آیین نامه راهنمایی و رانندگی
                        </p>
                    </div>
                    <div className="col-sm-2 text-left">
                        <img src="images/Warning.png" className="img-fluid d-none d-sm-inline" alt="warning-sign" style={{width: "67%"}}/>
                    </div>
                </div>
            </header>
        </Fragment>
     );
}
 
export default Header;