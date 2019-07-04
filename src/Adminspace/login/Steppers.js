import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styles from '../css/SteppersStyles'
import { steps } from '../events/eventsStepper'
import axios from 'axios'
import Cropper from 'react-easy-crop'
import ImgDialog from '../crop/ImgDialog'
import getCroppedImg from '../crop/cropImage'//import './styles.css'
import Fab from '@material-ui/core/Fab';
import AttachFile from '@material-ui/icons/LiveTv';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid';
import Table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Divider } from '@material-ui/core';
import ReactDOM from 'react-dom'



class Checkout extends React.Component
{
  state = {
    user:
    {
      email: 'hamza.abdessadki32@yahoo.fr',
      password: '123456789',
      nom: 'hamza ',
      prenom: 'hamza',
      phone: '0762554411',
      image: '',
      job: 'stagiaire',
      remail: 'hamza.abdessadki@yahoo.fr',
      rePassword: '123456789'
    },
    activeStep: 0,
    skipped: new Set(),
    image: 'WithoutImage',
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 1,
    croppedAreaPixels: null,
    croppedImage: null,
    imageBase64: null,
  };

  /**
  * @desc opens a modal window to display a message
  * @param string $msg - the message to be displayed
  * @return bool - success or failure
*/

  Upload = async () => 
  {
    const { classes } = this.props;
    if ( this.state.imageSrc === null ) { }
    else
    {   /****         Generate Unique key for Picture          ****/
      this.setState( { image: new Date().getTime().toString() + '.png' } )
      /****         Headers HTTPRequest          ****/
      let h = new Headers();
      h.append( 'Accept', 'application/text' );
      /****         Data File+Name          ****/
      const fd = new FormData();
      fd.append( 'file', await getCroppedImg( this.state.imageSrc, this.state.croppedAreaPixels ) );
      fd.append( 'name', this.state.image );
      this.setState( { imageBase64: await getCroppedImg( this.state.imageSrc, this.state.croppedAreaPixels ) } )
      /****         Create Request          ****/
      let req = new Request( 'http://localhost:8080/ceedisplay/ceedisplay/src/Adminspace/php/uploadUser.php', { method: 'POST', headers: h, mode: 'no-cors', body: fd } );
      fetch( req ).then( ( response ) => { console.log( "Response received from server" ); } ).catch( ( err ) => { console.log( 'ERROR:', err.message ); } );

    }

    /****         Insert into Database          ****/
    axios.post( 'http://localhost:8000/api/register', { nom: this.state.user.nom, prenom: this.state.user.prenom, email: this.state.user.email, telephonne: this.state.user.phone, password: this.state.user.password, fonction: this.state.user.job, validity: '1', type: 'a', image: this.state.image, } )
      .then( function ( response ) { } ).catch( function ( error ) { console.error( error ) } );

    this.sendEmail( 'New Inscription' )


    ReactDOM.render(
      <Grid style={ { width: '100%' } } container spacing={ 0 } direction="column" alignItems="center" justify="center" >
        <Grid justify="center" item xs={ 12 } id="afterAdd" style={ { width: '72%' } }>
          {/* <div style={{width: '600px', marginTop: '0px',marginBottom: '2px',marginLeft:'auto',marginRight:'auto',}}>  */ }
          <Grid container alignItems="center" justify="center" style={ { background: 'green', height: '50px', borderRadius: '25px' } }>
            <Typography variant="h6" gutterBottom className={ classes.instructions } style={ { color: 'white' } }>
              Nouvel Article Inserer
                          </Typography>
          </Grid>
          <Divider variant="middle" />
        </Grid>
        <img alt='img' style={ { borderRadius: '20px', width: '150px', display: 'block', marginLeft: 'auto', marginRight: 'auto' } } className={ classes.instructions }
          src={ this.state.imageBase64 === null ? 'images/flora/1.png' : this.state.imageBase64 } />
        <Table2 className={ classes.table }>
          <TableBody>
            <TableRow  >
              <CustomTableCell align="center">Nom</CustomTableCell>
              <CustomTableCell align="center"> { this.state.user.nom } </CustomTableCell>
            </TableRow>
            <TableRow  >
              <CustomTableCell align="center">Prenom</CustomTableCell>
              <CustomTableCell align="center"> { this.state.user.prenom } </CustomTableCell>
            </TableRow>
            <TableRow  >
              <CustomTableCell align="center">Phone</CustomTableCell>
              <CustomTableCell align="center"> { this.state.user.phone } </CustomTableCell>
            </TableRow>
            <TableRow  >
              <CustomTableCell align="center">Email</CustomTableCell>
              <CustomTableCell align="center"> { this.state.user.email } </CustomTableCell>
            </TableRow>
            <TableRow  >
              <CustomTableCell align="center">Fonction</CustomTableCell>
              <CustomTableCell align="center"> { this.state.user.job } </CustomTableCell>
            </TableRow>

          </TableBody>
        </Table2>
        <Button variant="outlined" style={ { borderRadius: '20px', marginLeft: 'auto', marginRight: 'auto' } } color="primary" className={ classes.button } >
          Ajouter un Nouveau Article
                              </Button>

      </Grid>

      , document.getElementById( "afterAdd" ) )
  }




  sendEmail ( text )
  {
    fetch( `http://localhost:5000/send-email?recipient=hamza.abdessadki@gmail.com&sender=hamza.abdessadki@gmail.com.intelcap&topic=Nouveau-Utilisateur&text=${ text }` ) //query string url
      .catch( err => console.error( err ) )
  }















  isStepSkipped ( step )
  {
    return this.state.skipped.has( step );
  }
  handleChange = prop => event =>
  {
    var user = this.state.user;
    user[ prop ] = event.target.value
    this.setState( { user } );
  };
  handleNext = () =>
  {
    const { activeStep } = this.state;
    let { skipped } = this.state;
    if ( this.isStepSkipped( activeStep ) )
    {
      skipped = new Set( skipped.values() );
      skipped.delete( activeStep );
    }
    this.setState( {
      activeStep: activeStep + 1,
      skipped,
    } );

    console.log( this.state.user )
  };
  getStepContent = ( step ) =>
  {
    const { classes } = this.props;

    switch ( step )
    {
      case 0:
        return ( <React.Fragment >
          <Typography variant="h6" gutterBottom>
            Données Personnelles
      </Typography>
          <Grid container spacing={ 24 }>
            <Grid item xs={ 12 } sm={ 4 }>
              <TextField required id="firstName" name="firstName" label="Nom" fullWidth autoComplete="fname"
                value={ this.state.user.nom } onChange={ this.handleChange( 'nom' ) } />
              <FormHelperText id="errorFirstName" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 4 }>
              <TextField required id="lastName" name="lastName" label="Prénom" fullWidth autoComplete="lname"
                value={ this.state.user.prenom } onChange={ this.handleChange( 'prenom' ) } />
              <FormHelperText id="errorLastName" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 4 }>
              <TextField required id="phone" name="phone" label="Téléphone" fullWidth
                value={ this.state.user.phone } onChange={ this.handleChange( 'phone' ) } autoComplete="billing address-line1" />
              <FormHelperText id="errorPhone" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField required id="email" name="email" label="Email" fullWidth autoComplete="billing address-level2"
                value={ this.state.user.email } onChange={ this.handleChange( 'email' ) } />
              <FormHelperText id="errorEmail" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField id="reEmail" name="reEmail" label="Retaper l'Email" fullWidth
                value={ this.state.user.remail } onChange={ this.handleChange( 'remail' ) } />
              <FormHelperText id="errorReEmail" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField required id="password" type="password" name="password" label="Mot de Passe" fullWidth autoComplete="Password"
                value={ this.state.user.password } onChange={ this.handleChange( 'password' ) } />
              <FormHelperText id="errorPassword" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <TextField required id="rePassword" type="password" name="rePassword" label="Retaper le Mot de Pasee" fullWidth autoComplete="billing country"
                value={ this.state.user.rePassword } onChange={ this.handleChange( 'rePassword' ) } />
              <FormHelperText id="errorRePassword" error={ true }></FormHelperText>
            </Grid>
            <Grid item xs={ 12 }>
              <TextField id="job" name="job" label="Fonction" fullWidth autoComplete="Job"
                value={ this.state.user.job } onChange={ this.handleChange( 'job' ) } />
              <FormHelperText id="errorJob" error={ true }></FormHelperText>
            </Grid>
          </Grid>
        </React.Fragment> )

          ;
      case 1:
        return ( <div style={ { marginTop: '0px', marginBottom: '2px' } }>
          <input accept="images/png,images/jpg,images/jpeg," className={ classes.input } id="raised-button-file" multiple type="file" onChange={ this.onFileChange } />
          <label htmlFor="raised-button-file" style={ { marginTop: '0px', marginBottom: '0px' } }>
            <Fab raised component="span" variant="extended" color="primary" aria-label="Add" className={ classes.margin }><AttachFile className={ classes.extendedIcon } />Choisir Image</Fab>
          </label>
          { this.state.imageSrc && ( <Fragment>
            <div className="crop-container" style={ { width: '100%', height: '360px', position: 'relative' } }>
              <Cropper image={ this.state.imageSrc } cropShape="round" crop={ this.state.crop } zoom={ this.state.zoom } aspect={ this.state.aspect } onCropChange={ this.onCropChange } onCropComplete={ this.onCropComplete } onZoomChange={ this.onZoomChange } />
              {/* restrictPosition={false} */ }
            </div>
            <Button onClick={ this.showCroppedImage } variant="contained" color="primary" onClick={ this.addNewArticle.bind( this ) } classes={ { root: classes.cropButton } }>Show Img</Button>
          </Fragment> ) }
          <ImgDialog img={ this.state.croppedImage } onClose={ this.handleClose } />
        </div> );

      default:
        throw new Error( 'Unknown step' );
    }
  }
  handleBack = () =>
  {
    this.setState( state => ( {
      activeStep: state.activeStep - 1,
    } ) );
  };
  /* *********************** */
  handleClose = () =>
  {
    this.setState( { croppedImage: null } )
  }
  /* *********************** */
  onFileChange = async e =>
  {
    if ( e.target.files && e.target.files.length > 0 )
    {
      const imageDataUrl = await readFile( e.target.files[ 0 ] )
      this.setState( {
        imageSrc: imageDataUrl,
        crop: { x: 0, y: 0 },
        zoom: 1,
      } )
    }
  }
  /* *********************** */

  onCropChange = crop =>
  {
    this.setState( { crop } )
  }
  /* *********************** */
  onCropComplete = ( croppedArea, croppedAreaPixels ) =>
  {
    //console.log(croppedArea, croppedAreaPixels)
    this.setState( { croppedAreaPixels } )
  }
  /* *********************** */
  onZoomChange = zoom =>
  {
    this.setState( { zoom } )
  }
  /* *********************** */
  showCroppedImage = async () =>
  {
    const croppedImage = await getCroppedImg( this.state.imageSrc, this.state.croppedAreaPixels )
    this.setState( { croppedImage } )

  }

  addNewArticle = () =>
  {
    this.setState( {

      user:
      {
        email: '',
        password: '',
        nom: '',
        prenom: '',
        phone: '',
        image: '',
        job: '',
        remail: '',
        rePassword: '123456789'
      },
      activeStep: 0,
      skipped: new Set(),
      image: 'WithoutImage',
      imageSrc: null,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 1,
      croppedAreaPixels: null,
      croppedImage: null,
      imageBase64: null,
    } )
    //ReactDOM.render(<Table />,document.getElementById("PaperTable"))
  }

  render ()
  {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (

      <main className={ classes.layout } style={ { padding: 0, margin: 0 } }>
        <Paper className={ classes.paper } style={ { width: '100%', marginTop: '10px', marginBottom: '0px', } } id="afterAdd">
          <Stepper activeStep={ activeStep } className={ classes.stepper } style={ { paddingTop: 10 } }>
            { steps.map( label => (
              <Step key={ label }>
                <StepLabel>{ label }</StepLabel>
              </Step>
            ) ) }
          </Stepper>
          <React.Fragment>
            { activeStep === steps.length ? (
              <React.Fragment>
                <div>
                  <Typography className={ classes.instructions }>
                    <h1>Merci, Vos données vont être enregistrées  </h1>
                    <h3> Vous receverez un mail de Validation  </h3>
                  </Typography>
                  <Button onClick={ this.Upload } variant="contained" color="secondary" style={ { backgroundColor: '#123456' } } className={ classes.button }>
                    Valider Vos Données
                    </Button>
                </div>
              </React.Fragment>
            ) : (
                <React.Fragment>
                  { this.getStepContent( activeStep ) }
                  <div className={ classes.buttons }>
                    { activeStep !== 0 && (
                      <Button onClick={ this.handleBack } className={ classes.button }>
                        Back
                      </Button>
                    ) }
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={ this.handleNext }
                      className={ classes.button }
                    >
                      { activeStep === steps.length - 1 ? 'Finir' : 'Suivant' }
                    </Button>
                  </div>
                </React.Fragment>
              ) }
          </React.Fragment>
        </Paper>
      </main>

    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};
function readFile ( file )
{
  return new Promise( resolve =>
  {
    const reader = new FileReader()
    reader.addEventListener( 'load', () => resolve( reader.result ), false )
    reader.readAsDataURL( file )
  } )
}

const CustomTableCell = withStyles( theme => ( {
  head: {
    background: '#383234',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
  },
  button: { marginLeft: 'auto', marginRight: 'auto' }
} ) )( TableCell );
export default withStyles( styles )( Checkout );