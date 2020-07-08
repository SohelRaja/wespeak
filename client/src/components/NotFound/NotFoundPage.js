import React from 'react';
import {Link} from 'react-router-dom';

import './NotFoundPage.css';

const NotFoundPage = ()=>{
    return(
        <div className="box-layout">
            <div className="box-layout-box">
                <h1 className="box-layout-title">WeSpeak <i class="fa fa-comments" aria-hidden="true"></i></h1>
                <h2>404!</h2>
                <h4><i class="fa fa-exclamation-triangle" aria-hidden="true"></i>&nbsp;Page Not Found.</h4><br/>
                <Link to={"/"}>
                    <button className="notfoundbtn">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;Back to Track
                    </button>
                </Link>
            </div>
        </div>
    )
};

export default NotFoundPage;