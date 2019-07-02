import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import ShortText from '@material-ui/icons/ShortText';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import Language from '@material-ui/icons/Language'
import Cropper from 'react-easy-crop'
import ImgDialog from '../crop/ImgDialog'
import getCroppedImg from '../crop/cropImage'//import './styles.css'
import Fab from '@material-ui/core/Fab';
import AttachFile from '@material-ui/icons/LiveTv';
import axios from 'axios'
import Done from '@material-ui/icons/Done'
import Table from './tableHome'
import ReactDOM from 'react-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Divider } from '@material-ui/core';


class HorizontalLinearStepper extends React.Component {
  
  state = {
    activeStep: 0,
    skipped: new Set(),
    titreFR:'',
    titreAr:'',
    titreENG:'',
    contenuAR:'',
    contenuENG:'',
    contenuFR:'',
    image:'WithoutImage',
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 21 / 9,
    croppedAreaPixels: null,
    croppedImage: null,
    imageBase64:null,
  };
/* *********************** */
isStepOptional = step => step === 1;
/* *********************** */
getStepContent=step=> {
const { classes } = this.props;  
switch (step) {
/* *********************** */
case 0:
  return <div style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
          <Grid container spacing={24} >
            <Grid item xs={12}>
              <Grid item xs={12}  >
                <Typography  component="h4" variant="headline" gutterBottom align="left"  >
                    Article Accueil
                </Typography>
              </Grid>
              <Grid item xs={12}  >
                <Typography variant="title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
                  Titre Arabe
                </Typography>
              </Grid>
              <Grid item xs={12}>
                      <TextField id="outlined-simple-start-adornment"  variant="outlined" label="Le nom de la Faune"  style={{width:'100%'}}
                      value={this.state.titreAr} onChange={this.handleChange('titreAr')} 
                        InputProps={{ startAdornment: <InputAdornment position="start"><ShortText style={{color:'#A2A2A5'}}/></InputAdornment>,}}/>
              </Grid>
              {/*******/}
              <Grid item xs={12}   >
                <Typography variant="title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
                Titre Francais
                </Typography>
              </Grid>
              <Grid item xs={12}  >
                <TextField  id="outlined-simple-start-adornment"  variant="outlined" label="Le nom de la Faune"  style={{width:'100%'}}
                    value={this.state.titreFR} onChange={this.handleChange('titreFR')}
                    InputProps={{ startAdornment: <InputAdornment position="start"><ShortText style={{color:'#A2A2A5'}}/></InputAdornment>,}}/>
              </Grid>
              {/*******/}
              <Grid item xs={12}   >
                <Typography variant="title" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
                  Titre Anglais                
                </Typography>
              </Grid>
              <Grid item xs={12}  >
              <TextField  id="outlined-simple-start-adornment"  variant="outlined" label="Le nom de la Faune"  style={{width:'100%'}}
                    value={this.state.titreENG} onChange={this.handleChange('titreENG')}
                    InputProps={{ startAdornment: <InputAdornment position="start"><ShortText style={{color:'#A2A2A5'}}/></InputAdornment>,}}/>
              </Grid>
            </Grid>
          </Grid>
        </div>;
/* *********************** */
case 1:
  return <div style={{width:'90%',marginLeft:'auto',marginRight:'auto'}}>
            <Grid container spacing={24} >
              <Grid item xs={12}>
                  <Grid item xs={12} alignContent="center" className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)} >
                    <Typography variant="body2" gutterBottom align="left"  className={classNames(classes.fullWidth, classes.textField)}>
                      Decription
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField multiline={true} rows={2} rowsMax={2} id="outlined-simple-start-adornment" className={classNames(classes.fullWidth, classes.textField)} 
                              value={this.state.contenuAR} onChange={this.handleChange('contenuAR')}
                              variant="outlined" label="Arabe" InputProps={{ startAdornment: <InputAdornment position="start">Ar-<Language /></InputAdornment>,}}/>
                  </Grid>
                  {/*******/}
                  <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
                    <Typography variant="body2" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField)} >
                      Decription
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField multiline={true} rows={2} rowsMax={2}
                      id="outlined-simple-start-adornment"className={classNames(classes.fullWidth, classes.textField)} variant="outlined" 
                      value={this.state.contenuFR} onChange={this.handleChange('contenuFR')}
                      label="Français" InputProps={{ startAdornment: <InputAdornment position="start">Fr-<Language /></InputAdornment>,}}/>
                  </Grid>
                  {/*******/}
                  <Grid item xs={12} className={classNames(classes.fullWidth, classes.textField,classes.noPaddingMargin)}   >
                    <Typography variant="body2" gutterBottom align="left" className={classNames(classes.fullWidth, classes.textField)} >
                      Decription          
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField  multiline={true} rows={2} rowsMax={2} id="outlined-simple-start-adornment"className={classNames(classes.fullWidth, classes.textField)} 
                                value={this.state.contenuENG} onChange={this.handleChange('contenuENG')}
                                variant="outlined" label="Anglais" InputProps={{ startAdornment: <InputAdornment position="start">An-<Language /></InputAdornment>,}}/>
                  </Grid>
              </Grid>
          </Grid>
        </div>;
/* *********************** */
case 2:
  return  <div style={{    marginTop: '0px',marginBottom: '2px'}}>
            <input accept="images/png,images/jpg,images/jpeg," className={classes.input}  id="raised-button-file"  multiple type="file" onChange={this.onFileChange}/>
            <label htmlFor="raised-button-file" style={{    marginTop: '0px',marginBottom: '0px'}}>
              <Fab raised component="span" variant="extended" color="primary" aria-label="Add" className={classes.margin}><AttachFile className={classes.extendedIcon} />Choisir Image</Fab>
            </label>
            {this.state.imageSrc && ( <Fragment>
                                          <div className="crop-container" style={{    width: '100%',height: '360px',position: 'relative'}}>
                                            <Cropper image={this.state.imageSrc} crop={this.state.crop} zoom={this.state.zoom} aspect={this.state.aspect} onCropChange={this.onCropChange}  onCropComplete={this.onCropComplete} onZoomChange={this.onZoomChange}/>
                                            {/* restrictPosition={false} */}
                                          </div>
                                          <Button onClick={this.showCroppedImage} variant="contained" color="primary" classes={{ root: classes.cropButton }}>Show Img</Button>
                                        </Fragment>)}
              <ImgDialog img={this.state.croppedImage} onClose={this.handleClose} />
          </div>
/* *********************** */
default:
  return 'Unknown step';
  }
}

/* *********************** */
handleNext = () => {
  const { activeStep } = this.state;
  let { skipped } = this.state;
  if (this.isStepSkipped(activeStep)) {
    skipped = new Set(skipped.values());
    skipped.delete(activeStep);
  }
  this.setState({
    activeStep: activeStep + 1,
    skipped,
  });
};
/* *********************** */
handleChange = prop => event => {
  this.setState({ [prop]: event.target.value });
};
/* *********************** */
handleBack = () => {
  this.setState(state => ({
    activeStep: state.activeStep - 1,
  }));
};
/* *********************** */
handleSkip = () => {
  const { activeStep } = this.state;
  if (!this.isStepOptional(activeStep)) {
    // You probably want to guard against something like this,
    // it should never occur unless someone's actively trying to break something.
    throw new Error("You can't skip a step that isn't optional.");
  }
  this.setState(state => {
    const skipped = new Set(state.skipped.values());
    skipped.add(activeStep);
    return {
      activeStep: state.activeStep + 1,
      skipped,
    };
  });
};
/* *********************** */
handleReset = () => {
  this.setState({
    activeStep: 0,
  });
};
/* *********************** */
isStepSkipped(step) {
  return this.state.skipped.has(step);
}
/* *********************** */
onCropChange = crop => {
  this.setState({ crop })
}
/* *********************** */
onCropComplete = (croppedArea, croppedAreaPixels) => {
  //console.log(croppedArea, croppedAreaPixels)
  this.setState({ croppedAreaPixels })
}
/* *********************** */
onZoomChange = zoom => {
  this.setState({ zoom })
}
/* *********************** */
showCroppedImage = async () => {
  const croppedImage = await getCroppedImg(this.state.imageSrc,this.state.croppedAreaPixels)   
  this.setState({ croppedImage })
                  
}



/* *********************** */
Upload = async () => 
{
    const { classes } = this.props;  
    if(this.state.imageSrc===null)
    {
      /****         Generate Unique key for Picture          ****/
      console.log(1)
    }
    else
    {
    /****         Generate Unique key for Picture          ****/
    this.setState({ image:new Date().getTime().toString()+'.png' })

    /****         Headers HTTPRequest          ****/
    let h = new Headers();
    h.append('Accept', 'application/text'); 

    /****         Data File+Name          ****/
    const fd =new FormData();
    fd.append('file',await getCroppedImg(this.state.imageSrc,this.state.croppedAreaPixels));
    fd.append('name',this.state.image );
    this.setState({imageBase64:await getCroppedImg(this.state.imageSrc,this.state.croppedAreaPixels)})

    /****         Create Request          ****/
    let req = new Request('http://localhost:8080/ceedisplay/ceedisplay/src/Adminspace/php/uploadHome.php',{method: 'POST',headers: h,mode: 'no-cors',body: fd});
    fetch(req).then( (response)=>{console.log("Response received from server");})
                .catch( (err) =>{console.log('ERROR:', err.message);});
  
                console.log(3)

    }
    console.log(this.state)

    /****         Insert into Database          ****/
    axios.post('http://localhost:8000/api/post', 
                {
                    titreFR:this.state.titreFR,titreAr:this.state.titreAr,titreENG:this.state.titreENG,
                    contenuAR:this.state.contenuAR,contenuENG:this.state.contenuENG,contenuFR:this.state.contenuFR,
                    image:this.state.image,
                }).then(function (response) {
                  console.log(response.data)
                }).catch(function (error){console.error(error)});
                console.log(3)

                document.getElementById("buttonUpload").style.display = "none";
                document.getElementById("buttonReset").style.display = "none";


    ReactDOM.render(<div style={{width: '600px', marginTop: '0px',marginBottom: '2px',marginLeft:'auto',marginRight:'auto' }}> 
                      <SnackbarContent className={classes.snackbar} variant="success"  message={'Ajouter'} 
                        Style={{marginRight: 'auto',marginLeft: 'auto',}}>
                      </SnackbarContent>
                      <Divider variant="middle" />
                      <Done style={{width:'50px',height:'50px'}}/>
                      <Typography variant="h6" gutterBottom className={classes.instructions} >
                        {this.state.titreFR} 
                      </Typography>
                      <Divider variant="middle" />
                        <img alt="img1" style={{borderRadius: '20px',width:'400px',display:'block',marginLeft:'auto',marginRight:'auto'}} className={classes.instructions} 
                          src={this.state.imageBase64===null?'images/flora/1.png':this.state.imageBase64}/>
                      <Button variant="outlined" color="primary" className={classes.button} onClick={this.addNewArticle.bind(this)}>
                        Ajouter un Nouveau Article
                      </Button>
                     </div>
                        
                        
                        ,document.getElementById("afterAdd"))
}



/* *********************** */
handleClose = () => {
  this.setState({ croppedImage: null })
}
/* *********************** */
onFileChange = async e => {
  if (e.target.files && e.target.files.length > 0) {
    const imageDataUrl = await readFile(e.target.files[0])
    this.setState({
      imageSrc: imageDataUrl,
      crop: { x: 0, y: 0 },
      zoom: 1,
    })
  }
}
/* *********************** */
newPublicationHome=()=>{
 ReactDOM.render(<Table />,document.getElementById("PaperTable"))
 }
 addNewArticle=()=>{
   this.setState({
   
      activeStep: 0,
      skipped: new Set(),
      titreFR:'',
      titreAr:'',
      titreENG:'',
      contenuAR:'',
      contenuENG:'',
      contenuFR:'',
      image:'',
      imageSrc: null,
      crop: { x: 0, y: 0 },
      zoom: 1,
      aspect: 21 / 9,
      croppedAreaPixels: null,
      croppedImage: null,
      imageBase64:null,
   })
   //ReactDOM.render(<Table />,document.getElementById("PaperTable"))
  }
  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div style={{height:'100%'}}> 
      {/* <Button onClick={this.newPublicationHome.bind(this)}><ArrowBack /></Button> */}
      <div className={classes.root}>
        
        <Stepper activeStep={activeStep} style={{  backgroundColor:'#E8E8E8',borderRadius: '30px',    paddingTop: '10px',paddingBottom: '10px'}}>
          {steps.map((label, index) => {
            const props = {};
            const labelProps = {};
            if (this.isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">Optional</Typography>;
            }
            if (this.isStepSkipped(index)) {
              props.completed = false;
            }
            return (
              <Step key={label} {...props}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div style={{height: '100%', marginTop: '0px',marginBottom: '2px' }}>
          {activeStep === steps.length ? (
            <div style={{height: '100%', marginTop: '0px',marginBottom: '2px',display:'block', }}>
              
              <div style={{ marginTop: '0px',marginBottom: '2px',display:'block', }} id="afterAdd">
                <Typography className={classes.instructions} id="message" variant="h6" gutterBottom>
                  Veuillez Confirmer Vos Donnees Pour les Insérer
                </Typography>
              </div>
              <Button style={{width:'200px'}} onClick={this.handleReset} className={classes.button} id="buttonReset">
                Retour
              </Button>
              <Button onClick={this.Upload} variant="contained" color="primary" id="buttonUpload" >
                  Confirmer
            </Button>
            </div>
          ) : (
            <div style={{ marginTop: '0px',marginBottom: '2px' }}>
              <Typography className={classes.instructions}>{this.getStepContent(activeStep)}</Typography>
              <div style={{ marginTop: '0px',marginBottom: '2px' }}>
                <Button
                  disabled={activeStep === 0}
                  onClick={this.handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {this.isStepOptional(activeStep) && (
                  <Button variant="contained" color="primary" onClick={this.handleSkip} className={classes.button} >
                    Skip
                  </Button>
                )}
                <Button variant="contained" color="primary" onClick={this.handleNext} className={classes.button}>
                  {activeStep === steps.length - 1 ? 'Finir' : 'Suivant'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      </div>
    );
  }
}

HorizontalLinearStepper.propTypes = {
  classes: PropTypes.object,
};


const styles = theme => ({
  root: {
    height: '94%',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor:'#F8F8F8',
    borderRadius: '30px'
    
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  fullWidth: {
    width: "99%"
  },
  textField: {
    flexBasis: 200,
    color: '#707174'
  },
  marginTop: {
    marginTop: '20px',
  },
  textAlign:{    textAlign: 'Left',padding:0,margin:0},
  noPaddingMargin: {
    marginTop: '10px',marginBottom: '10px',
    paddingTop: '10px',paddingBottom: '10px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  margin: {
    margin: '2px',
  },
  cropButton: {
    flexShrink: 0,
    marginLeft: 16,
  },
  input: {
    display: 'none',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
    marginTop: '2px',marginBottom: '2px',
    paddingTop: '2px',paddingBottom: '2px',
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

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}
function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}
export default withStyles(styles)(HorizontalLinearStepper);