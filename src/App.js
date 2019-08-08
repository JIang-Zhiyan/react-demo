import React, {Component, Fragment} from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import Jiyeon from './Jiyeon';
import Counter from './Counter';
import Navbar from './Navbar';

class App extends Component {
  render(){
    const style={
      backgroundColor:'lightblue',
      padding:'20px 20px',
      color:'white',
      fontSize:'30px'
    };

    const pad20 = {
      padding:'20px 20px',
    }

    return (
      <Fragment>

        <Navbar />

      </Fragment>
    );
  }
}

export default App;
