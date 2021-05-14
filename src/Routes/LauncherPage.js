import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

const LauncherPage = () => {
  if (!getRegistry) {
    getRegistry = React.useContext(RegistryContext).getRegistry;
  }
  
  return (
    <Provider store={getRegistry().getStore()}>
      <div>hi</div>
    </Provider>
  );
}

LauncherPage.propTypes = {
  getRegistry: PropTypes.func,
};

export default LauncherPage;
