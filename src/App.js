import React, { Fragment, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from './Routes';
import NotificationPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import './index.css';

const App = () => {
  const history = useHistory();
  useEffect(() => {
    insights.chrome.init();

    insights.chrome.identifyApp('data-science');
    return insights.chrome.on('APP_NAVIGATION', (event) =>
      history.push(`/${event.navId}`)
    );
  }, []);

  return (
    <Fragment>
      <NotificationPortal />
      <Routes />
    </Fragment>
  );
};

export default App;
