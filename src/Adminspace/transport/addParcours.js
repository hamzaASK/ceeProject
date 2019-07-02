import React ,{Component} from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import Grid from '@material-ui/core/Grid'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import {handleFilechange} from './home'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import Buttons from './buttonNavigationTransport.js'
import LocalMall from '@material-ui/icons/LocalMall';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import TrendingDown from '@material-ui/icons/TrendingDown';



class ImgDropAndCrop extends Component{
constructor(props){
    super(props)
    this.imagePreviewCanvasRef=React.createRef()
    this.state={
          nomParcours:'',
          etat:'',
          date:''
                }
                }
handleChange = prop => event => {
                                  this.setState({ [prop]: event.target.value });
                                  console.log(this.state)
    };
    

addParcours = ()=>{
  const fd =new FormData(); 
  const url = 'http://localhost:8000/api/createparcours';
  let h = new Headers();  
  let req = new Request(url, {method: 'POST',headers: h,mode: 'no-cors',body: fd});

  fd.append('nomParcours',this.state.nomParcours);
  fd.append('etat',this.state.etat);
  fd.append('date',this.state.date);
  h.append('Accept', 'application/text'); 

  fetch(req).then( (response)=>{console.log("Response received from server  "+response);})
            .catch( (err) =>{console.log('ERROR:', err.message);});
    }


render (){
    const { classes } = this.props;

return (
  <div className="App container" style={{    minWidth: '100%'}}>
   <Buttons />
      <Grid item xs={12}>
    <MuiThemeProvider theme={theme} >
    <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
          <Typography  component="h4" variant="headline" gutterBottom align="left"  className={classNames(classes.fullWidth, classes.textField)}>
          Nom Parcours
          </Typography>
        </Grid>
        <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
          <Typography variant="Title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField)} >
          Le chemin Parcouru
          </Typography>
        </Grid>
        <Grid item xs={12}>
        <TextField
                      id="outlined-simple-start-adornment"
                      className={classNames(classes.fullWidth, classes.textField)}
                      variant="outlined" label="Exemple:Rabat-Salé"
                      InputProps={{
                        startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>,
                      }} value={this.state.etat}
                      onChange={this.handleChange('etat')}
                    />
        </Grid>
        {/*******/}
        <Grid item xs={12} alignContent="center" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
          <Typography variant="Title" gutterBottom align="left"  className={classNames(classes.fullWidth, classes.textField)}>
          Etat du Parcours
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
                        select className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} variant="outlined" label="With Select"
                        value={this.state.nomParcours} onChange={this.handleChange('nomParcours')}
                        InputProps={{
                          startAdornment: <InputAdornment position="start">      <TrendingDown />
                          </InputAdornment>,
                        }}>
                        {ranges.map(option => (
                          <MenuItem key={option.id} value={option.value}>
                            {option.value}
                          </MenuItem>
                        ))}
                    </TextField>  
        </Grid>
        {/*******/}
        <Grid item xs={12} justify="left" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
          <Button variant="outlined" color="primary" className={classes.button} onClick={this.addParcours.bind(this)}>
            Primary
          </Button>
        </Grid>

    </MuiThemeProvider>
   
  </Grid>
    
                            </div>)
}
}
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  fullWidth: {
    width: "100%"
  },
  textField: {
    flexBasis: 200,
  },
  marginTop: {
    marginTop: '20px',
  },
  textAlign:{    textAlign: 'Left',padding:0,margin:0},
  noPaddingMargin: {
    marginTop: '5px',marginBottom: '5px',
    paddingTop: '5px',paddingBottom: '5px',
    marginLeft: 'auto',
    marginRight: 'auto',

  },
  margin: {
    margin: '3px',
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[500],
    },
  },
  notchedOutline: {},
  bootstrapRoot: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
       background:'#383234'  ,
      boxShadow: '0 0 0 0.2rem rgba(0,255,0,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 25,
    textAlign:'left',
       display: 'table-cell', 
          paddingLeft: '10px'
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
    value: 'Simple',
    label: 'Simple',
    id:1
  },
  {
    value: 'Composé',
    label: 'Composé',
    id:2
  }
];




export default withStyles(styles)(ImgDropAndCrop);