import React from 'react';
import NavLink from './NavLink';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


export default React.createClass({
    
    render(){
        return(
          <Layout>
            <Header className="header">
              <div className="logo" >
                    <img src={require("../images/logo.png")} alt="" width="112" height="35" />
              </div>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['3']}
                style={{ lineHeight: '64px' }}
                className="headerMenu"
              >
                <Menu.Item key="1"><NavLink to="/" >首页</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to="/about">报表</NavLink></Menu.Item>
                <Menu.Item key="3"><NavLink to="/repos/pageb" onlyActiveOnIndex>配置</NavLink></Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Sider width={200} >
                <Menu
                  mode="inline"
                    theme="dark"
                  defaultSelectedKeys={['1']}
                  defaultOpenKeys={['sub1']}
                  style={{ height: '100%' }} className="diy-dark"
                >
                  <SubMenu key="sub1" title={<span><Icon type="user" />权限管理</span>}>
                    <Menu.Item key="1"><NavLink to="/repos/pagea">组织架构</NavLink></Menu.Item>
                    <Menu.Item key="2"><NavLink to="/repos/pageb">用户管理</NavLink></Menu.Item>
                    <Menu.Item key="3">角色管理</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub2" title={<span><Icon type="laptop" />参数配置</span>}>
                    <Menu.Item key="5">功能配置</Menu.Item>
                    <Menu.Item key="6">业态配置</Menu.Item>
                    <Menu.Item key="6">特征配置</Menu.Item>
                    <Menu.Item key="6">码表配置</Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub3" title={<span><Icon type="notification" />日志管理</span>}>
                    <Menu.Item key="9">接口日志</Menu.Item>
                    <Menu.Item key="10">操作日志</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: '0 24px 24px' }}>
                <Breadcrumb style={{ margin: '12px 0' }}>
                  <Breadcrumb.Item>配置</Breadcrumb.Item>
                  <Breadcrumb.Item>权限管理</Breadcrumb.Item>
                  <Breadcrumb.Item>组织架构</Breadcrumb.Item>
                </Breadcrumb>
                <Content style={{ background: '#fff', padding: 15, margin: 0, minHeight: 515 }}>
                    {this.props.children}
                </Content>
              </Layout>
            </Layout>
          </Layout>
        )}
   });