import React, { PureComponent, Fragment } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  ExpansionPanelActions,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  IconButton
} from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import AuthActions from 'redux/auth/actions';
import UTButton from 'app/components/UTButton';
import UTCardButton from 'app/components/UTCardButton';
import UTCard from 'app/components/UTCard';
import logo from 'logo.svg';

import styles from '../styles.scss';

const list = [...Array(10).keys()];

class AdminHome extends PureComponent {
  testNotification = () => this.props.dispatch(AuthActions.testOverride('Rogelio'));

  render() {
    return (
      <Fragment>
        <div>Hola soy la home page!</div>
        <UTButton>Agregar dispositivo</UTButton>
        <IconButton>
          <AddCircle className={styles.addIcon} />
        </IconButton>
        <UTCardButton>Soy una card button!</UTCardButton>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div>
          {list.map(() => (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Expansion Panel 1</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit
                  amet blandit leo lobortis eget.
                </Typography>
              </ExpansionPanelDetails>
              <Divider light />
              <ExpansionPanelActions>
                <UTButton>Cancel</UTButton>
                <UTButton flat>Save</UTButton>
              </ExpansionPanelActions>
            </ExpansionPanel>
          ))}
        </div>
        <List disablePadding subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}>
          {list.map(() => (
            <ListItem onClick={event => console.log(event.target)} divider button>
              <ListItemText disableTypography primary="Inbox" />
            </ListItem>
          ))}
        </List>

        <UTCard
          header={{ tile: 'title' }}
          footer={[{ name: 'Send request!', onPress: this.testNotification }]}
        >
          asd
        </UTCard>
      </Fragment>
    );
  }
}

export default AdminHome;
