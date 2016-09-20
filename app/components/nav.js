import React from 'react';
import { Nav, NavItem, Topbar, CollapsibleNav, Button } from 'amazeui-react';

class navInstance extends React.Component {
    render() {
        return (
            <Topbar brand="航盛车云管理后台" toggleNavKey="nav" className="am-topbar-inverse">
                <CollapsibleNav eventKey="nav">
                    <Nav topbar>
                        <NavItem href="#/booking">预约信息</NavItem>
                        <NavItem href="#/brand-manage">品牌管理</NavItem>
                        <NavItem href="#/provider-manage">4S店管理</NavItem>
                        <NavItem href="#/car-owner-manage">车主管理</NavItem>
                        <NavItem href="#/ad-manage">广告管理</NavItem>
                        <NavItem href="#/admin-manage">管理员管理</NavItem>
                    </Nav>
                </CollapsibleNav>
            </Topbar>
        );
    }
}

export default navInstance
