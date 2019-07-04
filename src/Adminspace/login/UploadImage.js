import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from 'react-image-crop'
import { image64toCanvasRef, base64StringtoFile, extractImageFileExtensionFromBase64 } from '../services/ResuableUtils'
import Grid from '@material-ui/core/Grid'
import logo from '../crop-demo.gif';
import styles from '../css/UploadImageStyles'
import { withStyles } from '@material-ui/core/styles';
import { handleFilechange } from '../events/eventsInscription'
import Button from '@material-ui/core/Button'


const imageMaxSize = 207152 //bytes
const acceptedFileTypes = 'image/x-png, image/png, image/jpg, image/jpeg, image/gif'
const acceptedFileTypesArray = acceptedFileTypes.split( "," ).map( ( item ) => { return item.trim() } )

class ImgDropAndCrop extends Component
{
    constructor ( props )
    {
        super( props )
        this.imagePreviewCanvasRef = React.createRef()
        this.state = {
            imgSrc: null,
            crop: {
                x: 0,
                y: 0,
                width: 50,
                height: 50
            }
        }
    }

    verify = ( files ) =>
    {
        if ( files && files.length > 0 )
        {
            const currentFile = files[ 0 ]
            const currentFileType = currentFile.type
            const currentFileSize = currentFile.size
            if ( currentFileSize > imageMaxSize )
            {
                alert( 'L\'image est de grande taille' );
                return false
            }
            if ( !acceptedFileTypesArray.includes( currentFileType ) )
            {
                alert( 'le fichier ne correspond pas a une image' );
                return false
            }
            return true;

        }
    }


    handleOnDrop = ( files, rejectedFiles ) =>
    {
        if ( rejectedFiles && rejectedFiles.length > 0 ) { this.verify( rejectedFiles ) }
        if ( files && files.length > 0 )
        {
            const isVerified = this.verify( files )
            if ( isVerified )
            {
                const currentFile = files[ 0 ]
                const myFileItemReader = new FileReader()
                myFileItemReader.addEventListener(
                    "load", () => { this.setState( { imgSrc: myFileItemReader.result } ) }
                    , false )
                myFileItemReader.readAsDataURL( currentFile )
            }
        }
    }

    handleImageLoaded = ( Image ) =>
    {
        //console.log(Image)
    }

    handleOnCropChange = ( crop ) =>
    {
        this.setState( { crop: crop } )
    }

    handleOnCropComplete = ( crop, pixelCrop ) =>
    {
        const canvasRef = this.imagePreviewCanvasRef.current
        const imgSrc = this.state.imgSrc
        image64toCanvasRef( canvasRef, imgSrc, pixelCrop )
        var elements = document.querySelectorAll( "button" );

        elements[ 4 ].setAttribute( "style", "background-color: #c1c1c1;" );

        elements[ 4 ].setAttribute( "disabled", true );


    }
    handleDownloadClick = ( event ) =>
    {
        event.preventDefault()
        const canvasRef = this.imagePreviewCanvasRef.current
        const imageData64 = canvasRef.toDataURL( 'image/' + fileExtension )
        const fileExtension = extractImageFileExtensionFromBase64( imageData64 )
        const timestamp = new Date().getTime().toString();
        const myFilename = timestamp + "." + fileExtension
        const myNewCroppedFile = base64StringtoFile( imageData64, myFilename )
        /**************        *************/
        handleFilechange( myNewCroppedFile )
        var elements = document.querySelectorAll( "button" );
        elements[ 4 ].setAttribute( "style", "background-color: #303F9F;" );
        elements[ 4 ].disabled = false;

    }

    render ()
    {
        const { imgSrc } = this.state
        const { classes } = this.props;

        return (
            <Grid container className={ classes.container } spacing={ 24 } >   { imgSrc !== null ?
                <div className={ classes.div1 } style={ {} } >
                    <ReactCrop src={ imgSrc } crop={ this.state.crop } onImageLoaded={ this.handleImageLoaded.bind( this ) } onComplete={ this.handleOnCropComplete.bind( this ) } onChange={ this.handleOnCropChange.bind( this ) } className={ classes.ReactCrop } />
                    <h3 >Preview Canvas Crop</h3>
                    <canvas ref={ this.imagePreviewCanvasRef } className={ classes.canvas }></canvas>
                    <Button onClick={ this.handleDownloadClick.bind( this ) } style={ { backgroundColor: '#303F9F', marginTop: 10 } } variant="outlined" component="span" className="button">
                        Valider
        </Button>
                </div> :
                <Grid container alignItems="center" justify="center" >
                    <Dropzone onDrop={ this.handleOnDrop.bind( this ) } accept={ acceptedFileTypes } multiple={ false } maxSize={ imageMaxSize } className={ classes.Dropzone }  >
                        { ( { getRootProps, getInputProps } ) => (
                            <div className={ classes.div2 } { ...getRootProps() }>
                                <br></br>
                                <input { ...getInputProps() } />
                                <br></br>
                                <img src={ logo } alt="Image1" className={ classes.img }    ></img>
                            </div> ) }
                    </Dropzone>
                </Grid>
            }
            </Grid>
        )
    }
}
export default withStyles( styles )( ImgDropAndCrop );