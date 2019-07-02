import Directions from '@material-ui/icons/Directions';
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Buttons from './buttonNavigationTransport.js'
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import EvStation from '@material-ui/icons/EvStation';
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker} from 'material-ui-pickers';
import { format } from 'date-fns'
import LocalDrink from '@material-ui/icons/LocalDrink'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Divider } from '@material-ui/core';
import Done from '@material-ui/icons/Done'
import ReactDOM from 'react-dom'
import TableList from './tableLinks'

class OutlinedInputAdornments extends React.Component {
state = {
          booksVehicule:[],
          id:0,
          parcours: '',
          id_vehicule: '',
          distance: 0,
          nbr_place:1,
          date_creation: new Date('2019-03-31T21:11:54'),
          //id:0,parcours: '',id_vehicule: '',distance: '',nbr_place:1,date_creation: '',

};
/***************************************/
componentWillMount() {
  this.booksVehicule();
}
/***************************************/
handleChange = prop => event => {
  this.setState({ [prop]: event.target.value });
};
/***************************************/
handleDateChange = date => {
  var birthday = new Date(date);
  //console.log(format(birthday, 'yyyy-MM-dd'))
  //console.log(format(birthday, 'dd-MM-yyyy'))
  this.setState({ date_creation: format(birthday, 'dd-MM-yyyy') });
  };
/***************************************/
addLink() {
  const { classes } = this.props;  

  axios.post('http://localhost:8000/api/createparcours', 
  {
    id_vehicule:this.state.id_vehicule,
    distance:this.state.distance,
    nbr_place:this.state.nbr_place,
    date_creation:this.state.date_creation,
  })
  .then(function (response) {
    console.log(response.data)
  }).catch(function (error){console.error(error)});

  ReactDOM.render(
    <div style={{width: '600px', marginTop: '0px',marginBottom: '2px',marginLeft:'auto',marginRight:'auto',}}> 
          <SnackbarContent className={classes.snackbar} variant="success"  message={'Ajouter'} 
            Style={{marginRight: 'auto',marginLeft: 'auto',}}>
          </SnackbarContent>
          <Divider variant="middle" />
          <Done style={{width:'50px',height:'50px'}}/>
          <Typography variant="h6" gutterBottom className={classes.instructions} >
            {this.state.id_vehicule} 
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" gutterBottom className={classes.instructions} >
            {this.state.distance} 
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" gutterBottom className={classes.instructions} >
            {this.state.id} 
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" gutterBottom className={classes.instructions} >
            {this.state.nbr_place} 
          </Typography>
          <Divider variant="middle" />
          <Typography variant="h6" gutterBottom className={classes.instructions} >
            {this.state.date_creation} 
          </Typography>

          <Button variant="outlined" color="primary" className={classes.button} onClick={this.addNewArticle.bind(this)}>
            Afficher La Liste
          </Button>
    </div>
    
    
    ,document.getElementById("PaperTable"))
  
}



addNewArticle=()=>{
  ReactDOM.render(<TableList />,document.getElementById("PaperTable"))
  }
/***************************************/
booksVehicule() {
  axios.get('http://localhost:8000/api/d').then((response) => {
    this.setState({
      booksVehicule: response.data
        })
  });
}



  render() {
    const { classes } = this.props;
    const { date_creation } = this.state;

    return (
    <div className={classes.root}>
      <Buttons />
      <Grid item xs={12}>
        <MuiThemeProvider theme={theme} >
          {/*******/}
          <Grid item xs={12} alignContent="center" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
            <Typography variant="Title" gutterBottom align="left"  className={classNames(classes.fullWidth, classes.textField)}>
              Le type de la id_vehicule          
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField select className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} variant="outlined" label="With Select"
                value={this.state.id_vehicule} onChange={this.handleChange('id_vehicule')} InputProps={{ startAdornment: <InputAdornment position="start"> <EvStation /> </InputAdornment>, }}>
                {this.state.booksVehicule.map(option => ( <MenuItem key={option.id} value={option.id}>{option.type}</MenuItem>))}
            </TextField>  
          </Grid>
          {/*******/}
          <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
            <Typography variant="Title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField)} >
              la Distance
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField id="outlined-simple-start-adornment" className={classNames(classes.fullWidth, classes.textField)}
              variant="outlined" label="En (Km)" value={this.state.distance} onChange={this.handleChange('distance')}
              InputProps={{startAdornment: <InputAdornment position="start"><Directions /></InputAdornment>,}}/>
          </Grid>
          {/*******/}
          <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
          <Typography variant="Title" gutterBottom align="left"  className={classNames(classes.fullWidth, classes.textField)}>
              Nombre De Passagers
            </Typography>
          </Grid>
          <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}>
          <TextField id="outlined-simple-start-adornment" label="Nombre" value={this.state.nbr_place} onChange={this.handleChange('nbr_place')} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}
                  type="number" InputLabelProps={{shrink: true,startAdornment: <InputAdornment position="start"><Directions /></InputAdornment>}} margin="normal"variant="outlined"/>
          </Grid>
          {/*******/}
          <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
            <Typography variant="Title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField)} >
              Date
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container className={classes.grid} justify="space-around">
                      <DateTimePicker style={{width: "99%"}} autoOk label="Custom CSS" variant="outlined" value={date_creation} onChange={this.handleDateChange}
                      format="dd-MM-yyyy" InputProps={{ startAdornment: <InputAdornment position="start"><LocalDrink /></InputAdornment>, }}/>
              </Grid>
            </MuiPickersUtilsProvider>
          </Grid>
          {/*******/}
          <Grid item xs={12} justify="left" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
            <Button variant="outlined" color="primary" className={classes.button} onClick={this.addLink.bind(this)}>
              Ajouter
            </Button>
          </Grid>
        </MuiThemeProvider>
      </Grid>
    </div>
    );
  }
}
OutlinedInputAdornments.propTypes = {
  classes: PropTypes.object.isRequired,
};
/***************************************/
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',  
    "&:hover:not($disabled):not($focused):not($error) $notchedOutline": {
      borderColor: purple[500]
    }
  },
  fullWidth: {
    width: "99%"
  },
  textField: {
    flexBasis: 200,
  },
  noPaddingMargin: {
    marginTop: '2px',marginBottom: '2px',
    paddingTop: '2px',paddingBottom: '2px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  snackbar: {
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop:'50px',
    backgroundColor:'#43A047',
    width:'100%',
    textAlign: 'center'
  },

});
/***************************************/
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});
/***************************************/

export default withStyles(styles)(OutlinedInputAdornments);

