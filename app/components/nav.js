import React from 'react';
import {Link} from 'react-router';
import {Nav, Topbar, CollapsibleNav, Dropdown} from 'amazeui-react';

const NavLink = React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  render: function () {
    let isActive = this.context.router.isActive(this.props.to, true),
      className = isActive ? "am-active" : "";

    return (
      <li className={className}>
        <Link {...this.props}>
          {this.props.children}
        </Link>
      </li>
    );
  }
});

class AdminNav extends React.Component {
  render() {
    return (
      <Topbar brand="航盛车云管理后台" toggleNavKey="nav" className="am-topbar-inverse">
        <CollapsibleNav eventKey="nav">
          <Nav topbar>
            <NavLink to="/admin/booking-manage">预约管理</NavLink>
            <NavLink to="/admin/brand-manage">品牌管理</NavLink>
            <NavLink to="/admin/provider-manage">4S店管理</NavLink>
            <NavLink to="/admin/car-owner-manage">车主管理</NavLink>
            <NavLink to="/admin/ad-manage">广告管理</NavLink>
            <NavLink to="/admin/audit-provider-info">4S店信息审核</NavLink>
            <NavLink to="/admin/admin-manage">管理员管理</NavLink>
            <Dropdown title="切换" btnStyle="success">
              <Dropdown.Item header>标题</Dropdown.Item>
              <Dropdown.Item>航盛后台</Dropdown.Item>
              <Dropdown.Item>4S店后台</Dropdown.Item>
            </Dropdown>
          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
}

class ProviderNav extends React.Component {
  render() {
    return (
      <Topbar brand="4S店管理后台" toggleNavKey="nav" className="am-topbar-inverse">
        <CollapsibleNav eventKey="nav">
          <Nav topbar>
            <NavLink to="/provider/booking-manage">预约管理</NavLink>
            <NavLink to="/provider/store-front">店面信息</NavLink>
            <NavLink to="/provider/admin-manage">管理员管理</NavLink>

            <Dropdown title="切换" btnStyle="success">
              <Dropdown.Item header>标题</Dropdown.Item>
              <Dropdown.Item>航盛后台</Dropdown.Item>
              <Dropdown.Item>4S店后台</Dropdown.Item>
            </Dropdown>
          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
}

export {AdminNav, ProviderNav}
