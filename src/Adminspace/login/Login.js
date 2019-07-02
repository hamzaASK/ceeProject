import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import FormHelperText from '@material-ui/core/FormHelperText';
import {handleChangeLoginValue,handleChangePasswdValue,handleClick,handleButtonInscriptionClick} from '../events/eventsLogin'
import Link from '@material-ui/core/Link';
import DoneIcon from '@material-ui/icons/Add';
import styles from '../css/LoginStyles'
import { mapDispatchToProps } from '../../Settings/ReduxStore/adminActions'
import { mapStateToProps } from '../../Settings/ReduxStore/stateReducer'
import { connect } from 'react-redux'
import { Spring } from 'react-spring/renderprops'

class GuttersGrid extends React.Component {
  state = {
    spacing: '0',
  };


  render() {
    const { classes } = this.props;
    const { spacing } = this.state;
        return (
          <Spring     from={{opacity:0,}}
          to={{opacity:1, }}
          config={{delay:1000,duration:1000}}>
      {props=>(
          <Grid container  justify="center" spacing={Number(spacing)} 
          style={props}
          >
              
              {/** Grid 3 Inputs..... */}
              <Grid key={2} item>
                  <Paper className={classes.paper} >
                        <Avatar className={classes.avatar}  >
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                                  Sign in
                        </Typography>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" onChange={handleChangeLoginValue.bind(this)} autoComplete="email" autoFocus />
                            <FormHelperText id="errorEmail" error={true}></FormHelperText>
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" onChange={handleChangePasswdValue.bind(this)} autoComplete="current-password" />
                            <FormHelperText id="errorPassword" error={true}></FormHelperText>
                            <FormHelperText id="error" error={true}></FormHelperText>
                        </FormControl>
                        <Button className={classes.Button}  type="button" fullWidth variant="contained" color="primary" onClick={handleClick.bind(this, this.props)} >
                          Sign in
                        </Button>
                        <Link href="/#/forgotpassword"  className={withStyles.link}>
                            Mot de Passe Oublié
                        </Link>
                        <Chip icon={<FaceIcon />} clickable label="   S'Inscrire  ...  " onClick={handleButtonInscriptionClick} className={classes.chip} deleteIcon={<DoneIcon />} color="secondary" /> 
                  </Paper>
              </Grid>
        </Grid>
        )}
        </Spring>
    );
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(GuttersGrid));
