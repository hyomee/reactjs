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
