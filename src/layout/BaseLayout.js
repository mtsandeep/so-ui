import React from 'react';

import Header from 'containers/common/Header';

const BaseLayout = props => (
  <div className="container">
    <Header />
    <div className="wrapper">{props.children}</div>
  </div>
);

export default BaseLayout;
