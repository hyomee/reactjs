import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CompClassComp extends Component {
    
    static defaultProps = {
        name :'기본값'
    };

    static propTypes = {
        name : PropTypes.string,
        age : PropTypes.number.isRequired
    }
    render() {
        const { name, age } = this.props;
        return (
            <div>
                {name}의 나이는 {age} 입니다.
            </div>
        );
    }
}


export default CompClassComp;