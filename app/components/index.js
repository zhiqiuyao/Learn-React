import React from 'react';
import {Link} from 'react-router';

// 索引页
class Index extends React.Component {
  render() {
    return (
      <div>
        <h2><Link to="/admin">admin</Link></h2>
        <h2><Link to="/provider">provider</Link></h2>
      </div>
    )
  }
}

export default Index