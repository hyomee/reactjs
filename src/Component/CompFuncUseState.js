// useStaue를 사용 하기 위함 
import React, { useState } from 'react';

const CompFuncUseState = () => {
    const [ cnt, setCnt ] = useState(0);
    const [ message, setMessage ] = useState('');
    const onAdd = () => {
        setCnt(prevCnt => prevCnt + 1);
        setMessage('더하기');
    };
    const onMinus = () => {
        setCnt( prevCnt => prevCnt - 1);
        setMessage('빼기');
    };

    return (
        <div>
            <p> 값 : {cnt} {message} </p>
            <button onClick = {onAdd}>ADD</button>
            <button onClick = {onMinus}>Minus</button>
        </div>
    );
};


export default CompFuncUseState;