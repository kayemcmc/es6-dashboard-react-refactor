import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './header';

class App extends Component {
    render() {
       return (
           <div>
            <Header children="Github Search React Refactor"/>
           </div>
       )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));