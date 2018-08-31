import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const styles = {
  baseDesc: {
    height: 450,
  }
};
class BasicDescription extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper className={classes.baseDesc} elevation={1} />
      </div>
    );
  }
}
export default withStyles(styles)(BasicDescription);
