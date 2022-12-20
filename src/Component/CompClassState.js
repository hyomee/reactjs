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