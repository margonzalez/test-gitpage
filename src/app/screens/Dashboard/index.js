import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bool, func } from 'prop-types';
// import UTTouchableWithoutFeedback from '@components/UTTouchableWithoutFeedback';
// import SidebarActions from '@redux/sidebar/actions';

import Dashboard from './layout';
// import Topbar from './components/Topbar';
// import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import styles from './styles.scss';

class DashboardContainer extends Component {
  render() {
    const { loading } = this.props;
    return (
      <div className={styles.fullContainer}>
        {/* <Topbar /> */}
        <div className={styles.container}>
          {/* <Sidebar
            open={this.state.open}
            drawer_docked={this.state.drawer_docked}
            toggleSidebar={this.toggleSidebar}
            closeSidebar={this.closeSidebar}
            currentPage={this.state.currentPage}
          /> */}
          <Sidebar />
          {/* <UTTouchableWithoutFeedback
            className={`${isOpen ? styles.sidebarOpenBackground : null}`}
            onClick={this.handleClick}
          /> */}
          <Dashboard loading={loading} />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = store => ({
  // loading: store.auth.sessionLoading || store.user.currentUserLoading,
  // isOpen: store.sidebar.isOpen
});

// const mapDispatchToProps = dispatch => ({
//   closeSidebar: () => dispatch(SidebarActions.closeSidebar()),
//   closeUserDataMenu: () => dispatch(SidebarActions.closeUserDataMenu())
// });

DashboardContainer.propTypes = {
  loading: bool,
  closeSidebar: func.isRequired,
  closeUserDataMenu: func.isRequired,
  isOpen: bool
};

export default connect(mapStateToProps)(DashboardContainer);
