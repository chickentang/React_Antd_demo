import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div id="app">
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
