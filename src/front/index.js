import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from 'store/index.js';

import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import App from 'modules/App.js';
import About from 'modules/search';
import Home from 'modules/content';
import Counter from 'modules/Counter.js';

import 'assets/style/main.css';
// import 'assets/style/bootstrap.min.css';
import 'assets/style/antd.css';


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
