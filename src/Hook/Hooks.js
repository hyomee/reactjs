import React, { useState, useEffect } from 'react';

const HookUseState = () => {
    const [message, setMessage] = useState('리액트');
    const [title, setTitle] = useState('리액트..');
    
    const fnTitleView = () => {
                            console.log('리액트 ... ')
                        };
                        
    useEffect( fnTitleView, []);
    
    return (
        <div>
            <p>환영 메세지 : {message}</p>
            <p>Title : {title}</p>
            <button onClick = {
                () => setMessage(message + ' Hook-useState')
            }>버튼</button>
            <button onClick = {
                () => setTitle(title + ' Hook-useEffect')
            }>UseEffect</button>
        </div>
    );
};


export default HookUseState;