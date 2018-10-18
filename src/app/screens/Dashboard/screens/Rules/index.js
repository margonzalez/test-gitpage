import React, { PureComponent } from 'react';
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

import UTButton from 'app/components/UTButton';
import UTLabel from 'app/components/UTLabel';
import UTCard from 'app/components/UTCard';

import styles from './styles.scss';

const list = [...Array(5).keys()];

class Rules extends PureComponent {
  render() {
    return (
      <div className={styles.mainContent}>
        <div className={styles.rules}>
          {list.map((elem, index) => (
            <div style={{ height: 100 }}>
              <UTCard horizontal>
                <div>
                  <UTLabel gray>{`Regla ${index + 1}`}</UTLabel>
                </div>
                <div>
                  <IconButton onClick={this.handleEditOpen}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={this.handleDeleteOpen}>
                    <DeleteForever />
                  </IconButton>
                </div>
              </UTCard>
            </div>
          ))}
          <div>
            {list.map((elem, index) => (
              <ExpansionPanel>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{`Regla ${index + 1}`}</Typography>
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
        </div>
        <div>
          <UTButton>Agregar nueva regla</UTButton>
        </div>
      </div>
    );
  }
}

export default Rules;
