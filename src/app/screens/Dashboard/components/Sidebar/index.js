import React, { Component } from 'react';
import { connect } from 'react-redux';
import { object } from 'prop-types';
import { push } from 'react-router-redux';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { withStyles, Toolbar } from '@material-ui/core';

import { MAP, REPORTS, TRACING, DASHBOARD, RULES } from 'app/components/Routes/constants';
import AuthActions from 'redux/auth/actions';

import styles from './styles.scss';

const materialStyles = () => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  drawerPaper: {
    position: 'relative',
    minWidth: 200,
    width: 260,
    backgroundColor: '#251e33'
  },
  toolbar: {
    backgroundImage: 'linear-gradient(to bottom right, #31bd18, #dc1f1f)',
    margin: '10px 10px 10px 10px',
    width: '60%'
  }
});

class Sidebar extends Component {
  state = {
    selectedIndex: 0
  };

  handleListItemClick = index => {
    this.setState({ selectedIndex: index });
  };

  handleGoToTracing = () => {
    this.props.dispatch(push(TRACING));
    this.handleListItemClick(0);
  };

  handleGoToReports = () => {
    this.props.dispatch(push(REPORTS));
    this.handleListItemClick(1);
  };

  handleGoToHomePage = () => {
    this.props.dispatch(push(DASHBOARD));
    this.handleListItemClick(0);
  };

  handleGoToRules = () => {
    this.props.dispatch(push(RULES));
    this.handleListItemClick(1);
  };

  render() {
    const { classes } = this.props;
    const adminSidebar = (
      <List disablePadding component="nav">
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          selected={this.state.selectedIndex === 0}
          button
          onClick={this.handleGoToTracing}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Seguimiento" />
        </ListItem>
        <Divider />
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          selected={this.state.selectedIndex === 1}
          button
          onClick={this.handleGoToReports}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Reportes" />
        </ListItem>
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          button
          onClick={() => this.props.dispatch(push(MAP))}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Localizacion" />
        </ListItem>
        <Divider />
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          button
          onClick={() => this.props.dispatch(AuthActions.testPrimary())}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Cerrar sesion" />
        </ListItem>
      </List>
    );

    const clientSidebar = (
      <List disablePadding component="nav">
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          selected={this.state.selectedIndex === 0}
          button
          onClick={this.handleGoToHomePage}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Home page" />
        </ListItem>
        <Divider />
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          selected={this.state.selectedIndex === 1}
          button
          onClick={this.handleGoToRules}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Reglas" />
        </ListItem>
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          button
          onClick={() => this.props.dispatch(push(MAP))}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Localizacion" />
        </ListItem>
        <Divider />
        <ListItem
          classes={{ gutters: styles.listItemContainer, selected: styles.selectedItem }}
          button
          onClick={() => this.props.dispatch(AuthActions.testPrimary())}
        >
          <ListItemText disableTypography className={styles.listItem} primary="Cerrar sesion" />
        </ListItem>
      </List>
    );
    return (
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <Toolbar variant="dense" classes={{ root: classes.toolbar }}>
            Hola
          </Toolbar>
          {adminSidebar}
          {/* <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button className={classes.nested}>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </Collapse> */}
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: object // eslint-disable-line react/forbid-prop-types
};

export default withStyles(materialStyles)(connect()(Sidebar));
