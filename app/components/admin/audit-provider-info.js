import React from 'react';
import {Breadcrumb, Grid, Col, Panel, Button, Input, ButtonToolbar} from 'amazeui-react';

let pageTitle = "4S店信息审核";

class AuditProviderInfo extends React.Component {
  componentDidMount() {
    document.title = pageTitle;
  }
  render() {
    return (
      <div>
        <Breadcrumb className="am-text-lg">
          <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>
        </Breadcrumb>
        <Grid className="doc-g">
          <Col md={6}>
            <Panel header="原信息">
              <form className="am-form">
                <fieldset disabled>
                  <Input type="text" name="name" label="用户名" defaultValue="小明"/>
                  <Input type="text" label="年龄" defaultValue="16"/>
                </fieldset>
              </form>
            </Panel>
          </Col>
          <Col md={6}>
            <Panel header="修改信息" amStyle="warning">
              <form className="am-form">
                <fieldset disabled>
                  <Input type="text" name="name" label="用户名" defaultValue="小明"/>
                  <Input type="text" label="年龄" defaultValue="18" validation="warning"/>
                </fieldset>
              </form>
            </Panel>
          </Col>
        </Grid>
        <ButtonToolbar className="am-text-center am-margin-bottom">
          <Button amStyle="danger" amSize="sm">不通过</Button>
          <Button amStyle="success" amSize="sm">通过</Button>
        </ButtonToolbar>
      </div>
    )
  }
}

export default AuditProviderInfo