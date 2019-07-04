import Carousel from 're-carousel'
import React from 'react';
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import axios from 'axios';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: '100%',
  },
  margintop: { marginTop: '20px' }
} );





class ImageGridList extends React.Component
{
  state = {
    books: []
  }
  /***************************************/
  componentWillMount ()
  {
    this._refreshBooks();
  }
  /***************************************/


  _refreshBooks ()
  {



    axios.get( 'http://localhost:8000/api/faune' ).then( ( response ) =>
    {
      this.setState( {
        books: response.data


      } )

      let myJson = { Ar: {}, Fr: {} };
      for ( var k = 1; k < this.state.books.length; k++ )
      {
        var objName = 'nomAR';
        var objValue = this.state.books[ k ].nomAR;
        myJson.Ar[ objName ] = objValue;

        var objName2 = 'infoAR';
        var objValue2 = this.state.books[ k ].infoAR;
        myJson.Ar[ objName2 ] = objValue2;
      }
      for ( k = 1; k < this.state.books.length; k++ )
      {
        objName = 'nomFR';
        objValue = this.state.books[ k ].nomFR;
        myJson.Fr[ objName ] = objValue;

        objName2 = 'infoFR';
        objValue2 = this.state.books[ k ].infoFR;
        myJson.Fr[ objName2 ] = objValue2;
      }
      console.log( JSON.stringify( myJson ) );
    } );




  }
  render ()
  {
    const { classes } = this.props;


    return ( <Paper style={ { width: '100%', height: '100%', margin: 'auto', } }>
      {/* <Typography variant="h1" component="h2" gutterBottom>
      Decouvrire La Faune 
      </Typography> */}
      <Carousel loop auto widgets={ [ IndicatorDots, Buttons ] } interval={ 1000000 } >
        {/*     width: 90%;
    height: 72%;
    position: relative;
    padding-bottom: auto;
    padding-top: auto;
    margin: auto;*/}
        { this.state.books.map( tile => (

          <Grid container spacing={ 24 } align="center" justify="center" style={ { display: 'block' } } >
            <Grid item spacing={ 24 } style={ { padding: '10px', height: '50%' } } >
              <img src={ tile.image === 'WithoutImage' || !tile.image ? 'images/flora/1.png' : "images/wildlife/" + tile.image }
                alt='kk' style={ { width: '700px', height: '350px' } } />
            </Grid>

            <Grid item spacing={ 24 } style={ { height: '50%', padding: '40px' } }  >
              <Typography variant="h5" gutterBottom className={ classes.margintop } align="left">
                { tile.nomFR }
              </Typography>
              <Typography variant="h6" gutterBottom align="left">
                { tile.statuts_conservation }
              </Typography>
              <Typography variant="body1" gutterBottom align="left" style={ { textAlign: 'justify' } }>
                { tile.infoFR }
              </Typography>
            </Grid>
          </Grid>
        ) ) }
      </Carousel>
    </Paper>
    )
  }
}

export default withStyles( styles )( ImageGridList );