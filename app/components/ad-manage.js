/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import {Link} from 'react-router';

import {Table, Button, Breadcrumb, Form, Input, Icon } from 'amazeui-react';

class AdManage extends React.Component {
    render() {
        return (
            <div>
                <Breadcrumb className="am-text-lg">
                    <Breadcrumb.Item active>广告管理</Breadcrumb.Item>
                </Breadcrumb>
                <Table bordered striped responsive>
                    <thead>
                    <tr>
                        <th>礼品名称</th>
                        <th>平台</th>
                        <th>开始时间</th>
                        <th>结束时间</th>
                        <th>状态</th>
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
            </div>
        )
    }
}

export default AdManage