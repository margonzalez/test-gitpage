import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSkeletonProvider } from '@trainline/react-skeletor';

import WithLoading from 'app/components/WithLoading';

import styles from './styles.scss';
import ClientHome from './components/ClientHome';
import AdminHome from './components/AdminHome';

class HomePageContainer extends Component {
  render() {
    return <div className={styles.homeContainer}>{true ? <ClientHome /> : <AdminHome />}</div>;
  }
}

const mapStateToProps = () => ({
  sampleLabel: {
    text: 'Blablablalbal'
  },
  loading: true
});

// export default connect()(WithLoading(props => props.loading)(HomePage));
export default connect(mapStateToProps)(
  createSkeletonProvider(
    {
      samleLabel: {
        text: 'MOCK_TEXT'
      }
    },
    props => true
  )(HomePageContainer)
);
