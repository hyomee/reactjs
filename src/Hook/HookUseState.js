import React, { useState } from 'react';

const HookUseState = () => {
    const [message, setMessage] = useState('리액트');

    return (
        <div>
            <p>환영 메세지 : {message}</p>
            <button onClick = {
                () => setMessage(message + ' Hook-useState')
            }>버튼</button>
        </div>
    );
};

export default HookUseState;