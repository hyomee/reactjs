import React from 'react';
import PropTypes from 'prop-types';

// const CompPropsMulti = props => {
//     return (
//         <div>
//             {props.name}의 나이는 {props.age} 입니다.
//         </div>
//     );
// };

const CompPropsMulti = ( {name, age }) => {
    return (
        <div>
            {name}의 나이는 {age} 입니다.
        </div>
    );
};




export default CompPropsMulti;