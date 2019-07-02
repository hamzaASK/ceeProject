import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteSweep from '@material-ui/icons/DeleteSweep';
import Button from '@material-ui/core/Button';
import LocalMall from '@material-ui/icons/LocalMall';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import LocalDrink from '@material-ui/icons/LocalDrink'
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DateTimePicker} from 'material-ui-pickers';
import { format } from 'date-fns'
import axios from 'axios';
import { Divider } from '@material-ui/core';
import ReactDOM from 'react-dom'

import Table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


const CustomTableCell = withStyles(theme => ({
  head: {
     background:'#383234'  ,
    color: theme.palette.common.white,
    textAlign:'center'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);
class Steppers extends React.Component {
  constructor(props){
    super(props)
    this._refreshBooks()
  }
/***************************************/
state = { 
          books:[],
          id:0,
          type: '',
          poids: '',
          niveau: '',
          date_creation: new Date('2019-03-31T21:11:54'),
};
/***************************************/
handleChange = prop => event => {
  this.setState({ [prop]: event.target.value });
};
/***************************************/
handleDateChange = date => {
                            var birthday = new Date(date);
                            this.setState({ date_creation: format(birthday, 'dd-MM-yyyy') });
                            };
/***************************************/
addWaste() {
            const { classes } = this.props;  

            axios.post('http://localhost:8000/api/createrecyc', 
            {
              type:this.state.type,
              poids:this.state.poids,
              niveau:this.state.niveau,
              date_creation:this.state.date_creation,
              id_dechets:this.state.id
            })
            .then(function (response) {
              console.log(response.data)
            }).catch(function (error){console.error(error)});
          

              ReactDOM.render(
                <Grid style={{width:'100%'}}  container spacing={0} direction="column" alignItems="center" justify="center" >
                    <Grid justify = "center" item xs={12} id="afterAdd" style={{width:'72%'}}>
                  {/* <div style={{width: '600px', marginTop: '0px',marginBottom: '2px',marginLeft:'auto',marginRight:'auto',}}>  */}
                      <Grid  container  alignItems="center" justify="center" style={{background:'green',height:'50px',borderRadius:'25px'}}> 
                        <Typography variant="h6" gutterBottom className={classes.instructions} style={{color:'white'}}>
                          Nouvel Article Inserer
                        </Typography>
                      </Grid>
                      <Divider variant="middle" />
                    </Grid>  
                    <Table2 className={classes.table}>
                        <TableBody>
                          <TableRow  >
                            <CustomTableCell align="center">Type</CustomTableCell>
                            <CustomTableCell align="center"> {this.state.type} </CustomTableCell>
                          </TableRow>
                          <TableRow  >
                            <CustomTableCell align="center">Poids</CustomTableCell>
                            <CustomTableCell align="center"> {this.state.poids} </CustomTableCell>
                          </TableRow>
                          <TableRow  >
                            <CustomTableCell align="center">Niveau</CustomTableCell>
                            <CustomTableCell align="center"> {this.state.niveau} </CustomTableCell>
                          </TableRow>
                          <TableRow  >
                            <CustomTableCell align="center">Date De Creation</CustomTableCell>
                            <CustomTableCell align="center"> {this.state.date_creation} </CustomTableCell>
                          </TableRow>
                          <TableRow  >
                            <CustomTableCell align="center">Type</CustomTableCell>
                            <CustomTableCell align="center"> {this.state.type} </CustomTableCell>
                          </TableRow>
            
                        </TableBody>
                    </Table2>  
                  </Grid>    
            
                ,document.getElementById("afterAdd"))

          }
          





addNewArticle=()=>{
  this.setState({ 
    type: '',
    poids: '',
    niveau: '',
    date_creation: new Date('2019-03-31'),
});
}
          

_refreshBooks() {
  axios.get('http://localhost:8000/api/dech').then((response) => {
    this.setState({
      books: response.data
        })
  });

}


  render() {
    const { classes } = this.props;
    const { date_creation } = this.state;

    return (
      <Grid style={{width:'100%'}}  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center"

>
      <Grid justify = "center" item xs={12} id="afterAdd" style={{width:'72%'}}>
        <MuiThemeProvider theme={theme} >
          {/*******/}
          <Grid item xs={12}  >
          <Typography variant="h4" gutterBottom align="left"  >
              Recyclage
            </Typography>
          </Grid>
          {/*******/}
           <Grid item xs={12} alignContent="center" margin="normal" fullWidth id="full-width-text-field" >
            <Typography variant="subtitle2" gutterBottom align="left"  >
              Identifiant Dechet
            </Typography>
          </Grid>
          <Grid item xs={12}>
                      <TextField select margin="normal" fullWidth id="full-width-text-field" variant="outlined" label="With Select"
                                  value={this.state.id} onChange={this.handleChange('id')}
                                  InputProps={{startAdornment: <InputAdornment position="start"><DeleteSweep /></InputAdornment>,}}>
                                  {this.state.books.map(option => (<MenuItem key={option.id} value={option.id}>{option.id}     -     {option.type}     -     {option.date_creation}</MenuItem>))}
                      </TextField>
          </Grid>
          {/*******/}
          <Grid item xs={12} alignContent="center" margin="normal" fullWidth id="full-width-text-field" >
            <Typography variant="subtitle2" gutterBottom align="left"  >
            Le Tri Des Déchets Selon Leurs Catégories
            </Typography>
          </Grid>
          <Grid item xs={12}>
                      <TextField select margin="normal" fullWidth id="full-width-text-field" variant="outlined" label="With Select"
                                  value={this.state.type} onChange={this.handleChange('type')}
                                  InputProps={{startAdornment: <InputAdornment position="start"><DeleteSweep /></InputAdornment>,}}>
                                  {ranges.map(option => (<MenuItem key={option.value} value={option.value}>{option.label}</MenuItem>))}
                      </TextField>
          </Grid>
          {/*******/}
          <Grid item xs={12} margin="normal" fullWidth id="full-width-text-field"   >
            <Typography variant="subtitle2" gutterBottom align="left"  >
                Indiquez Son Poids
            </Typography>
          </Grid>
          <Grid item xs={12}>
                    <TextField id="outlined-simple-start-adornment"  variant="outlined" margin="normal" fullWidth 
                         value={this.state.poids} onChange={this.handleChange('poids')}
                        label="en ( Kg )" InputProps={{startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>,}}/>
          </Grid>
          {/*******/}
          <Grid item xs={12} margin="normal" fullWidth id="full-width-text-field"   >
            <Typography variant="subtitle2" gutterBottom align="left"  >
              Definissez Son Niveau total           
            </Typography>
          </Grid>
          <Grid item xs={12}>
                  <TextField id="outlined-simple-start-adornment" variant="outlined" margin="normal" 
                         value={this.state.niveau} onChange={this.handleChange('niveau')}
                        label="En (Mètre Cube)"InputProps={{startAdornment: <InputAdornment position="start"><LocalDrink /></InputAdornment>,}}/> 
          </Grid>
          {/*******/}
          <Grid item xs={12} margin="normal" fullWidth id="full-width-text-field"   >
            <Typography variant="subtitle2" gutterBottom align="left"  >
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
          <Grid item xs={12} style={{marginTop:'20px'}}  >
            <Button margin="normal" fullWidth id="full-width-text-field" variant="outlined" color="primary" className={classes.button} onClick={this.addWaste.bind(this)} style={{background:'green',color:'#eaeaea',height:'60px'}}>
              Ajouter
            </Button>
          </Grid>
        </MuiThemeProvider>
        </Grid>
      </Grid>  
    );
  }
}

Steppers.propTypes = {
  classes: PropTypes.object.isRequired,
};

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
    marginTop: '5px',marginBottom: '0px',
    paddingTop: '5px',paddingBottom: '0px',
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

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
});

const ranges = [
  {
    value: 'Verre',
    label: 'Verre',
  },
  {
    value: 'Metal',
    label: 'Métal',
  },
  {
    value: 'Plastique',
    label: 'Plastique',
  },
  {
    value: 'Organique',
    label: 'Organique',
  },
  {
    value: 'Papier',
    label: 'Papier',
  },
];

export default withStyles(styles)(Steppers);


