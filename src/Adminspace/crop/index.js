import React, { Fragment } from 'react'
import axios from 'axios'
//import Slider from '@material-ui/lab/Slider'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles';
import Cropper from 'react-easy-crop'
import ImgDialog from './ImgDialog'
import getCroppedImg from './cropImage'//import './styles.css'
import Fab from '@material-ui/core/Fab';
import AttachFile from '@material-ui/icons/LiveTv';


class App extends React.Component {
    
  state = {
    imageSrc: null,
    crop: { x: 0, y: 0 },
    zoom: 1,
    aspect: 4 / 3,
    croppedAreaPixels: null,
    croppedImage: null,
  }
  onCropChange = crop => {
    this.setState({ crop })
  }
 
  onCropComplete = (croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels)
    this.setState({ croppedAreaPixels })
  }

  onZoomChange = zoom => {
    this.setState({ zoom })
  }

  showCroppedImage = async () => {
    const croppedImage = await getCroppedImg(
      this.state.imageSrc,
      this.state.croppedAreaPixels
    )
    console.log(croppedImage)
    this.setState({ croppedImage })

axios({method: 'get',url: croppedImage, responseType: 'blob'})
.then(function(response){
                        var reader = new FileReader();
                        reader.readAsDataURL(response.data); 
                        reader.onloadend = function() {
                        var base64data = reader.result;
                        console.log(base64data)


    const fd =new FormData();
    fd.append('file',base64data);
    const url = 'http://localhost:8080/uploadHome.php';
    let h = new Headers();
    h.append('Accept', 'application/text'); 
    let req = new Request(url, {method: 'POST',headers: h,mode: 'no-cors',body: fd});
    fetch(req)
    .then( (response)=>{
    console.log("Response received from server");
    })
    .catch( (err) =>{
    console.log('ERROR:', err.message);
    });





   }

})
  }

  handleClose = () => {
    this.setState({ croppedImage: null })
  }
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

  render() {
    const { classes } = this.props

    return (
      <div className="App">
        
        <input
            accept="images/png,images/jpg,images/jpeg," 
            className={classes.input} 
            id="raised-button-file" 
            multiple 
            type="file" 
            onChange={this.onFileChange}
      />
      <label htmlFor="raised-button-file">
        <Fab raised component="span" variant="extended" color="primary" aria-label="Add" className={classes.margin}>
          <AttachFile className={classes.extendedIcon} />
          Choisir Video
        </Fab>
      </label>



        {this.state.imageSrc && (
          <Fragment>
            <div className="crop-container" style={{    width: '100%',height: '521px',position: 'relative'}}>
              <Cropper
               image={this.state.imageSrc}
               crop={this.state.crop}
               zoom={this.state.zoom}
               aspect={this.state.aspect}
               onCropChange={this.onCropChange}
               onCropComplete={this.onCropComplete}
               onZoomChange={this.onZoomChange}
               
              />
        </div>
        <Button
            onClick={this.showCroppedImage}
            variant="contained"
            color="primary"
            classes={{ root: classes.cropButton }}
          >
            Show Img
          </Button>
          </Fragment>
        )}
      
        <ImgDialog img={this.state.croppedImage} onClose={this.handleClose} />
      </div>
    )
  }
}

function readFile(file) {
  return new Promise(resolve => {
    const reader = new FileReader()
    reader.addEventListener('load', () => resolve(reader.result), false)
    reader.readAsDataURL(file)
  })
}
const styles = theme => ({
    cropButton: {
      flexShrink: 0,
      marginLeft: 16,
    },
    input: {
      display: 'none',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  })
export default withStyles(styles)(App);
