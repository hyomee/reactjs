# REACT.js - 
리액트 컴포넌틍에서 컴포넌트 내부에서 변경되는 값을 의미 하며 부모 컴포넌트가 설정 하는 값이며 자식 컴포넌트에서는 읽기만 가능 한다. 즉 props를 바꾸려면 부모 컴포넌트에서 바꾸어 주어야 한다.

** props, staus 차이점 **  
props : 부모 컴포넌트가 설정  
state : 컴포넌트 내부 값으로 내부 값을 수정
***

## 1. 클래스형 컴포넌트 state
### 1-1. 작성 규칙
- 컴포넌트의 생성자(constructor)에서 super(props)를 호출 하여야 한다.
- 컴포넌트의 생성자(constructor)에서 this.state를 초기화 하여야 한다. 
- this.state는 객체 형식 이어야 한다.
```
constructor(props) {
    super(props);
        
    this.state = {
        ages : 12
    }
}
```

### 1-2. render 함수 내에서 this.state 릍 참조 해서 사용해야 한다.
```
const {  ages } = this.state;
return (
<button onClick = { () => {
                        this.setState({ ages : ages + 1 });
                    }
                  }> 버튼 </button>
)
```
### 1-3. 완성된 소스  
다음 예제는 화면에서 버튼을 클릭하면 나이가 증가되는 기능을 한다.
```
import React, { Component } from 'react';

class CompClassState extends Component {
    constructor(props) {
        // super(props)를 호출
        super(props);
        
        // 초기화 
        this.state = {
            ages : 12
        }

    }
    

    render() {
        // 사용 
        const {  ages } = this.state;
        return (
            <div>
                <p>나이 : { ages } </p>
                <button 
                    onClick = { () => {
                            this.setState({ ages : ages + 1 }); 
                        }
                    }> 버튼 </button>
            </div>
        );
    }
}


export default CompClassState;
```
### 1-4. 만약 버튼을 클릭 할 때 다음과 같이 한다면 2씩 증가 될 것 같으나 1씩 증가 된다. 즉 this.state 값이 바로 변경이 되지 않기 때문이다.

```
<button 
    onClick = { () => {
            this.setState({ ages : ages + 1 }); 
            this.setState({ ages : ages + 1 }); 
        }
    }> 버튼 </button>
```
this.setState에 함수를 적용 하는 방법으로 해결 할 수 있다.
```
this.setState((prevState, props) => {
    return {
        // 변경할 내용 
        ages : prevState.ages + 1;
    }
})

- props를 사용 하지 않으면 생략 가능
this.setState(prevState => {
    return {
        // 변경할 내용 
        ages : prevState.ages + 1;
    }
})

- 또는 {} 블럭에서 바로 반환 하고자 한다면 
this.setState(prevState => {
    ages : prevState.ages + 1;
})

```
### 1-5. this.setState가 끝난 후 다른 작업을 하고자 한다면 콜백 함수를 사용해야 한다.
```
<button 
    onClick = { () => {
            this.setState({ 
                ages : ages + 1
            },()=> {
                console.log("호출 이후 실행 됨")
            });
        }
    }>  callback </button>
```
### 1-6. 복수 값 사용 
```
constructor(props) {
    super(props);
    
    this.state = {
        name : '',
        ages : 12
    }
}

<p>이름 : { name }, 나이 : { ages } </p>
<button 
    onClick = { () => {
            this.setState({ ages : ages + 1 });
            this.setState({ name : '홍길동' });
        }
    }> 버튼 </button>

```
### 1-7. 전체 소스
```
import React, { Component } from 'react';

class CompClassState extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name : '',
            ages : 12
        }

    }
    

    render() {
        const { name, ages } = this.state;
        return (
            <div>
                <p>이름 : { name }, 나이 : { ages } </p>
                <button 
                    onClick = { () => {
                            this.setState({ ages : ages + 1 });
                            this.setState({ name : '홍길동' });
                        }
                    }> 버튼 </button>
                <button 
                    onClick = { () => {
                            this.setState( { ages : ages + 1});
                            this.setState( prvState => {
                                return {
                                    ages : prvState.ages + 1
                                };
                            });
                        }
                    }>  prevState </button>
                <button 
                    onClick = { () => {
                            this.setState( { ages : ages + 1});
                            this.setState( prevState => ({ 
                                ages : prevState.ages + 1
                            }));
                        }
                    }>  prevState 축약 </button>
                <button 
                    onClick = { () => {
                            this.setState({ 
                                ages : ages + 1
                            },()=> {
                                console.log("호출 이후 실행 됨")
                            });
                        }
                    }>  callback </button>
            </div>
        );
    }
}


export default CompClassState;
```

## 2. 함수형 컴포넌트 useState
리액트 16.8 부터 함수형 컴포넌트에서 state을 사용할 수 없고 useState를 사용해야 한다. 이 과정을 Hooks라 하며 state 초기값은 객체 형태 이어야 하나 useState숫자, 문자열, 객체, 함수, 배열이 될 수 있다.  

### 2-1. 함수를 생성 하고 useState를 선언 한다.
```
import React, { useState } from 'react';
const CompFuncUseState = () => {
    const [ cnt, setCnt ] = useState(0);
}
```
 const [ cnt, setCnt ] = useState(0) ] : 배열 구조화 할당을 사용 하여 값이 숫자인 useState를 생성 한다. dl 이때 첫번째 인자가 현재 상태를 나타내는 값이고 두번째 인지기 set 함수 이다.; 

### 2-2. Add, Minus 버튼을 만들고 프로그랭을 완성 한다.
```
import React, { useState } from 'react';

const CompFuncUseState = () => {
    const [ cnt, setCnt ] = useState(0);
    const onAdd = () => {
        setCnt( cnt + 1);
    };
    const onMinus = () => {
        setCnt( cnt -1 );
    };

    return (
        <div>
            값 : {cnt}
            <button onClick={onAdd}>ADD</button>
            <button onClick={onMinus}>Minus</button>
        </div>
    );
};


export default CompFuncUseState;
```
Add 버튼을 클릭 하면 +1, Minus룰 클릭 하면 -1 씩 변경이 된다.

### 2-3. setCnt 함수는 새로운 값을 넣어 주는데 기존 값에 대해서 업데이트를 하기 위해서 다음과 같이 수정 한다.
```
const CompFuncUseState = () => {
    const [ cnt, setCnt ] = useState(0);
    const onAdd = () => {
        setCnt( prevCnt => prevCnt + 1 );
    };
    const onMinus = () => {
        setCnt( prevCnt => prevCnt - 1 );
    };

    return (
        <div>
            값 : {cnt}
            <button onClick={onAdd}>ADD</button>
            <button onClick={onMinus}>Minus</button>
        </div>
    );
};


export default CompFuncUseState;
```

### 2-4. useStatus 복수개 사용 하기
```
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
```