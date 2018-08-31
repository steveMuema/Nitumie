import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = {
  height: 200,
};
class Register extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} >
        <Typography variant="title" color="inherit" className={classes.flex}>
              Create Account
        </Typography>
        <br />
      </Paper>
    );
  }
}
export default withStyles(styles)(Register);
