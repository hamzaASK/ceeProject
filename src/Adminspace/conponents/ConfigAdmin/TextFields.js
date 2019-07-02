    
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
//import { Spring } from 'react-spring/renderprops'
import Grid from '@material-ui/core/Grid';
//import {_onChange} from '../../RessourcesManagement/ressources'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
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

function CustomizedInputs(props) {
  const { classes } = props;

  return (
//     <Spring     from={{opacity:0,}}
//                 to={{opacity:1, }}
//                 config={{delay:1100,duration:1100}}>
// {props=>(

<Grid container spacing={24}
// style={props}
>
        <Grid item xs={12}>
          <MuiThemeProvider theme={theme}>
          <Grid item xs={12}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel} style={{textAlign:'left'}}>
              Title
            </InputLabel>
            <TextField style={{width:' 98%'}} 
           //onChange={event => _onChange(event,3)} 
            className={classes.margin} label="" variant="outlined" id="mui-theme-provider-outlined-input" />
          </Grid>
          <Grid item xs={12}>
            <InputLabel shrink htmlFor="bootstrap-input" className={classes.bootstrapFormLabel} style={{textAlign:'left'}}>
              Description
            </InputLabel>
              <TextField style={{width:' 98%'}} 
              //onChange={event => _onChange(event,4)}
              className={classes.margin} label=""
              variant="outlined" id="mui-theme-provider-outlined-input"multiline={true} rows={2} rowsMax={2}
              />
          </Grid>
          </MuiThemeProvider>
         
        </Grid>
        
    </Grid>
    
// )}
// </Spring>
  );
}

CustomizedInputs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedInputs);