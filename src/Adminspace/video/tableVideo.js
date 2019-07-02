import React, { Component } from 'react';
import axios from 'axios';
import {FormGroup, Label, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Spring } from 'react-spring/renderprops'
import Button2 from '@material-ui/core/Button';
import 'react-image-crop/dist/ReactCrop.css';
import Paper from '@material-ui/core/Paper';
import Buttons from './buttonNavigationVideo'
import Fab from '@material-ui/core/Fab';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import AttachFile from '@material-ui/icons/LiveTv';
import purple from '@material-ui/core/colors/purple';
/************************************** */

import Table2 from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

// const imageMaxSize =207152000 //bytes
// const acceptedFileTypes='image/x-png, image/png, image/jpg, image/jpeg, image/gif'
// const acceptedFileTypesArray =acceptedFileTypes.split(",").map((item)=>{return item.trim()})

class App extends Component {
    constructor(props){
        super(props)
        this.imagePreviewCanvasRef=React.createRef()
    }
  state = { 
            statistics:{ 
              total:0,
              WithoutImage:0,
              withImage:0,
              inThisMonth:0,
            },
            books: [],
            newBookData: {
              video:null,
              titre:''
            },
            editBookData: {
              id: '',
              video:null,
              titre:''
            },
            newBookModal: false,
            editBookModal: false,                
            video:null,
            titre:''
            }
        



_onChange=(event)=>{
this.setState({titre:event.target.value})
//console.log(this.state.titre)
}

addVideo = ()=>{
const fd =new FormData();
const url = 'http://localhost:8000/api/addvideo';
let h = new Headers();
let req = new Request(url, {method: 'POST',headers: h,mode: 'no-cors',body: fd});

fd.append('titre',this.state.titre);
fd.append('videoName',this.state.video.name);

h.append('Accept', 'application/text'); 
fetch(req).then( (response)=>{console.log("Response received from server  "+response);})
.catch( (err) =>{console.log('ERROR:', err.message);});
// console.log(e.target.files[0])
}

//http://localhost:8000/api/addvideo
handleClick = ()=>{
const fd =new FormData();
const url = 'http://localhost:8080/ReactProjects/ceedisplay/src/Adminspace/php/uploadVideo.php';
let h = new Headers();
let req = new Request(url, {method: 'POST',headers: h,mode: 'no-cors',body: fd});

fd.append('image',this.state.video,this.state.video.name);
h.append('Accept', 'application/text'); 
fetch(req).then( (response)=>{console.log("Response received from server");})
.catch( (err) =>{console.log('ERROR:', err.message);});
this.addVideo();
}

  componentWillMount() {
    this._refreshBooks();
  }
  toggleNewBookModal() {
    this.setState({
      newBookModal: ! this.state.newBookModal
    });
  }
  toggleEditBookModal() {
    this.setState({
      editBookModal: ! this.state.editBookModal
    });
  }
  
  updateBook() {
    let { titre } = this.state.editBookData;
    let videoName
    this.state.editBookData.video.name==null? videoName= this.state.editBookData.video.name: videoName=this.state.editBookData.video.name;
    // console.log("videoName"+videoName)
    // console.log( this.state.editBookData)
    
    axios.put('http://localhost:8000/api/updatemulti' + this.state.editBookData.id, {titre,videoName})
    .then((response) => {
      this._refreshBooks();
      this.setState({
        editBookModal: false, editBookData: { id: '', title: '',contenuENG:'',contenuFR:'',image:'',titreFR:'',titreAr:'',contenuAR:'',titreENG:'', }
      })
    });
  }
  editBook(book) {
    this.setState({
      editBookData:book, editBookModal: ! this.state.editBookModal
    });

  }
  deleteBook(id) {
    axios.delete('http://localhost:8000/api/destroymulti/' + id).then((response) => {
      this._refreshBooks();
    });
  }
  _refreshBooks() {
    axios.get('http://localhost:8000/api/showvideo').then((response) => {
      this.setState({
        books: response.data
      })
      var total=this.state.books.length
      this.setState({statistics:{
        total,
        WithoutImage:this.state.books.filter(function(x){return x.image==='WithoutImage'}).length,
        withImage:this.state.books.filter(function(x){return x.image!=='WithoutImage'}).length
      }})

    });
  }
 
  handleOnUpdateVideo=(event)=>{
    this.setState({ editBookData:{video:event.target.files[0]} })    
   // console.log(this.state.editBookData)
}




  render() {
     
  
   
      const { classes } = this.props;
    return (
      <div className="App container" style={{    minWidth: '100%'}}>
      <Buttons  statistics={this.state.statistics} />
      <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)}>
        <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new book</ModalHeader>
        <ModalBody>
        </ModalBody>
      </Modal>
{/*        */}
      <Modal isOpen={this.state.editBookModal} toggle={this.toggleEditBookModal.bind(this)} >
        <ModalHeader toggle={this.toggleEditBookModal.bind(this)}>changer  l'etat  de  votre  utilisateur</ModalHeader>
        <ModalBody >
        <FormGroup>
            <Label for="rating">Rating</Label>
            <video style={{width:"100%"}}  src={"videos/"+this.state.editBookData.nom} autoPlay onEnded={this.handleEnded}/>
        </FormGroup>        
        <FormGroup style={{marginLeft: 'auto',marginRight: 'auto'}} alignItems="center" justify="center">
              <Fab raised component="span" variant="extended" color="primary" alignItems="center" justify="center" aria-label="Add" className={classes.margin} onClick={this.handleClick.bind(this)}>
                <CloudUploadIcon className={classes.extendedIcon} />
                Upload Video
              </Fab>
            <input
                  accept="video/mp4,video/ogv,video/webm" className={classes.input} id="raised-button-file" 
                  multiple type="file" onChange={this.handleOnUpdateVideo.bind(this)}
            />
            <label htmlFor="raised-button-file" alignItems="center" justify="center">
              {/* <Button raised component="span" className={classes.button}>
                Upload
              </Button> */}
              <Fab raised alignItems="center" justify="center" component="span" variant="extended" color="primary" aria-label="Add" className={classes.margin}>
                <AttachFile className={classes.extendedIcon} />
                Choisir Video
              </Fab>
            </label>            
        </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button2 color="primary" onClick={this.updateBook.bind(this)}>Update Book</Button2>{' '}
          <Button2 color="secondary" onClick={this.toggleEditBookModal.bind(this)}>Cancel</Button2>
        </ModalFooter>
      </Modal>
{/*        */}
      <Spring      from={{opacity:0,marginTop: '20px'}} to={{opacity:1,height: '460px',marginTop: '40px',marginBottom: '20px' }} config={{delay:1000,duration:700}}>
        {props=>(
        <Paper className={classes.root} style={props}>
        <Table2 className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Identifiant</CustomTableCell>
              <CustomTableCell align="center">Titre</CustomTableCell>
              <CustomTableCell align="center">Video</CustomTableCell>
              <CustomTableCell align="center">Actions</CustomTableCell>
            </TableRow>
          </TableHead>
        <TableBody>
        {this.state.books.map(row => (
            <TableRow className={classes.row} key={row.id}>
              <CustomTableCell  align="center">{row.id}</CustomTableCell>
              <CustomTableCell align="center">{row.titre}</CustomTableCell>
              <CustomTableCell align="center">
              <video style={{width:"140px",height:"70px",borderRadius:'25px'}}  src={"videos/"+row.video} autoPlay muted onEnded={this.handleEnded}/>
              </CustomTableCell>
              <CustomTableCell align="center">
                    <IconButton className='button' onClick={this.deleteBook.bind(this, row.id)} aria-label="Delete">
                            <DeleteIcon />
                    </IconButton>
                    <IconButton className='button' onClick={this.editBook.bind(this, row)} aria-label="Delete">
                            <EditIcon />
                    </IconButton> 
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table2>
      </Paper>
                      )}
</Spring>
      </div>
    );
  }
}

const CustomTableCell = withStyles(theme => ({
  head: {
     background:'#383234'  ,
    color: theme.palette.common.white,
    textAlign:'center'
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    fab:{     background:'#383234'  },
    table: {
      minWidth: '100%',

    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
    ReactCrop: {
        margingTop:'10px',
        textAlign: 'center',
        display: 'flex', 
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        border: '5px dashed #B2B5B7'
},
container: {
textAlign: 'center'
},
div1: {
marginLeft: 'auto',
marginRight: 'auto'
},
canvas: {
textAlign: 'center',
display: 'none',  
justifyContent:'center', 
alignItems:'center',
height:'150px',  
width: '150px',
marginLeft: 'auto',
marginRight: 'auto',
},
Dropzone: {
display: 'flex',  
justifyContent:'center', 
alignItems:'center',
},
img: {
display: 'flex',  
justifyContent:'center', 
alignItems:'center',
height:'150px' , 
width: '97%', 
padding: '10px', 
borderRadius: '50px'
},
div2: {
display: 'flex',  
justifyContent:'center', 
alignItems:'center',
height:'300px' , 
width: '600px',
border: '5px dashed #B2B5B7', 
padding: '10px', 
borderRadius: '50px'
},
ReactCrop__image: {

    width: '500px'
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
  button: {
    margin: theme.spacing.unit,
    width:"200px"
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

  });

  const A12 = withStyles(styles)(App);
  export default A12
  