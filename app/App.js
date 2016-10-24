import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import {AdminNav, ProviderNav} from './components/nav';

import Index from './components/index';
import Home from './components/home';
import { BookingManage, BookingDetail } from './components/booking';
import BrandManage from './components/brand-manage';
import ProviderManage from './components/provider-manage';
import CarOwnerManage from './components/car-owner-manage';
import AdManage from './components/ad-manage';
import {AdminManage, AdminDetail} from './components/admin-manage';
import StoreFront from './components/provider/store-front';
import AuditProviderInfo from './components/admin/audit-provider-info';
import AuditProviderPic from './components/admin/audit-provider-pic';

// Provider
import ProviderAdminManage from './components/provider/admin-manage-list';

const AdminWrapper = (props) => {
	return (
		<div>
			<AdminNav/>
			<section className="am-container">
				{props.children}
			</section>
		</div>
	)
};

const ProviderWrapper = (props) => {
	return (
		<div>
			<ProviderNav/>
			<section className="am-container">
				{props.children}
			</section>
		</div>
	)
};

class App extends React.Component {
	render() {
		return (
			<Router history={ hashHistory }>
        <Route path="/" component={Index}/>
				<Route path="/admin" component={ AdminWrapper }>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="booking-manage" component={ BookingManage }></Route>
					<Route path="booking-manage/:id" component={ BookingDetail }></Route>
					<Route path="brand-manage" component={ BrandManage }></Route>
					<Route path="provider-manage" component={ProviderManage}></Route>
					<Route path="car-owner-manage" component={CarOwnerManage}></Route>
					<Route path="ad-manage" component={AdManage}></Route>
					<Route path="admin-manage" component={AdminManage}></Route>
					<Route path="admin-manage/:id" component={AdminDetail} />
          <Route path="audit-provider-info" component={AuditProviderInfo}/>
          <Route path="audit-provider-pic" component={AuditProviderPic}/>
				</Route>
				<Route path="/provider" component={ ProviderWrapper }>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="booking-manage" component={ BookingManage }></Route>
					<Route path="booking-manage/:id" component={ BookingDetail }></Route>
					<Route path="store-front" component={ StoreFront }></Route>
					<Route path="provider-manage" component={ProviderManage}></Route>
					<Route path="car-owner-manage" component={CarOwnerManage}></Route>
					<Route path="ad-manage" component={AdManage}></Route>
          <Route path="admin-manage" component={ProviderAdminManage}></Route>
					<Route path="admin-manage/:id" component={AdminDetail} />
				</Route>
			</Router>
		)
	}
}

export default App;