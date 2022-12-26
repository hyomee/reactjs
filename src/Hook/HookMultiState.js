import { useState, useEffect } from 'react';

const HookMultiState = () => {
    // state 변수 선언 
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

    const fnTitleView = () => {
        console.log(name)
    };
    
    useEffect( fnTitleView, [name] );

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeAge = e => {
        setAge(e.target.value);
    }

    return (
        <div>
            <div>
                이름 : <input value={name} onChange={onChangeName}/>
                나이 : <input value={age} onChange={onChangeAge}/>
            </div>
            <div>
                <p>이름 : {name},  나이 : {age}</p>
            </div>
                
        </div>
    );
};


export default HookMultiState;