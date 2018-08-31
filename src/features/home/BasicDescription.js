import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  baseDesc: {
    height: 450,
  },
  media: 450,
};
class BasicDescription extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.baseDesc}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../images/mobile-payment-hd.jpg"
              title="Mobile Payment"
            />
          </CardActionArea>
        </Card>
      </div>
    );
  }
}
export default withStyles(styles)(BasicDescription);
