import React from 'react';
import { Switch } from 'react-router-dom';

import routes from './routes';
import { dynamicImportRouter } from '../utils/router';
import RouteWrapper from './RouteWrapper';

import PageWrapper from '../components/PageWrapper';

const Routes = () => (
  <PageWrapper>
    <Switch>
      {routes.map((route, index) => {
        const component = dynamicImportRouter(route.component);
        return (
          <RouteWrapper
            exact={route.exact}
            key={index.toString()}
            path={route.path}
            title={route.title}
            component={component}
            isPrivate={route.auth}
          />
        );
      })}
      <RouteWrapper path="*" component={() => 'Página não encontrada.'} />
    </Switch>
  </PageWrapper>
);

export default Routes;
