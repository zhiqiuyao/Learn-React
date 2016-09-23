/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import {Table, Button, Breadcrumb, Form, Input, Icon } from 'amazeui-react';

class BookingManage extends React.Component {
    constructor() {
        super();
        this.state = {bookings: []};
    }
    componentDidMount() {
        axios.get('/data/booking-list.json')
            .then((res) => {
                this.setState({
                    bookings: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <Breadcrumb className="am-text-lg">
                    <Breadcrumb.Item active>预约管理</Breadcrumb.Item>
                </Breadcrumb>
                <Table bordered striped responsive>
                    <thead>
                    <tr>
                        <th>订单类型</th>
                        <th>客户名</th>
                        <th>电话</th>
                        <th>车牌号</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.bookings.map((booking) => {
                        return (
                            <tr key={booking.id}>
                                <td>{booking.typeDesc}</td>
                                <td>{booking.trueName}</td>
                                <td>{booking.tel}</td>
                                <td>{booking.carNo}</td>
                                <td>
                                    <Link to="/admin-manage/123">
                                        <Button amStyle="primary" amSize="sm">详情</Button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        )
    }
}

class BookingDetail extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item href="#/admin-manage">预约管理</Breadcrumb.Item>
                    <Breadcrumb.Item active>当前用户</Breadcrumb.Item>
                </Breadcrumb>
                
            </div>
        )
    }
}


export { BookingManage, BookingDetail }