import React, {Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';  


import 'bootstrap/dist/js/bootstrap'; 
import 'bootstrap/node_modules/jquery/dist/jquery'; 

import Alert from "./alert.jsx";

import Counter from "./Counter";
import Jiyeon from "./Jiyeon";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component {

    goPage() {
        Alert.open({
            alertTip:"这是一个测试弹框",
            closeAlert:function(){
                console.log("关闭了...");
            }
        });
    }

    render() {
        return ( 
            <div class="body">
                <nav class="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
                    <a class="navbar-brand" href="#">Logo</a>
                </nav>

                <Router>
                    <div>
                        <nav class="navbar bg-light nav-vertical">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" /*onClick={this.goPage}*/ ><Link to="/jiyeon">主页</Link></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link"><Link to="/counter">MENU 1</Link></a>
                                </li> 
                            </ul> 
                            
                        </nav>

                        <div class="content_body">
                            <Route path="/counter" component={Counter}/>
                            <Route path="/jiyeon" component={Jiyeon}/>
                        </div>
                    </div>
                </Router>
            </div>
            
        );
    }

}

export default Navbar;