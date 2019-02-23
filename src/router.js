import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux;

function RouterConfig({ history, app }) {

  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path='/' component={
          dynamic({
            app,
            component: () => import('./routes/JamSourceModule')
          })
        } />
      </Switch>
    </ConnectedRouter>
  );
}
export default RouterConfig;

