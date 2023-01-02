## Hook
v16.8에 새로 도입된 기능으로 함수 컴포넌트에서도 상태 관리를 할 수 있으며 클래스 컴포넌트를 작성하지 않아도 state와 같은 특성을 사용 할 수 있다.  
- class 컴포넌트에서는 Hook를 사용 할 수 없다.
- 함수 컴포넌트를 사용하던 중 state를 추가하고 싶을떄 
- state 변수는 React에 의해서 사라지지 않는다.

### 1. Hook 규칙 
- 최강위(at the Top Level)에서만 Hook 호출 
- 오직 React 함수 내에서 Hook 호출 
### 2. 함수 컴포넌트에서 Hook 사용 위치
```
const FnExample = (props) => {
    // 이 부분에 Hook 사용
    return <div />
}

또는 

function(props) {
    // 이 부분에 Hook 사용
    return <div />
}
```

### 3. useState
- state 컴포넌트가 다시 렌더링 되어도 그대로 유지.
- **현재 값과 이 값이 업데이트하는 함수를 쌍으로 제공.**
- 이벤트 핸들러나 다른 곳에서 호출 할 수 있음.
- class의 this.state와 다른 점은 새로운 state를 합치지 않는다.
  

#### 3-1. 새로운 컴포넌트를 생성한다. ( HookUseState.js )
```
import React, { useState } from 'react';

const HookUseState = () => {
    return (
        <div>
            
        </div>
    );
};

export default HookUseState;
```
#### 3-2. 새로운 state 변수를 선언한다. ( 생성된 state를 message라 함)
- [message, setMessage] : 현재 값과 이 값이 업데이트하는 함수를 쌍으로 제공
- useState('리액트') : 초기값 설정, message라 불리는 state변수에 초기갑 설정 
- 배열 구조 분해를 사용함 
```
import React, { useState } from 'react';

const HookUseState = () => {
    const [message, setMessage] = useState('리액트');
    return (
        <div>
            
        </div>
    );
};

export default HookUseState;
```
#### 3-3. 버튼을 클릭 하면 '리액트 Hook-useState'표시 한다.
- React는 해당 변수를 리렌더링 될 때 기억하고 현재값을 제공한다. 갱신을 위해서는 setMessage를 호출 한다.
```
import React, { useState } from 'react';

const HookUseState = () => {
    const [message, setMessage] = useState('리액트');

    return (
        <div>
            <p>환영 메세지 : {message}</p>
            <button onclick = {
                () => setMessage(message + ' Hook-useState')
            }></button>
        </div>
    );
};

export default HookUseState;
```
#### 3-4 useState 여러 번 사용 하기 예제 
```
import { useState } from 'react';

const HookMultiState = () => {
    // state 변수 선언 
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

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
```
### 4. useEffect
- 기본적으로 랜더링되고 난 직후마다 실행되며, 두번째 파라미터 베열에 무엇을 넣는지에 따라서 실행 조건이 달라짐.
- 리액트 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정
- 클래스 컴포넌트에서 componentDidMount 와 componentDidUpdate를 합친 형태
- 종류
  - Clean-Up을 이용하지 않는 Effects
  - Clean-Up을 이용하는 Effects

![ComponentLifeCycle][https://github.com/hyomee/reactjs/blob/master/public/img/componentLifeCycle.png]


#### 4-1. useEffext 적용
```
import React, { useState, useEffect } from 'react';

const HookUseState = () => {
    const [message, setMessage] = useState('리액트');
    const [title, setTitle] = useState('리액트..');
    useEffect( () => {
        document.title = `${title}`;
    });
    return (
        <div>
            <p>환영 메세지 : {message}</p>
            <button onClick = {
                () => setMessage`--99(message + ' Hook-useState')
            }>버튼</button>
            <button onClick = {
                () => setTitle(message + ' Hook-useEffect')
            }>UseEffect</button>
        </div>
    );
};

export default HookUseState;
```
#### 4-1-1. 최초 한번 적용 하고 싶은 경우 즉 마운트될 때만 실행하고 싶을 때
useEffect의 두번째 인자에 빈 배열을 추가 함
```
const fnTitleView = () => {
                            console.log('마운트... ')
                        };
                        
useEffect( fnTitleView, []);
```
#### 4-1-2. 특정 값이 수정 될 때만 실행 
- 두번째 파라메터 배열에 useState를 통해서 관리되고 있는 상태, props로 전달받은 값을 넣어 주면 된다.
- 클래스 형 컴포넌트 : onComponentDidUpdate 
```
const fnTitleView = () => {
    console.log(name)
};
    
useEffect( fnTitleView, [name] );
```
- 전체 소스
```
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
```
#### 4-1-3. cleanup : 컴포넌트가 언마운트되기 전이나 업데이트 되기 직전에 작업 수헹 
- 클래스형 : componentWillUnmount 
- return function이 해당 역활을 하며 useEffect()를 끝내며 실행 하기 때문에 clean-up 함수라 한다.
```
useEffect(() => {
    console.log
})

