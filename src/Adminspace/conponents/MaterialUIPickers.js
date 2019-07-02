import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker} from 'material-ui-pickers';
import { format } from 'date-fns'

const styles = {
  grid: {
    width: '60%',
  },
};
 
class MaterialUIPickersDemo extends React.Component {
  state = {
    selectedDate: new Date('2019-03-31T21:11:54'),
  };
 
  handleDateChange = date => {
    var birthday = new Date(date);
    
    //console.log(format(birthday, 'yyyy-MM-dd'))
    console.log(format(birthday, 'dd-MM-yyyy'))
    this.setState({ selectedDate: date });

    
  };
 
  render() {
    const { classes } = this.props;
    const { selectedDate } = this.state;
 
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container className={classes.grid} justify="space-around">
          <DateTimePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
            inputVariant="outlined"
            format="dd-MM-yyyy"
          />
         
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}
 
MaterialUIPickersDemo.propTypes = {
  classes: PropTypes.object.isRequired,
};
 
export default withStyles(styles)(MaterialUIPickersDemo);