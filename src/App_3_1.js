/*
    React 컴포넌트 선언 방식
      1. 함수 컴포넌트
      2. 클래스 컴포넌트 
    함수 컴포넌트와 클래스 컴포넌트 차

*/

// 함수 컴포넌트
/*
function App() {
    const name = 'React';
    return (
        <div>{name}</div>
    );
}


*/

// 클래스 컴포넌트
import { Component } from "react";

class App extends Component {
    render() {
        const name = 'React Component';
        return (
            <div>{name}</div>
        );
    }
}

export default App;