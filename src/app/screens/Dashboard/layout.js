import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import * as Routes from 'app/components/Routes/constants';
import WithLoading from 'app/components/WithLoading';

import styles from './styles.scss';
import HomePage from './screens/HomePage';
import Reports from './screens/Reports/components';
import Localization from './screens/Localization';
import Rules from './screens/Rules';

const Dashboard = () => (
  <div className={styles.content}>
    <Switch>
      <Route exact path={Routes.DASHBOARD} component={HomePage} />
      <Route exact path={Routes.MAP} component={Localization} />
      <Route exact path={Routes.RULES} component={Rules} />
      <Route exact path={Routes.REPORTS} component={Reports} />
      <Route render={() => <Redirect to={Routes.DASHBOARD} />} />
    </Switch>
  </div>
);

export default WithLoading(props => props.loading)(Dashboard);
