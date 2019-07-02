import React,{Component} from 'react';
import Logo from '@material-ui/icons/Email'; // Tell Webpack this JS file uses this image

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';

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


class NavBar extends Component{
    
       render(){

        return (
                
                <Grid container justify="center" alignItems="center">
                {/* <Avatar justify="center" alignItems="center" alt="Remy Sharp" src={logo} className={classes.avatar} style={{height:'200px' , width: '200px',border: '5px solid #00AA8D'}} /> */}
               
                <FormControl className="formControl" style={{color:'#c7c6c4'}}>
                    
                    <Typography variant="h5" component="h3" style={{color:'#c7c6c4'}}>
                    Merci, Nous avons trouvé votre Compte.<br></br>
                    <Logo style={{width:'200px',height:'200px',color:'#00F800'}}/>
                    </Typography>
                    <Typography component="p" style={{color:'#c7c6c4'}}>
                    Vous recevrez le nouveau mot de passe sur votre adresse email.
                    </Typography>

               </FormControl>
               
                </Grid>
        )
        }

}

export default withStyles(styles)(NavBar);
