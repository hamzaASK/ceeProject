import React, { Component } from "react";
import {
    MDBCarouselItem, MDBView,
    MDBCarousel, MDBCarouselInner,
} from
    "mdbreact";

import Info from '../Charts/Information'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

class CarouselPage extends Component {

    // const CarouselPage = () => {
    constructor(props) {
        super(props)
        this.state = {
            // elements: [
            //     {
            //         id: 1,
            //         title: 'title 1',
            //         description: "description 1",
            //         picture: "/images/home/home1.png"
            //     },
            //     {
            //         id: 2,
            //         title: "Station d'épuration des eaux",
            //         description: "description 2",
            //         picture: "/images/home/home2.png"
            //     },
            //     {
            //         id: 3,
            //         title: "Station photovoltaique",
            //         description: "description 3",
            //         picture: "/images/home/home3.png"
            //     },
            // ],
            elements: []
        }
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <MDBCarousel activeItem={1} length={lang[x].Ressources.length} showControls={true} showIndicators={true} className="z-depth-1" style={{ margin: 10, borderRadius: 10, flex: 1 }} interval={Timers.resrcItems} >
                <MDBCarouselInner>
                    {
                        lang[x].Ressources.map((x) => {
                            return (
                                <MDBCarouselItem itemId={x.id} key={x.id}>
                                    <MDBView >
                                        <img className="d-block w-100" src={x.picture} alt="slide show" style={{ borderRadius: 10 }} />
                                        {/* <MDBMask overlay="black-light" style={{ borderRadius: 10 }} /> */}
                                    </MDBView>
                                    {/* <MDBCarouselCaption>
                                    <h3
                                        className="h3-responsive"
                                        style={{
                                            backgroundColor: 'rgba(240, 240, 240, 0.7)',
                                            borderRadius: 50, color: 'black', fontWeight: '600'
                                        }}>
                                        {x.title}
                                    </h3>
                                </MDBCarouselCaption> */}
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                                        <h3
                                            className="h3-responsive"
                                            style={{ borderRadius: 50, color: 'black', fontWeight: '600', margin: 10 }}
                                        >
                                            {x.label}
                                        </h3>
                                        <Info info={x.desc} />
                                    </div>
                                </MDBCarouselItem>
                            )
                        })
                    }
                </MDBCarouselInner>
            </MDBCarousel>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage)
