import React, {Component} from 'react';

const pad20 = {
    padding : '20px 20px',
};

class Counter extends Component {

    //state : 동적인 데이터를 다룰때 사용함 
    /*
    state = {
        number : 0
    }
    */
    //class fileds를 사용하는 대신 constructor 
    //컴포턴트를 상속받으면서 그의 변수를 this.state를 사용하면서 덮어 쓰게됨 
    //그래서 this.state 해주기전에 super해서 보내줘야 함 
    //왜냐면 class 필드기 constructor 보다 빨리 실행됨, 그래서 super로 보내고, 변수 정의
    
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };

        //함수를 handleIncrease = () => 의 형식으로 정의 하지 않았을 경우
        //함수를 찾지 못하는 에러가 발생하기 때문에 this.함수이름 으로 이벤트 bind해줘야 함
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecreate = this.handleDecreate.bind(this);
    };
 
    //handleIncrease = () => {
    handleIncrease() {
        this.setState({
            number:this.state.number + 1
        });

        /*
            this.setState( 
                (state) => ({
                    number : state.number
                })
            );
        */

        /*
            this.setState(
                ({ number }) => ({
                    number : number + 1
                })
            );
        */

        /*
            const { number } = this.state;

            this.setState({
                number : number + 1
            })
        */
    }
     

    //handleDecreate = () => {
    handleDecreate() {
        this.setState({
            number: this.state.number >= 1 ? this.state.number - 1 : 0
        });
    }

    render () {
        return (
            <div style={pad20}>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecreate}>-</button>
            </div>
        );
    }
}

export default Counter;