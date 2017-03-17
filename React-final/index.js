import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import store from './store/index';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from './modules/App';
import About from './modules/search';
import Repos from './modules/Repos';
import Home from './modules/content';
import Counter from './modules/Counter';

import './style/main.css';
import './style/bootstrap.min.css';
import './style/antd.css';


store.subscribe(()=>{
    localStorage.setItem('todos',JSON.stringify(store.getState()));
});

render(
    <Provider store={store} >
        <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="/repos" >
            <Route path="/repos/pagea" component={About}/>
            <Route path="/repos/pageb" component={Counter}/>
          </Route>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    </Provider>
,document.getElementById('root'));
