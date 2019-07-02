import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import {handleChangeLoginValue,handleClick} from '../events/eventsForgotPasswd'
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '300px',
        color : '#00F800'
        
      },
    
      cssLabel: {
        color : '#00F800'
      },
      cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
          borderColor: '#00F800 !important',
          color : '#00F800'
        }
      },
    
      cssFocused: { borderColor: '#00F800 !important',color : '#00F800'},
    
      notchedOutline: {
        borderWidth: '2px',
        borderColor: '#00F800 !important',
        color : '#00F800'

      },
    Button:{
        background: 
        'radial-gradient(circle at 25% 0,#00F800,#000000 70.71%),radial-gradient(circle at 6.7% 75%,#00F800,#000000 70.71%),radial-gradient(circle at 93.3% 75%,#00F800,#000000 70.71%) beige'
   
    },
root: {
    background: 
    'radial-gradient(circle at 20% 20%,rgba(30, 37, 30,1),rgba(33, 100, 34,0) 44.71%),radial-gradient(circle at 25.7% 60%,rgba(125, 180, 1,1),rgba(33, 100, 34,0) 30.71%),radial-gradient(circle at 80.3% 20%,rgba(125, 180, 1,1),rgba(33, 100, 34,1) 30.71%) beige',
   height:'1080px'
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    height:500,
    width:500

  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    
  },
 
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: '#BD1A60',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  }
});











class GuttersGrid extends React.Component {
  state = {
    spacing: '0',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  

  render() {
    const { classes } = this.props;
    
      
    return (
                <Grid container justify="center" alignItems="center">
                    <FormControl className="formControl">
                    <TextField
                                id="standard-name"
                                label="Email"
                                className={classes.textField}
                                value={this.state.name}
                                onChange={handleChangeLoginValue.bind(this)}
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    classes: {
                                    root: classes.cssLabel,
                                    focused: classes.cssLabel,
                                    notchedOutline: classes.notchedOutline,
                                    },
                                }}
                                InputProps={{
                                    classes: {
                                    root: classes.cssOutlinedInput,
                                    focused: classes.cssFocused,
                                    notchedOutline: classes.notchedOutline,
                                    },
                                    inputMode: "numeric"
                                }}
                                />
                        <FormHelperText id="errorEmail" error={true}></FormHelperText>
                        <br></br>
                        <Button className={classes.Button} type="submit" variant="contained" size="large" color="primary" onClick={handleClick} >
                            Récupérer le Mot de Passe
                        </Button>
                    </FormControl>
                </Grid>
    );
  }
}

GuttersGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GuttersGrid);








// import React,{Component} from 'react';
// import TextField from '@material-ui/core/TextField';
// import {handleChangeLoginValue,handleClick} from '../events/events-frpw'
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';

// const styles = theme => ({
   
//   root: {
//     background: 
//         'radial-gradient(circle at 20% 20%,rgba(30, 37, 30,1),rgba(33, 100, 34,0) 44.71%),radial-gradient(circle at 25.7% 60%,rgba(125, 180, 1,1),rgba(33, 100, 34,0) 30.71%),radial-gradient(circle at 80.3% 20%,rgba(125, 180, 1,1),rgba(33, 100, 34,1) 30.71%) beige'
//   }
// });


// class NavBar extends Component{
    
//        render(){

    
        
//         return (
//             <div className="root" >
//                 <FormControl className="formControl">
//                     <TextField
//                         id="outlined-email-input"
//                         label="Email"
//                         className=""
//                         type="email"
//                         name="email"
//                         autoComplete="email"
//                         margin="normal"
//                         variant="outlined"
//                         onChange={handleChangeLoginValue.bind(this)}
//                     />
//                     <FormHelperText id="errorEmail" error={true}></FormHelperText>
//                     <br></br>
//                     <Button type="submit" variant="contained" size="large" color="primary" onClick={handleClick} >
//                         Récupérer le Mot de Passe
//                     </Button>
//                 </FormControl>
//             </div>
//         )
//         }

// }
// export default withStyles(styles)(NavBar);