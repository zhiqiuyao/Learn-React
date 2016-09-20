/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import Nav from './nav';
import { Link } from 'react-router';
import {Table, Button, Breadcrumb, Form, Input, Icon } from 'amazeui-react';

var iconUser = <Icon icon="user" />;
var iconPwd = <Icon icon="lock" />;

class AdminManage extends React.Component {

    render() {
        return (
            <div>
                <Nav/>
                <section className="am-container">

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
                        <tr>
                            <td>Amaze UI</td>
                            <td>admin1</td>
                            <td>2012-10-01</td>
                            <th>123456</th>
                            <th>
                                <Button amStyle="primary" amSize="sm">详情</Button>
                            </th>
                        </tr>
                        <tr>
                            <td>Amaze UI(Active)</td>
                            <td>admin2</td>
                            <td>2012-10-01</td>
                            <th>123456</th>
                            <th>
                                <Link to="/admin-manage/123"><Button amStyle="primary" amSize="sm">详情</Button></Link>
                            </th>
                        </tr>
                        </tbody>
                    </Table>
                </section>
            </div>
        )
    }
}

class Admin extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <section className="am-container">
                    <Breadcrumb>
                        <Breadcrumb.Item href="#/admin-manage">管理员管理</Breadcrumb.Item>
                        <Breadcrumb.Item active>当前用户</Breadcrumb.Item>
                    </Breadcrumb>
                    <Form className="am-u-sm-4 am-u-sm-offset-4">
                        <Input addonBefore={iconUser} placeholder="User Name" />
                        <Input addonBefore={iconPwd} placeholder="Password" />
                        <Input type="submit" amStyle="primary" value="提交"
                               wrapperClassName="am-u-sm-offset-2 am-u-sm-10" />
                    </Form>
                </section>
            </div>
        )
    }
}

export { AdminManage, Admin }