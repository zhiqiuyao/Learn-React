import React from 'react';
import axios from 'axios';
import {
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

export default AdminDetail