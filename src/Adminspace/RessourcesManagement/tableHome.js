import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Spring } from 'react-spring/renderprops'
import Button2 from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Buttons from './buttonNavigationHome'
import InputAdornment from '@material-ui/core/InputAdornment';
import LocalMall from '@material-ui/icons/LocalMall';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Cropper from 'react-easy-crop'
import ImgDialog from '../crop/ImgDialog'
import getCroppedImg from '../crop/cropImage'
import AttachFile from '@material-ui/icons/LiveTv';

/*
|--------------------------------------------------------------------------
|           Table Ressources
|--------------------------------------------------------------------------
*/
class App extends Component
{

  state = {
    statistics: {
      total: 0,
      WithoutImage: 0,
      withImage: 0,
      inThisMonth: 0,
    },
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 21 / 9,
    imageSrc: null,
    croppedAreaPixels: null,
    croppedImage: null,
    imageBase64: null,
    image: '',
    books: [],
    editBookData:
    {
      id: '',
      titreAr: '',
      titreFR: '',
      titreENG: '',
      contenuAR: '',
      contenuFR: '',
      contenuENG: '',
      image: '',
    },
    editBookModal: false
  }
  /*
  |--------------------------------------------------------------------------
  |           Modal and State Functions
  |--------------------------------------------------------------------------
  */
  toggleNewBookModal ()
  {
    this.setState( {
      newBookModal: !this.state.newBookModal
    } );
  }
  /***************************************/
  toggleEditBookModal ()
  {
    this.setState( {
      editBookModal: !this.state.editBookModal
    } );
  }
  /***************************************/
  handleChange = prop => event =>
  {
    this.setState( { [ prop ]: event.target.value } );
  };
  /***************************************/
  handleClickShowPassword = () =>
  {
    this.setState( state => ( { showPassword: !state.showPassword } ) );
  };
  /***************************************/
  editBook ( book )
  {
    this.setState( {
      editBookData: book, editBookModal: !this.state.editBookModal
    } );
  }
  /*
  |--------------------------------------------------------------------------
  |           Crop Image Functions
  |--------------------------------------------------------------------------
  */
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
  /*
  |--------------------------------------------------------------------------
  |           Api Functions
  |--------------------------------------------------------------------------
  */
  componentWillMount ()
  {
    this._refreshBooks();
  }
  /***************************************/
  updateBook ()
  {
    this.Upload();
  }
  /***************************************/
  deleteBook ( id )
  {
    axios.delete( 'http://127.0.0.1:8000/api/deleteRessource/' + id ).then( ( response ) =>
    {
      this._refreshBooks();
    } );
  }
  /***************************************/
  _refreshBooks ()
  {
    axios.get( 'http://localhost:8000/api/showRessource' ).then( ( response ) =>
    {
      this.setState( {
        books: response.data
      } )
      var total = this.state.books.length
      this.setState( {
        statistics: {
          total,
          WithoutImage: this.state.books.filter( function ( x ) { return x.image === 'WithoutImage' } ).length,
          withImage: this.state.books.filter( function ( x ) { return x.image !== 'WithoutImage' } ).length
        }
      } )
    } );
  }
  /***************************************/
  Upload = async () =>
  {
    if ( this.state.imageSrc === null )
    {
    }
    else
    {
      /****         Generate Unique key for Picture          ****/
      let { editBookData } = this.state;
      editBookData.image = new Date().getTime().toString() + '.png';
      this.setState( { editBookData } )
      /****         Headers HTTPRequest          ****/
      let h = new Headers();
      h.append( 'Accept', 'application/text' );
      /****         Data File+Name          ****/
      const fd = new FormData();
      fd.append( 'file', await getCroppedImg( this.state.imageSrc, this.state.croppedAreaPixels ) );
      fd.append( 'name', editBookData.image );
      /****         Create Request          ****/
      let req = new Request( 'http://localhost:8080/ceedisplay/ceedisplay/src/Adminspace/php/uploadRessources.php', { method: 'POST', headers: h, mode: 'no-cors', body: fd } );
      fetch( req ).then( ( response ) => { console.log( "Response received from server" ); } )
        .catch( ( err ) => { console.log( 'ERROR:', err.message ); } );
    }
    let { contenuENG, contenuFR, titreFR, titreAr, contenuAR, titreENG, image } = this.state.editBookData;
    axios.put( 'http://127.0.0.1:8000/api/updateRessource/' + this.state.editBookData.id, { contenuENG, contenuFR, image, titreFR, titreAr, contenuAR, titreENG } )
      .then( ( response ) =>
      {
        this.setState( {
          crop: { x: 0, y: 0 },
          zoom: 1,
          aspect: 21 / 9,
          imageSrc: null,
          croppedAreaPixels: null,
          croppedImage: null,
          imageBase64: null,
          image: '',
          books: [],
          editBookData:
          {
            id: '',
            titreAr: '',
            titreFR: '',
            titreENG: '',
            contenuAR: '',
            contenuFR: '',
            contenuENG: '',
            image: '',
          },
          editBookModal: false
        } )
        this._refreshBooks();
      } );
  }
  /*
  |--------------------------------------------------------------------------
  |           Render
  |--------------------------------------------------------------------------
  */
  render ()
  {
    const { classes } = this.props;
    return (
      <div className="App container" style={ { minWidth: '100%' } }>
        <Buttons statistics={ this.state.statistics } />
        <Modal size="lg" style={ { maxWidth: '1000px', width: '1000px' } } isOpen={ this.state.editBookModal } toggle={ this.toggleEditBookModal.bind( this ) } >
          <ModalHeader toggle={ this.toggleEditBookModal.bind( this ) }>changer  l'etat  des Déchets  </ModalHeader>
          <ModalBody >
            {/*******/ }
            <FormGroup>
              <Label for="title">Titre Arabe</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.titreAr }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.titreAr = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Titre Français</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.titreFR }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.titreFR = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Titre Anglais</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.titreENG }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.titreENG = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Description Arabe</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.contenuAR } multiline={ true } rows={ 2 } rowsMax={ 2 }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.contenuAR = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Description Français</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.contenuFR } multiline={ true } rows={ 2 } rowsMax={ 2 }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.contenuFR = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <FormGroup>
              <Label for="title">Description Anglais</Label>
              <TextField style={ { width: ' 98%', textAlign: 'right' } } id="outlined-simple-start-adornment" variant="outlined" value={ this.state.editBookData.contenuENG } multiline={ true } rows={ 2 } rowsMax={ 2 }
                onChange={ ( e ) => { let { editBookData } = this.state; editBookData.contenuENG = e.target.value; this.setState( { editBookData } ); } }
                InputProps={ { startAdornment: <InputAdornment position="start"><LocalMall /></InputAdornment>, } } />
            </FormGroup>
            {/*******/ }
            <div style={ { textAlign: 'center', marginTop: '0px', marginBottom: '2px' } }>
              <input accept="images/png,images/jpg,images/jpeg," className={ classes.input } id="raised-button-file" multiple type="file" onChange={ this.onFileChange } />
              <label
                htmlFor="raised-button-file"
                style={ { marginTop: '0px', marginBottom: '0px' } }>
                <Fab raised component="span" variant="extended" color="primary" aria-label="Add" className={ classes.margin }><AttachFile className={ classes.extendedIcon } />Choisir Image</Fab>
              </label>
              { this.state.imageSrc && ( <Fragment>
                <div className="crop-container" style={ { width: '100%', height: '360px', position: 'relative' } }>
                  <Cropper image={ this.state.imageSrc } crop={ this.state.crop } zoom={ this.state.zoom } aspect={ this.state.aspect } onCropChange={ this.onCropChange } onCropComplete={ this.onCropComplete } onZoomChange={ this.onZoomChange } />
                </div>
                <Button onClick={ this.showCroppedImage } variant="contained" color="primary" classes={ { root: classes.cropButton } }>Show Img</Button>
              </Fragment> ) }
              <ImgDialog img={ this.state.croppedImage } onClose={ this.handleClose } />
            </div>
            {/*******/ }
          </ModalBody>
          <ModalFooter>
            <Button2 color="primary" onClick={ this.updateBook.bind( this ) }>Update Book</Button2>{ ' ' }
            <Button2 color="secondary" onClick={ this.toggleEditBookModal.bind( this ) }>Cancel</Button2>
          </ModalFooter>
        </Modal>
        <Spring from={ { opacity: 0, marginTop: '30px' } } to={ { opacity: 1, height: '440px', marginTop: '40px', marginBottom: '20px' } } config={ { delay: 500, duration: 700 } }>{ props => (
          <Paper className={ classes.root } style={ props } id="paperContainer">
            <Table2 className={ classes.table }>
              <TableHead>
                <TableRow>
                  <CustomTableCell align="center">Titre Arabe</CustomTableCell>
                  <CustomTableCell align="center">Titre Français</CustomTableCell>
                  <CustomTableCell align="center">Image</CustomTableCell>
                  <CustomTableCell align="center">Action</CustomTableCell>
                </TableRow>
              </TableHead>
              <TableBody>{ this.state.books.map( row => (
                <TableRow className={ classes.row } key={ row.id }>
                  <CustomTableCell align="center">{ row.titreAr }</CustomTableCell>
                  <CustomTableCell align="center">{ row.titreFR }</CustomTableCell>
                  <CustomTableCell align="center">
                    <img alt='img' src={ row.image === 'WithoutImage' || !row.image ? 'images/flora/1.png' : "images/ressources/" + row.image } style={ { width: "140px", height: "70px", borderRadius: '25px' } } />
                  </CustomTableCell>
                  <CustomTableCell align="center">
                    <IconButton className='button' onClick={ this.deleteBook.bind( this, row.id ) } aria-label="Delete"><DeleteIcon /></IconButton>
                    <IconButton className='button' onClick={ this.editBook.bind( this, row ) } aria-label="Delete"><EditIcon /></IconButton>
                  </CustomTableCell>
                </TableRow> ) ) }
              </TableBody>
            </Table2>
          </Paper> ) }
        </Spring>
      </div>
    );
  }
}
/*
|--------------------------------------------------------------------------
|           Styles
|--------------------------------------------------------------------------
*/
const styles = theme => ( {
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  button: {
    margin: theme.spacing.unit,
  },
  table: {
    minWidth: '100%',
  },
  row: {
    '&:nth-of-type(odd)': { backgroundColor: theme.palette.background.default, },
  },
  container: {
    textAlign: 'center'
  },
  input: {
    display: 'none',
  },
} );
/***************************************/
const CustomTableCell = withStyles( theme => ( {
  head: {
    background: '#383234',
    color: theme.palette.common.white,
    textAlign: 'center'
  },
  body: {
    fontSize: 14,
  },
} ) )( TableCell );
/***************************************/
function readFile ( file )
{
  return new Promise( resolve =>
  {
    const reader = new FileReader()
    reader.addEventListener( 'load', () => resolve( reader.result ), false )
    reader.readAsDataURL( file )
  } )
}
/***************************************/
const A2 = withStyles( styles )( App );
export default A2


