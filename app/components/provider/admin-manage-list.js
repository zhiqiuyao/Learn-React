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
  Modal,
  ModalTrigger
} from 'amazeui-react';

class ProviderAdminList extends React.Component {
  constructor() {
    super();
    this.state = {admins: []};
  }

  componentDidMount() {
    axios.get('/data/provider/users.json')
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
            <th>年龄</th>
            <th>性别</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          {this.state.admins.map((admin) => {
            return (
              <tr key={admin.id}>
                <td>{admin.account}</td>
                <td>{admin.name}</td>
                <td>{admin.age}</td>
                <td>{admin.gender}</td>
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


export default ProviderAdminList;