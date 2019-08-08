import React, {Component} from 'react';

//defaultProps 예제
/*
class Jiyeon extends Component {
    //static defaultProps = {name:'강지연'}
    
    render() {
       return(
            <div>Just wanna introduce my self. My name is <b>{this.props.name}</b></div>
        );
    }
}

Jiyeon.defaultProps = {
    name:'강지연'
};
*/

//함수형 컴포넌트
//const : 값이 변하지 않을때 쓰는 정의 형식 
//let : 값이 변할때 사용하는 정의 형식
const pad20 = {
    padding : '20px 20px',
};

const Jiyeon = ({name}) => {
    return (
        <div style={pad20}>
            안녕하세요! 제 이름은 {name} 입니다. 
        </div>
    );
};

export default Jiyeon;