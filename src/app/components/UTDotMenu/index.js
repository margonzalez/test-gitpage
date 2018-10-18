import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { arrayOf } from 'prop-types';

import { cardActionsTypes } from 'types/commonTypes';

class UTDotMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={anchorEl ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu id="long-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
          {this.props.options.map(option => (
            <MenuItem key={option.name} onClick={option.onPress}>
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

UTDotMenu.propTypes = {
  options: arrayOf(cardActionsTypes.footer)
};

export default UTDotMenu;
