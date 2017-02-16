import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store/index';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './modules/App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import Home from './modules/Home';

import './style/main.css';
import './style/bootstrap.min.css';


store.subscribe(()=>{
    localStorage.setItem('todos',JSON.stringify(store.getState()));
});

render(
    <Provider store={store} >
        <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo}/>
          </Route>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    </Provider>
,document.getElementById('root'));

