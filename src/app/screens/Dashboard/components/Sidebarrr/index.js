import React from 'react';
import Radium from 'radium';
import { connect } from 'react-redux';

import AuthActions from 'redux/auth/actions';

import styles from './styles';
import RetrieveLinks from './sidebarLinks';
import Drawer from './components/Drawer';
import Logo from './components/Logo';
import MenuBasic from './components/MenuBasic';

const SideBar = ({ open, drawerDocked, toggleSidebar, closeSidebar, dispatch, currentPage }) => {
  const logout = () => dispatch(authActions.signOut());

  const links = RetrieveLinks(logout);

  return (
    <div>
      <Drawer
        variant="permanent"
        containerStyle={!open ? styles.drawerClosed : {}}
        open={open}
        docked={drawerDocked}
        onRequestChange={toggleSidebar}
        closeSidebar={closeSidebar}
      >
        <Logo styles={open ? styles.logo : styles.logoCompact} />
        <MenuBasic
          links={links}
          closeSidebar={window.innerWidth < 992 ? closeSidebar : null}
          currentPage={currentPage}
        />
      </Drawer>
    </div>
  );
};

export default connect()(Radium(SideBar));
