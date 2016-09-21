import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Nav from './components/nav';

import Home from './components/home';
import { BookingManage, BookingDetail } from './components/booking';
import BrandManage from './components/brand-manage';
import ProviderManage from './components/provider-manage';
import CarOwnerManage from './components/car-owner-manage';
import AdManage from './components/ad-manage';
import {AdminManage, AdminDetail} from './components/admin-manage';

const Wrapper = (props) => {
	return (
		<div>
			<Nav/>
			<section className="am-container">
				{props.children}
			</section>
		</div>
	)
}

class App extends React.Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={ Wrapper }>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="booking-manage" component={ BookingManage }></Route>
					<Route path="booking-manage/:id" component={ BookingDetail }></Route>
					<Route path="brand-manage" component={ BrandManage }></Route>
					<Route path="provider-manage" component={ProviderManage}></Route>
					<Route path="car-owner-manage" component={CarOwnerManage}></Route>
					<Route path="ad-manage" component={AdManage}></Route>
					<Route path="admin-manage" component={AdminManage}></Route>
					<Route path="admin-manage/:id" component={AdminDetail} />
				</Route>
			</Router>
		)
	}
}

export default App;