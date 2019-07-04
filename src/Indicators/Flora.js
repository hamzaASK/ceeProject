import Carousel from 're-carousel'
import React from 'react';
import IndicatorDots from '../Adminspace/flora/indicator-dots'
import Buttons from '../Adminspace/flora/buttons'
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'

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
        axios.get( 'http://localhost:8000/api/flore' ).then( ( response ) =>
        {
            this.setState( {
                books: response.data
            } )
        } );
    }
    render ()
    {
        const { classes } = this.props;


        return (
            <div className="indicator" style={ { width: '70%', marginLeft: 'auto', marginRight: 'auto', } }>
                <Card title='Slide Des Flores'
                    content={
                        <Carousel loop auto widgets={ [ IndicatorDots, Buttons ] } interval={ 10000 }  >

                            { this.state.books.map( tile => (

                                <Grid container spacing={ 24 } align="center" justify="center" >
                                    <Grid item spacing={ 24 } style={ { padding: '10px', height: '50%', marginTop: '10px' } } >
                                        <img src={ "images/flora/" + tile.image } alt='kk' style={ { width: '750px', height: '375px', borderRadius: '20px' } } />
                                    </Grid>

                                    <Grid item spacing={ 24 } style={ { height: '50%', paddingLeft: '20px', paddingRight: '20px' } }  >
                                        <Typography variant="h6" gutterBottom className={ classes.margintop } align="left">
                                            { tile.nomFR }
                                        </Typography>
                                        <Typography variant="h5" gutterBottom align="left">
                                            { tile.statuts_conservation }
                                        </Typography>
                                        <Typography variant="body1" gutterBottom align="left" style={ { textAlign: 'justify' } }>
                                            { tile.infoFR }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            ) ) }
                        </Carousel>


                    } />

            </div>
        )
    }
}

export default withStyles( styles )( ImageGridList );