import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  
  render() {
    let isMouseEnter = () => {return this.lidom.className = "";}
    let isMouseLeave = () => {return this.lidom.className = "nav-hide";}
    return (
      <div>
        <ul role="nav" className="nav navbar-nav menu">
          <li><NavLink to="/" onlyActiveOnIndex>首页</NavLink></li>
          <li><NavLink to="/about">报表</NavLink></li>
          <li  onMouseEnter={isMouseEnter} onMouseLeave={isMouseLeave} >
              <NavLink to="/repos">系统</NavLink>
              <ul className="nav-hide" ref={(node)=>this.lidom = node}>
                 <li><NavLink to="/repos/pagea">项目管理<span className="icon-angle"></span></NavLink></li>
                 <li><NavLink to="/repos/pageb">城市管理<span className="icon-angle"></span></NavLink></li>
              </ul>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

