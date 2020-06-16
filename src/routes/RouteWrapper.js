import React from 'react';
import { Route } from 'react-router-dom';

import PageContent from '../components/PageContent';

const RouteWrapper = ({ component: Component, ...rest }) => {
  return (
    <PageContent {...rest}>
      <Route {...rest}>
        <Component {...rest} />
      </Route>
    </PageContent>
  );
};

export default RouteWrapper;
