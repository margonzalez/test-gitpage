/* eslint-disable */
import React from 'react';
import Radium from 'radium';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import { Link } from 'react-router-dom';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import styles from './styles';

class MenuRow extends React.Component {
  state = { open: this.props.active };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { node, index, firstLoop, itemOnClick, children, active } = this.props;

    return (
      <div key={index} style={active ? styles.itemActive : styles.itemInactive}>
        <ListItem
          button
          onClick={children.length > 0 ? this.handleClick : itemOnClick ? itemOnClick : null}
          style={active && !firstLoop ? styles.listItemActive : {}}
        >
          <ListItemText
            inset
            primary={node.text ? node.text : null}
            style={firstLoop ? styles.colorDefault : styles.subItem}
            disableTypography={true}
          />
          {this.state.open && children.length > 0 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        {children.length > 0 ? (
          <Collapse in={this.state.open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItem button>{children}</ListItem>
            </List>
          </Collapse>
        ) : (
          ''
        )}
      </div>
    );
  }
}

class MenuBasic extends React.Component {
  createListBasic = (node, index, firstLoop, itemOnClick) => {
    let children = [],
      active = node.link === this.props.currentPage;

    if (node.items) {
      children = node.items.map((node, i) => this.createListBasic(node, i, false, itemOnClick));

      if (!active) {
        node.items.forEach((item, i) => {
          if (item.link === this.props.currentPage) {
            active = true;
          }
        });
      }
    }

    if (node.link) {
      return (
        <Link to={node.link} key={index} style={styles.link}>
          <MenuRow
            children={children}
            node={node}
            index={index}
            firstLoop={firstLoop}
            itemOnClick={itemOnClick}
            active={active}
          />
        </Link>
      );
    }

    return (
      <MenuRow
        key={index}
        children={children}
        node={node}
        index={index}
        firstLoop={firstLoop}
        itemOnClick={itemOnClick}
        active={active}
      />
    );
  };

  render() {
    return (
      <List component="nav">
        {this.props.links.map((node, i) =>
          this.createListBasic(node, i, true, node.onClick || this.props.closeSidebar)
        )}
      </List>
    );
  }
}

export default MenuBasic;
