/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import { Table, Button, Breadcrumb, Form, FormGroup, Input, Icon, Pagination, DateTimeInput } from 'amazeui-react';

let iconUser = <Icon icon="user" />;
let iconPwd = <Icon icon="lock" />;

class AdminManage extends React.Component {
    constructor() {
        super();
        this.state = {admins: []};
    }
    componentDidMount() {
        axios.get('/data/admin-manage.json')
            .then((res) => {
                this.setState({
                    admins: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <Breadcrumb className="am-text-lg">
                    <Breadcrumb.Item active>管理员管理</Breadcrumb.Item>
                </Breadcrumb>
            <Table bordered striped responsive>
                <thead>
                <tr>
                    <th>帐号</th>
                    <th>用户名</th>
                    <th>状态</th>
                    <th>联系方式</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                    {this.state.admins.map((admin) => {
                        return (
                            <tr key={admin.id}>
                                <td>{admin.userName}</td>
                                <td>{admin.trueName}</td>
                                <td>{admin.flagDes}</td>
                                <td>{admin.tel}</td>
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
            <Pagination right>
                <Pagination.Item disabled href="#">&laquo;</Pagination.Item>
                <Pagination.Item active>1</Pagination.Item>
                <Pagination.Item href="#">2</Pagination.Item>
                <Pagination.Item href="#">3</Pagination.Item>
                <Pagination.Item href="#">4</Pagination.Item>
                <Pagination.Item href="#">5</Pagination.Item>
                <Pagination.Item href="#">&raquo;</Pagination.Item>
            </Pagination>
            </div>
        )
    }
}


class AdminDetail extends React.Component {
    constructor() {
        super();
        this.state = {
            tel: '',
            userName: '',
            trueName: ''
        };
    }
    componentDidMount() {
        axios.get('/data/admin-manage.json')
            .then((res) => {
                const admin = res.data[1];
                this.setState({
                    tel: admin.tel,
                    userName: admin.userName,
                    trueName: admin.trueName
                })
            })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.tel.value,e.target.userName.value)
    }
    handleChange(e) {
        console.log(e.target);
        this.setState({
            tel: e.target.value
        })
    }

    render() {
        return (
            <div>
                <Breadcrumb className="am-text-lg">
                    <Breadcrumb.Item href="#/admin-manage">管理员管理</Breadcrumb.Item>
                    <Breadcrumb.Item active>当前用户</Breadcrumb.Item>
                </Breadcrumb>
                <Form horizontal className="am-u-sm-12 am-u-md-6 am-u-md-offset-3" onSubmit={this.handleSubmit}>
                    <Input label="帐号" labelClassName="am-u-sm-3" name="userName"
                           value={this.state.userName} onChange={this.handleChange.bind(this)}
                           wrapperClassName="am-u-sm-9" />
                    <Input label="用户名" labelClassName="am-u-sm-3" name="trueName"
                           value={this.state.trueName} onChange={this.handleChange.bind(this)}
                           wrapperClassName="am-u-sm-9" />
                    <Input label="手机号" labelClassName="am-u-sm-3" name="tel"
                           value={this.state.tel} onChange={this.handleChange.bind(this)}
                           wrapperClassName="am-u-sm-9" />

                    <FormGroup>
                        <Input type="checkbox" label="有回复时邮件通知孤"
                               wrapperClassName="am-u-sm-offset-3 am-u-sm-9" />
                    </FormGroup>
                    <div>
                        <DateTimeInput locale="zh_CN"/>
                    </div>
                    <Input type="submit" className="am-btn am-btn-primary" value="保存"
                           wrapperClassName="am-u-sm-offset-3 am-u-sm-9" />
                </Form>
            </div>
        )
    }
}

export { AdminManage, AdminDetail }