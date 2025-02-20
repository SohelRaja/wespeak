import React from 'react';

import './Input.css';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <div className="outerContainer-form">
            <form className='form'>
                <input 
                    className='input'
                    type='text'
                    placeholder='Type a message...'
                    value={message} 
                    onChange={(event) => setMessage(event.target.value)} 
                    onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
                />
                <button className="sendButton" onClick={(event) => sendMessage(event)}><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
            </form>
        </div>
    );
}

export default Input;