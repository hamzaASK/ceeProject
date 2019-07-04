import React, { Component } from 'react'
import 'react-image-crop/dist/ReactCrop.css';
import Grid from '@material-ui/core/Grid'
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
//import AttachFile from '@material-ui/icons/AttachFile';
import AttachFile from '@material-ui/icons/LiveTv';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
const theme = createMuiTheme( {
  palette: {
    primary: green,
  },
  typography: { useNextVariants: true },
} );


class Upload extends Component
{
  constructor ( props )
  {
    super( props )
    this.imagePreviewCanvasRef = React.createRef()
    this.state = {
      video: null,
      titre: ''
    }
  }

  handleOnUploadVideo = ( event ) =>
  {
    this.setState( { video: event.target.files[ 0 ] } )
    console.log( this.state.video )
  }

  _onChange = ( event ) =>
  {
    this.setState( { titre: event.target.value } )
    console.log( this.state.titre )
  }

  onFileChange = async e =>
  {
    if ( e.target.files && e.target.files.length > 0 )
    {
      this.setState( {
        video: e.target.files[ 0 ],

      } )
      console.log( this.state.video )
    }
  }
  addVideo = ( name ) =>
  {
    const fd = new FormData();
    fd.append( 'titre', this.state.titre );
    fd.append( 'video', name );
    const url = 'http://localhost:8000/api/addvideo';
    let h = new Headers();
    h.append( 'Accept', 'application/text' );
    let req = new Request( url, { method: 'POST', headers: h, mode: 'no-cors', body: fd } );
    fetch( req ).then( ( response ) => { console.log( "Response received from server  " + response ); } )
      .catch( ( err ) => { console.log( 'ERROR:', err.message ); } );
    // console.log(e.target.files[0])
  }

  //http://localhost:8000/api/addvideo
  handleClick = () =>
  {
    const fd = new FormData();
    let name = new Date().getTime().toString() + '.mp4';
    fd.append( 'video', this.state.video );
    fd.append( 'name', name );
    const url = 'http://localhost:8080/ceedisplay/ceedisplay/src/Adminspace/php/uploadVideo.php';
    let h = new Headers();
    h.append( 'Accept', 'application/text' );
    let req = new Request( url, { method: 'POST', headers: h, mode: 'no-cors', body: fd } );
    fetch( req ).then( ( response ) => { console.log( "Response received from server" ); } )
      .catch( ( err ) => { console.log( 'ERROR:', err.message ); } );
    this.addVideo( name );
  }


  render ()
  {
    const { classes } = this.props;

    return (
      <Grid style={ { width: '100%' } } containerspacing={ 0 } direction="column" alignItems="center" justify="center">
        <Grid justify="center" item xs={ 12 } id="afterAdd" style={ { width: '72%', marginRight: 'auto', marginLeft: 'auto' } } >
          <MuiThemeProvider theme={ theme }>
            <Grid item xs={ 12 }>
              <InputLabel shrink htmlFor="bootstrap-input" className={ classes.bootstrapFormLabel } style={ { textAlign: 'left' } }>
                Titre
            </InputLabel>
              <TextField style={ { width: ' 98%' } } onChange={ this._onChange.bind( this ) } className={ classes.margin } label="" variant="outlined" id="mui-theme-provider-outlined-input" />
            </Grid>

            <Grid item xs={ 12 } direction="row" justify="center" alignItems="center">
              <Fab raised component="span" variant="extended" style={ { background: 'green', color: '#eaeaea' } } aria-label="Add" className={ classes.margin } onClick={ this.handleClick.bind( this ) }>
                <CloudUploadIcon className={ classes.extendedIcon } />
                Upload Video
            </Fab>
              <input onChange={ this.onFileChange } accept="video/mp4,video/ogv,video/webm" className={ classes.input } id="raised-button-file" multiple type="file" />
              <label htmlFor="raised-button-file">
                <Fab raised component="span" variant="extended" style={ { background: 'green', color: '#eaeaea' } } aria-label="Add" className={ classes.margin } onChange={ this.handleOnUploadVideo.bind( this ) }>
                  <AttachFile className={ classes.extendedIcon } />
                  Choisir Video
              </Fab>
              </label>
            </Grid>

          </MuiThemeProvider>

        </Grid>
      </Grid>

    )
  }
}
const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[ 500 ],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[ 500 ],
    },
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: purple[ 500 ],
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
    transition: theme.transitions.create( [ 'border-color', 'box-shadow' ] ),
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
    ].join( ',' ),
    '&:focus': {
      borderRadius: 4,
      background: '#383234',
      boxShadow: '0 0 0 0.2rem rgba(0,255,0,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 25,
    textAlign: 'left',
    display: 'table-cell',
    paddingLeft: '10px'
  },
  button: {
    margin: theme.spacing.unit,
    width: "200px"
  },
  input: {
    display: 'none',
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  margin: {
    margin: theme.spacing.unit,
  },
} );


// function readFile(file) {
//   return new Promise(resolve => {
//     const reader = new FileReader()
//     reader.addEventListener('load', () => resolve(reader.result), false)
//     reader.readAsDataURL(file)
//   })
// }

export default withStyles( styles )( Upload );