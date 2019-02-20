import React from "react";
import {
    MDBCarousel, MDBCarouselCaption, MDBCarouselInner,
    MDBCarouselItem, MDBView, MDBMask
} from
    "mdbreact";

import Info from '../Charts/Information'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
// import lang from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

const CarouselPage = () => {
    // let i = this.props.lang === 'fr' ? 0 : 1
    let elements = [
        {
            id: 1,
            title: "Station photovoltaique",
            description: "description 1",
            picture: "/images/ressources/solar.jpg"
        },
        {
            id: 2,
            title: "Station d'épuration des eaux",
            description: "description 2",
            picture: "/images/ressources/pure.jpg"
        },
        {
            id: 3,
            title: "Station photovoltaique",
            description: "description 3",
            picture: "/images/ressources/pure.jpg"
        },
    ]
    return (
        <MDBCarousel activeItem={1} length={elements.length} showControls={true} showIndicators={true} className="z-depth-1" style={{ margin: 10, borderRadius: 10, flex: 1 }} interval={Timers.resrcItems} >
            <MDBCarouselInner>
                {
                    elements.map((x) => {
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
                                        {x.title}
                                    </h3>
                                    <Info info={x.description} />
                                </div>
                            </MDBCarouselItem>
                        )
                    })
                }
                {/* <MDBCarouselItem itemId="1">
                    <MDBView >
                        <img className="d-block w-100" src="/images/ressources/solar.jpg" alt="slide show" style={{ borderRadius: 10 }} />
                        <MDBMask overlay="black-light" style={{ borderRadius: 10 }} />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive" style={{ backgroundColor: 'rgba(240, 240, 240, 0.7)', borderRadius: 50, color: 'black', fontWeight: '600' }}>Station photovoltaique</h3>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src="/images/home/home2.png" alt="Second slide" style={{ borderRadius: 10 }} />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive" style={{ backgroundColor: 'rgba(240, 240, 240, 0.7)', borderRadius: 50, color: '#005475', fontWeight: '600' }}>Light mask</h3>
                    </MDBCarouselCaption>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src="/images/home/home3.png" alt="Third slide" style={{ borderRadius: 10 }} />
                    </MDBView>
                    <MDBCarouselCaption>
                        <h3 className="h3-responsive" style={{ backgroundColor: 'rgba(240, 240, 240, 0.7)', borderRadius: 50, color: '#005475', fontWeight: '600' }}>Light mask</h3>
                    </MDBCarouselCaption>
                </MDBCarouselItem> */}
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage)
