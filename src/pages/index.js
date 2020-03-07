import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from '../components/Home'

import Carousel from '../components/carousel';
import Maps from '../components/maps';
import Calculator from '../components/calculator';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/carousel" component={Carousel} />
                <Route path="/map" component={Maps} />
                <Rote path="/calculator" component={Calculator} />
            </Switch>
        </Router>
    )
}

export default Pages;