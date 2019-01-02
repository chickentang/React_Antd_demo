// modules/NavLink.js
import React from 'react'
import {  Link } from 'react-router'

//组装链接组件与a标签类似
export default class NavLink extends React.Component{
  render() {
    return <Link {...this.props} activeClassName="active"/>
  }
}
