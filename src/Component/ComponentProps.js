
import PropTypes from 'prop-types'
// 함수 Component
// function ComponentProps(props) {
//     return (
//         <div className='baseTitle01'>
//             함수 파라메터 :  "{props.title}" 입니다.
//         </div>
//     );
// }

// 화살표 함수  Component
const ComponentProps = props => {
    return (
        <div className='baseTitle01'>
            화살표 함수 :  파라메터 :  "{props.title}" 입니다. <br />
            컨포넌트 내부 정보 : {props.children}
        </div>
    );
};

ComponentProps.defaultProps = {
    title : '*** 기본값 [defaultProps] ***'
};

ComponentProps.propTypes = {
    title : PropTypes.string
};

export default ComponentProps;