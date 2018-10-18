import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core';
import { goBack } from 'react-router-redux';

import UTMap from 'app/components/UTMap';
import UTCard from 'app/components/UTCard';
import UTButton from 'app/components/UTButton';

import styles from './styles.scss';

class Localization extends PureComponent {
  state = { selectedZone: 0 };

  list = [...Array(8).keys()];

  handleGoToSignIn = () => this.props.dispatch(goBack());

  handleClickZone = ind => this.setState({ selectedZone: ind });
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.buttonContainer}>
            <UTButton onPress={this.handleGoToSignIn}>Volver</UTButton>
          </div>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <UTCard>
                <List disablePadding classes={{ root: styles.listContainer }}>
                  {this.list.map((elem, index) => (
                    <ListItem onClick={() => this.handleClickZone(index)} divider button>
                      <ListItemText disableTypography primary={`Zona ${index}`} />
                    </ListItem>
                  ))}
                </List>
              </UTCard>
            </div>
            <div className={styles.card}>
              <UTCard>
                <List disablePadding classes={{ root: styles.listContainer }}>
                  {this.list.map(() => (
                    <ListItem onClick={event => console.log(event.target)} divider button>
                      <ListItemText disableTypography primary="Inbox" />
                    </ListItem>
                  ))}
                </List>
              </UTCard>
            </div>
          </div>
          <UTMap selectedZone={this.state.selectedZone} />
        </div>
      </div>
    );
  }
}

Localization.propTypes = {};

export default connect()(Localization);
