/**
 * Created by thanos on 9/20/16.
 */
import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';
import {
  Table,
  Button,
  Breadcrumb,
  Form,
  FormGroup,
  Input,
  Icon,
  Pagination,
  DateTimeInput,
  Modal,
  ModalTrigger
} from 'amazeui-react';

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

  onConfirm() {
    console.log('Confirmed...');
  }

  onCancel() {
    console.log('Canceled...');
  }

  render() {
    var addModal = (
      <Modal type="popup" title="添加管理员">
        <Form horizontal>
          <Input label="用户名" labelClassName="am-u-sm-2"
                 wrapperClassName="am-u-sm-10"/>
          <Input type="textarea" label="留言" labelClassName="am-u-sm-2"
                 wrapperClassName="am-u-sm-10"/>
          <FormGroup>
            <Input type="checkbox" label="有回复时邮件通知孤"
                   wrapperClassName="am-u-sm-offset-2 am-u-sm-10"/>
          </FormGroup>
          <Input type="submit" amStyle="primary" value="提交"
                 wrapperClassName="am-u-sm-offset-2 am-u-sm-10"/>
        </Form>
      </Modal>
    );
    var deleteModal = <Modal type="confirm" title="Amaze UI">你，确定要删除这条记录吗？</Modal>;

    return (
      <div>
        <Breadcrumb className="am-text-lg am-margin-bottom-0">
          <Breadcrumb.Item active>管理员管理</Breadcrumb.Item>
        </Breadcrumb>
        <ModalTrigger
          modal={addModal}>
          <Button radius className="am-fr am-margin-bottom">
            <Icon icon="user-plus"/> 添加管理员
          </Button>
        </ModalTrigger>

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
                  <ModalTrigger
                    modal={deleteModal}
                    onCancel={this.onCancel.bind(this)}
                    onConfirm={this.onConfirm.bind(this)}>
                    <Button amStyle="danger" amSize="sm" className="am-margin-left">删除</Button>
                  </ModalTrigger>
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
    console.log(this.state)
  }

  handleChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change)
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
                 value={this.state.userName} onChange={this.handleChange.bind(this, 'userName')}
                 wrapperClassName="am-u-sm-9"/>
          <Input label="用户名" labelClassName="am-u-sm-3" name="trueName"
                 value={this.state.trueName} onChange={this.handleChange.bind(this, 'trueName')}
                 wrapperClassName="am-u-sm-9"/>
          <Input label="手机号" labelClassName="am-u-sm-3" name="tel"
                 value={this.state.tel} onChange={this.handleChange.bind(this, 'tel')}
                 wrapperClassName="am-u-sm-9"/>

          <FormGroup>
            <Input type="checkbox" label="有回复时邮件通知孤"
                   wrapperClassName="am-u-sm-offset-3 am-u-sm-9"/>
          </FormGroup>
          <div>
            <DateTimeInput locale="zh_CN"/>
          </div>
          <Input type="submit" className="am-btn am-btn-primary" value="保存"
                 wrapperClassName="am-u-sm-offset-3 am-u-sm-9"/>
        </Form>
      </div>
    )
  }
}

export {AdminManage, AdminDetail}