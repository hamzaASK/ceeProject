import React, { Component } from "react";
import { MDBCarouselItem, MDBView, MDBCarousel, MDBCarouselInner, } from "mdbreact";

import Info from '../Charts/Information'
import axios from 'axios'
import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class CarouselPage extends Component
{

    constructor ( props )
    {
        super( props )
        this.state = {
            elements: [],
            books: [],
            booksConvert: null
        }
    }
    componentWillMount ()
    {
        this._refreshBooks();
    }
    _refreshBooks ()
    {
        axios.get( 'http://localhost:8000/api/showRessource' ).then( ( response ) =>
        {
            this.setState(
                {
                    books: response.data
                }
            )
            this.convertBooks()
        }
        );
    }

    convertBooks ()
    {
        let container = [];
        let Ar = []; let Fr = []; let An = [];
        let x = this.props.lang === 'fr' ? 0 : 1
        for ( k = 0; k < this.state.books.length; k++ )
        {
            let Value = {};
            Value[ 'id' ] = this.state.books[ k ].id
            Value[ 'title' ] = this.state.books[ k ].titreFR
            Value[ 'desc' ] = this.state.books[ k ].contenuFR
            Value[ 'picture' ] = this.state.books[ k ].image
            Fr[ k ] = Value
        }
        container[ 0 ] = Fr
        for ( var k = 0; k < this.state.books.length; k++ )
        {
            let Value = {};
            Value[ 'id' ] = this.state.books[ k ].id
            Value[ 'title' ] = this.state.books[ k ].titreAr
            Value[ 'desc' ] = this.state.books[ k ].contenuAR
            Value[ 'picture' ] = this.state.books[ k ].image
            Ar[ k ] = Value
        }
        container[ 1 ] = Ar
        for ( k = 0; k < this.state.books.length; k++ )
        {
            let Value = {};
            Value[ 'id' ] = this.state.books[ k ].id
            Value[ 'title' ] = this.state.books[ k ].titreENG
            Value[ 'desc' ] = this.state.books[ k ].contenuENG
            Value[ 'picture' ] = this.state.books[ k ].image
            An[ k ] = Value
        }
        container[ 2 ] = An
        this.setState(
            {
                booksConvert: container
            }
        )
        console.log( this.state.booksConvert[ x ] )
        console.log( lang[ x ].Ressources )
    }

    render ()
    {
        let x = this.props.lang === 'fr' ? 0 : 1
        const { booksConvert } = this.state
        const array = this.state.booksConvert === null || this.state.booksConvert === 'undefined'
            ? lang[ x ].Ressources : Array.from( this.state.booksConvert[ x ] )

        return (
            <MDBCarousel activeItem={ 1 } length={ array.length } showControls={ true } showIndicators={ true } className="z-depth-1" style={ { margin: 10, borderRadius: 10, flex: 1 } } interval={ Timers.resrcItems } >
                <MDBCarouselInner>
                    {
                        array.map( ( x ) =>
                        {
                            return (
                                <MDBCarouselItem itemId={ x.id } key={ x.id }>
                                    <MDBView >
                                        <img className="d-block w-100" src={ "images/ressources/" + x.picture } alt="slide show" style={ { borderRadius: 10 } } />
                                    </MDBView>
                                    <div style={ { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' } } >
                                        <h3 className="h3-responsive" style={ { borderRadius: 50, color: 'black', fontWeight: '600', margin: 10 } }>
                                            { x.title }
                                        </h3>
                                        <Info info={ x.desc } />
                                    </div>
                                </MDBCarouselItem>
                            )
                        } )
                    }
                </MDBCarouselInner>
            </MDBCarousel>
        );
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( CarouselPage )
