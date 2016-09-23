/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';
import {Table, Button, Breadcrumb, Form, Input, Icon } from 'amazeui-react';

class ProviderManage extends React.Component {
    constructor() {
        super();
        this.state = {providers: []}
    }
    componentDidMount() {
        axios.get('/data/provider-list.json')
            .then((res) => {
                this.setState({
                    providers: res.data
                })
            })
    }
    render() {
        return (
            <div>
                <Breadcrumb className="am-text-lg">
                    <Breadcrumb.Item active>4S店管理</Breadcrumb.Item>
                </Breadcrumb>
                <Table bordered striped responsive>
                    <thead>
                    <tr>
                        <th>服务商名称</th>
                        <th>品牌</th>
                        <th>状态</th>
                        <th>服务时间</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.providers.map((provider) => {
                        return (
                            <tr key={provider.id}>
                                <td>{provider.name}</td>
                                <td>{provider.subBrands[0].name}</td>
                                <td>{provider.flagDes}</td>
                                <td>{provider.serviceTime}</td>
                                <td>
                                    <Link to="/provider-manage/123">
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

export default ProviderManage