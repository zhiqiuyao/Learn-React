import React from 'react';
import {Route, Link} from 'react-router';
import { Nav, NavItem, Topbar, CollapsibleNav } from 'amazeui-react';

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

class NavInstance extends React.Component {
    render() {
        return (
            <Topbar brand="航盛车云管理后台" toggleNavKey="nav" className="am-topbar-inverse">
                <CollapsibleNav eventKey="nav">
                    <Nav topbar>
                        <NavLink to="/booking-manage">预约管理</NavLink>
                        <NavLink to="/brand-manage">品牌管理</NavLink>
                        <NavLink to="/provider-manage">4S店管理</NavLink>
                        <NavLink to="/car-owner-manage">车主管理</NavLink>
                        <NavLink to="/ad-manage">广告管理</NavLink>
                        <NavLink to="/admin-manage">管理员管理</NavLink>
                    </Nav>
                </CollapsibleNav>
            </Topbar>
        );
    }
}

export default NavInstance
