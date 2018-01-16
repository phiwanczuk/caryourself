import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import CarSearch from './Components/CarSearch/CarSearch'

class App extends Component {
    render() {
        return (
            <Router>
                <Route exact
                       path="/"
                       component={CarSearch}/>
            </Router>

        );

    }
}

export default App;
