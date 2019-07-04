import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { handleChangeFonction, handleChangePrenom, handleChangeNom, handleChangeTel, handleChangePassword, handleChangeLogin } from '../events/eventsInscription'
import { checkPass, checkEmail } from '../services/verif-retap'

function AddressForm ()
{
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        Données Personnelles
      </Typography>
      <Grid container spacing={ 24 }>
        <Grid item xs={ 12 } sm={ 4 }>
          <TextField required id="firstName" name="firstName" label="Nom" fullWidth autoComplete="fname" onChange={ handleChangeNom.bind( this ) } />
          <FormHelperText id="errorFirstName" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <TextField required id="lastName" name="lastName" label="Prénom" fullWidth autoComplete="lname" onChange={ handleChangePrenom.bind( this ) } />
          <FormHelperText id="errorLastName" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 4 }>
          <TextField required id="phone" name="phone" label="Téléphone" fullWidth onChange={ handleChangeTel.bind( this ) } autoComplete="billing address-line1" />
          <FormHelperText id="errorPhone" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField required id="email" name="email" label="Email" fullWidth autoComplete="billing address-level2" onChange={ handleChangeLogin.bind( this ) } />
          <FormHelperText id="errorEmail" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField id="reEmail" name="reEmail" label="Retaper l'Email" fullWidth onChange={ checkEmail.bind( this ) } />
          <FormHelperText id="errorReEmail" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField required id="password" type="password" name="password" label="Mot de Passe" fullWidth autoComplete="Password" onChange={ handleChangePassword.bind( this ) } />
          <FormHelperText id="errorPassword" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 } sm={ 6 }>
          <TextField required id="rePassword" type="password" name="rePassword" label="Retaper le Mot de Pasee" fullWidth autoComplete="billing country" onChange={ checkPass.bind( this ) } />
          <FormHelperText id="errorRePassword" error={ true }></FormHelperText>
        </Grid>
        <Grid item xs={ 12 }>
          <TextField id="job" name="job" label="Fonction" fullWidth autoComplete="Job" onChange={ handleChangeFonction.bind( this ) } />
          <FormHelperText id="errorJob" error={ true }></FormHelperText>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;