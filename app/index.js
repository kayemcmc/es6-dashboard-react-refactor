import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './header';
import Search from './search';
import User from './user';

class App extends Component {
    render() {
       return (
           <div>
            <Header children="Github Search React Refactor"/>
            <div className="container">
            <Search />
            <User />
            </div>
          
           </div>
       )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));