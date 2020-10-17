import React from 'react';

const withLayout = (Layout, Component) => {
  return () => (
    <Layout>
      <Component />
    </Layout>
  )
};
export default withLayout;
