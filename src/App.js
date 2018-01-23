import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'
import {Grid} from 'react-bootstrap'
import Cars from "./Components/Cars/Cars";


class App extends Component {
    render() {
        return (
            <Router>
                <Grid>
                <Route exact
                       path="/"
                       component={Cars}/>
                </Grid>
            </Router>

        );

    }
}

export default App;
