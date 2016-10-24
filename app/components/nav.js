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
let adminPageTitle = "航盛车云管理后台",
  providerPageTitle = "4S店管理后台";
class AdminNav extends React.Component {
  componentDidMount() {
    document.title = adminPageTitle;
  }
  render() {
    return (
      <Topbar brand={adminPageTitle} toggleNavKey="nav" className="am-topbar-inverse">
        <CollapsibleNav eventKey="nav">
          <Nav topbar>
            <li className="am-dropdown">
              <Dropdown title="切换" btnStyle="success">
                <li className="am-active">
                  <Link to="/admin">航盛后台</Link>
                </li>
                <li>
                  <Link to="/provider">4S店后台</Link>
                </li>
              </Dropdown>
            </li>
            <NavLink to="/admin/booking-manage">预约管理</NavLink>
            <NavLink to="/admin/brand-manage">品牌管理</NavLink>
            <NavLink to="/admin/provider-manage">4S店管理</NavLink>
            <NavLink to="/admin/car-owner-manage">车主管理</NavLink>
            <NavLink to="/admin/ad-manage">广告管理</NavLink>

            <li className="am-dropdown">
              <Dropdown title="审核4S店" btnStyle="primary">
                <NavLink to="/admin/audit-provider-pic">图片</NavLink>
                <NavLink to="/admin/audit-provider-info">信息</NavLink>
              </Dropdown>
            </li>
            <NavLink to="/admin/admin-manage">管理员管理</NavLink>

          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
}

class ProviderNav extends React.Component {
  componentDidMount() {
    document.title = providerPageTitle;
  }
  render() {
    return (
      <Topbar brand={providerPageTitle} toggleNavKey="nav" className="am-topbar-inverse">
        <CollapsibleNav eventKey="nav">
          <Nav topbar>
            <NavLink to="/provider/booking-manage">预约管理</NavLink>
            <NavLink to="/provider/store-front">店面信息</NavLink>
            <NavLink to="/provider/admin-manage">管理员管理</NavLink>

            <Dropdown title="切换" btnStyle="success">
              <li>
                <Link to="/admin">航盛后台</Link>
              </li>
              <li className="am-active">
                <Link to="/provider">4S店后台</Link>
              </li>
            </Dropdown>
          </Nav>
        </CollapsibleNav>
      </Topbar>
    );
  }
}

export {AdminNav, ProviderNav}
