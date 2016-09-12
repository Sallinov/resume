import React from 'react';
import ReactDOM from 'react-dom';
import Home from './home';
import Educetion from './education';
import Interest from './interest';
import Menu from './menu';
import Skill from './skill';
import Soceal from './soceal'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path='/' component={Menu}>
            <IndexRoute component={Home} />
            <Route path='/' component={Home} />
            <Route path='/skill' component={Skill} />
            <Route path='/soceal' component={Soceal} />
            <Route path='/interest' component={Interest} />
            <Route path='/educetion' component={Educetion} />
        </Route>
    </Router>, document.getElementById('root')
);
