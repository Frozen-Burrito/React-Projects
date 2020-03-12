import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Home from '../components/Home'

import Carousel from '../components/carousel';
import Maps from '../components/maps';
import Calculator from '../components/calculator';
import Quiz from '../components/quiz';
import Autocomplete from '../components/search_autocomplete';

const Pages = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/carousel" component={Carousel} />
                <Route path="/map" component={Maps} />
                <Route path="/calculator" component={Calculator} />
                <Route path="/quiz" component={Quiz} />
                <Route path="/autocomplete" component={Autocomplete} />
            </Switch>
        </Router>
    )
}

export default Pages;