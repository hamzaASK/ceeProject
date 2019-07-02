import Carousel from 're-carousel'
import React from 'react';
import IndicatorDots from './indicator-dots'
import Buttons from './buttons'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import axios from 'axios';



const styles = theme => ({
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
  margintop:{marginTop:'20px'}
});





  class ImageGridList extends React.Component {
    state = { 
     books:[]}
/***************************************/
componentWillMount() {
  this._refreshBooks();
}
/***************************************/

    _refreshBooks() {
      axios.get('http://localhost:8000/api/flore').then((response) => {
        this.setState({
          books: response.data
            })
      });
    }
    render(){    
      const { classes } = this.props;
      let x = this.props.lang === 'fr' ? 0 : 1

      let container = {};

      let Ar = {};
      let Fr = {};
      let An = {};

      for (var k = 1; k < this.state.books.length; k++) 
      {
          let Value = {};
          Value['nomAR']=this.state.books[k].nomAR
          Value['infoAR']=this.state.books[k].infoAR
          Ar[k]=Value
      }
      container[0]=Ar

      for ( k = 1; k < this.state.books.length; k++) 
      {
        let Value = {};
        Value['nomFR']= this.state.books[k].nomFR
        Value['infoFR']=this.state.books[k].infoFR
        Fr[k]=Value
      }
    container[1]=Fr

    for ( k = 1; k < this.state.books.length; k++) {
      let Value = {};
      Value['nomeng']=this.state.books[k].nomeng
      Value[ 'infoeng']=this.state.books[k].infoeng
      An[k]=Value
  }

  container[2]=An





// //Container
//       {
//         // Ar:
//         {
//           {//Children}
//           {//Children}
//         }
//         // Fr:
//         {
//           {//Children}
//           {//Children}
//         }
//       }


      console.log(container[x][1]);
      console.log(this.props.lang);

   
    return ( <Paper style={{width: '100%',height: '100%',margin: 'auto',}}>
      {/* <Typography variant="h1" component="h2" gutterBottom>
      Decouvrire La Faune 
      </Typography> */}
      <Carousel loop auto widgets={[IndicatorDots, Buttons]}  >
    {this.state.books.map(tile => (
      
        <Grid container spacing={24}   align="center" justify="center" >
          <Grid item spacing={24}  style={{padding: '10px',height:'50%'}} >
              <img src={tile.image==='WithoutImage' || !tile.image ? 'images/flora/1.png' : "images/flora/"+tile.image} alt='kk' style={{ width:'700px',height: '350px'}} />
          </Grid>

          <Grid item spacing={24} style={{height:'50%',padding: '20px'}}  >
            <Typography variant="h5" gutterBottom className={classes.margintop} align="left">
              {tile.nomFR}
            </Typography>
            <Typography variant="h6" gutterBottom align="left">
              {tile.statuts_conservation}
            </Typography>
            <Typography variant="body1" gutterBottom align="left" style={{textAlign: 'justify'}}>
              {tile.infoFR}
            </Typography>
          </Grid>
        </Grid>
    ))}
  </Carousel>
  </Paper>
  )}
}

export default withStyles(styles)(ImageGridList);


// import { connect } from 'react-redux'
// import { mapDispatchToProps } from '../../Settings/ReduxStore/langActions'
// import { mapStateToProps } from '../../Settings/ReduxStore/stateReducer'
//export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(ImageGridList));
