import React, { Component } from 'react';

class CompClassState extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            ages : 12
        }

    }
    

    render() {
        const {  ages } = this.state;
        return (
            <div>
                <p>나이 : { ages } </p>
                <button 
                    onClick = { () => {
                            this.setState({ ages : ages + 1 });
                            // this.state.ages + 1 or ages 
                            this.setState({ ages : this.state.ages + 1 });
                        }
                    }> 버튼 </button>
            </div>
        );
    }
}


export default CompClassState;