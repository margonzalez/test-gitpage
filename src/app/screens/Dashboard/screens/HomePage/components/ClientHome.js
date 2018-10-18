import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { submit } from 'redux-form';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  ExpansionPanelActions,
  Divider,
  IconButton
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForever from '@material-ui/icons/DeleteForever';
import Poll from '@material-ui/icons/Poll';

import UTButton from 'app/components/UTButton';
import UTLabel from 'app/components/UTLabel';
import UTCard from 'app/components/UTCard';
import UTCardButton from 'app/components/UTCardButton';
import { RULES } from 'app/components/Routes/constants';
import AlertActions from 'redux/alert/actions';

import ClientConsumption from '../../Reports/components/ClientConsumption';
import styles from '../styles.scss';

const list = [...Array(10).keys()];

class ClientHome extends PureComponent {
  handleClientConsumption = () => alert('test');

  handleSubmitClientConsumption = () => this.props.dispatch(submit('CLIENT_CONSUMPTION'));
  render() {
    const testComoponent = <UTButton>test render component</UTButton>;

    return (
      <div className={styles.userHomeContainer}>
        <div style={{ display: 'flex' }}>
          <div className={styles.userCardContainer}>
            <UTCard horizontal>
              <div className={styles.userCardContent}>
                <div>
                  <UTLabel>{'Ultimo consumo: XXXXXXXXXXXXXX'}</UTLabel>
                </div>
                <div className={styles.cardButtons}>
                  <UTButton
                    onPress={() =>
                      this.props.dispatch(AlertActions.openAlertDialog(testComoponent, 'Testing'))
                    }
                    flat
                  >
                    VER MEDICIONES
                  </UTButton>
                  <UTButton flat>AGREGAR DISPOSITIVO</UTButton>
                </div>
              </div>
            </UTCard>
          </div>
          <div className={styles.simplexButton}>
            <UTButton>EJECUTAR SIMPLEX</UTButton>
          </div>
        </div>
        <div className={styles.mainContent}>
          <div className={styles.devices}>
            {list.map((elem, index) => (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{`Dispositivo ${index + 1}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                    sit amet blandit leo lobortis eget.
                  </Typography>
                </ExpansionPanelDetails>
                <Divider light />
                <ExpansionPanelActions>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteForever />
                  </IconButton>
                </ExpansionPanelActions>
              </ExpansionPanel>
            ))}
          </div>
          <div className={styles.cardButtonAndForm}>
            <UTCardButton icon={Poll} onClick={() => this.props.dispatch(push(RULES))}>
              Ir a mis reglas
            </UTCardButton>
            <ClientConsumption
              title={'Consumo en un periodo'}
              isClient
              containerProps={styles.clientConsumptionContainer}
              onSubmit={this.handleClientConsumption}
              submit={this.handleSubmitClientConsumption}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ClientHome);
