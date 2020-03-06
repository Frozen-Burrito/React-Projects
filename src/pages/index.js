import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from '../components/Home'
import Carousel from '../components/carousel';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/carousel" component={Carousel} />
            </Switch>
        </Router>
    )
}

export default Pages;