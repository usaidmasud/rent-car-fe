import React from 'react';

import { Layout } from 'antd';
const { Footer } = Layout;

function CustomFooter() {
  return (
    <Footer style={{ textAlign: 'center' }}>
      Rental &copy; 2023
    </Footer>
  );
}

export default CustomFooter;
