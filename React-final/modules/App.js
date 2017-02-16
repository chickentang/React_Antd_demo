import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav" className="nav navbar-nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos of tang</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
