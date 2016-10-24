import React from 'react';
import {Breadcrumb, Grid, Col, Panel, Button, Input, ButtonToolbar} from 'amazeui-react';

//
let pageTitle = "4S店图片审核";
class AuditProviderPic extends React.Component {
  componentDidMount() {
    document.title = pageTitle;
  }

  render() {
    return (
      <div>
        <Breadcrumb className="am-text-lg">
          <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
        </Breadcrumb>

        <ButtonToolbar className="am-text-center am-margin-bottom">
          <Button amStyle="danger" amSize="sm">不通过</Button>
          <Button amStyle="success" amSize="sm">通过</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default AuditProviderPic