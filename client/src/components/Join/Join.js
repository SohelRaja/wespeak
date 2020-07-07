import React, {useState, useEffect} from'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';

import './Join.css';
import { joinUser } from '../../redux/actions';

const Join = (props) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">We<span className="heading-sub">S</span>peak</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <Link 
                    onClick={event => (!name || !room) ? event.preventDefault() : null} 
                    to={`/chat`}
                >
                <button className="button mt-20" onClick={() => props.joinUser(name,room)}>Join WeSpeak</button>
                </Link>
                <h5 style={{color: "#673ab7", marginTop: "7px", textAlign: "center"}}> Dev ❤️ ed by &nbsp;
                    <a href="https://sohelraja.github.io" style={{color: "#e91e63", textDecoration: "none"}}>Sohel Raja Molla</a>
                </h5>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        joinUser: (name,room) => dispatch(joinUser(name,room))
    }
}

export default connect(null, mapDispatchToProps)(Join);