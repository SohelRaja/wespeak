import React from 'react';
import {Link} from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = ()=>{
    return(
        <div className="box-layout">
            <div className="box-layout-box">
                <h1 className="box-layout-title">WeSpeak</h1>
                <h2>404!</h2>
                <h4>Page Not Found.</h4><br/>
                <Link to={"/"}>
                    <button className="notfoundbtn">
                        Back to Track
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default NotFoundPage;