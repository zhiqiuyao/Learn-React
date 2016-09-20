import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Booking from './components/booking';
import BrandManage from './components/brand-manage';
import ProviderManage from './components/provider-manage';
import CarOwnerManage from './components/car-owner-manage';
import AdManage from './components/ad-manage';
import {AdminManage, Admin} from './components/admin-manage';
class App extends React.Component {
	render() {
		return (
			<Router history={ hashHistory }>
				<Route path="/" component={Booking}></Route>
				<Route path="/booking" component={Booking}></Route>
				<Route path="/brand-manage" component={BrandManage}></Route>
				<Route path="/provider-manage" component={ProviderManage}></Route>
				<Route path="/car-owner-manage" component={CarOwnerManage}></Route>
				<Route path="/ad-manage" component={AdManage}></Route>
				<Route path="/admin-manage" component={AdminManage}></Route>
				<Route path="/admin-manage/:adminId" component={Admin}></Route>
			</Router>
		)
	}
}

export default App;