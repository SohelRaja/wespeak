import React, {useState, useEffect} from'react';
import {useHistory} from 'react-router-dom';
import io from 'socket.io-client';
import {connect} from 'react-redux';


import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket;

const Chat = (props) => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const ENDPOINT = 'localhost:5000'; // 'https://wespeak.herokuapp.com/' || 'localhost:5000'
    const history = useHistory();

    const name = props.userData.name;
    const room = props.userData.room;

    useEffect(() => {
        socket = io(ENDPOINT);
        console.log(props.userData.name,props.userData.room)
        if(!name || !room){
            history.push('/')
        }

        socket.emit('join', { name, room }, (error) => {
            if(error) {
                alert(error);
                history.push('/');
            }
        });

        return () => {
            socket.emit('disconnect');

            socket.off();
        }
    }, [ENDPOINT, name, room]);

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
    }, [messages]);

    //function for sending messages
    const sendMessage = (event) => {
        event.preventDefault();

        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message, messages);

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        userData: state
    }
}

export default connect(mapStateToProps, undefined)(Chat);