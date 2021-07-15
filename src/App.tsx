/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Comics from './pages/comics';
import Details from './pages/comics/comicsDetails';
import GlobalStyle from './styles/global';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
    render() {
        return (
            <>
                <Router>
                    <Route exact path="/" component={Comics} />
                    <Route exact path="/details" component={Details} />
                </Router>
                <GlobalStyle />
            </>
        );
    }
}

export default App;
