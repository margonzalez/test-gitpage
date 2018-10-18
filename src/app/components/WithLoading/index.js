import React from 'react';

import Loading from './components/Loading';

const WithLoading = (shouldLoad, text) => WrappedComponent =>
  function PropsProxy(props) {
    return shouldLoad(props) ? (
      <Loading text={text} className={props.className} /> // eslint-disable-line react/prop-types
    ) : (
      <WrappedComponent {...props} />
    );
  };

export default WithLoading;
