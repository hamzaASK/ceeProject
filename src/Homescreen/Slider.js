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
            elements: [
                {
                    id: 1,
                    title: 'title 1',
                    description: "description 1",
                    picture: "/images/home/home1.png"
                },
                {
                    id: 2,
                    title: "Station d'épuration des eaux",
                    description: "description 2",
                    picture: "/images/home/home2.png"
                },
                {
                    id: 3,
                    title: "Station photovoltaique",
                    description: "description 3",
                    picture: "/images/home/home3.png"
                },
            ]
        }
    }

    render() {
        let i = this.props.lang === 'fr' ? 0 : 1
        return (
            <MDBCarousel activeItem={1} length={this.state.elements.length} showControls={true} showIndicators={true} className="z-depth-1" style={{ margin: 10, borderRadius: 10, flex: 1 }} interval={Timers.homeslides} >
                <MDBCarouselInner>
                    {
                        this.state.elements.map((x) => {
                            return (
                                <MDBCarouselItem itemId={x.id} key={x.id}>
                                    <MDBView >
                                        <img className="d-block w-100" src={x.picture} alt="slide show" style={{ borderRadius: 10 }} />
                                    </MDBView>
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
                </MDBCarouselInner>
            </MDBCarousel>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarouselPage)







// import React from "react";
// import {
//   MDBCarousel, MDBCarouselCaption, MDBCarouselInner,
//   MDBCarouselItem, MDBView, MDBMask
// } from
//   "mdbreact";

// import { Timers } from '../Settings/Timers'

// const CarouselPage = () => {
//   return (
//     <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1" style={{ margin: 10, borderRadius: 10 }} interval={Timers.homeslides} >
//       <MDBCarouselInner>
//         <MDBCarouselItem itemId="1">
//           <MDBView >
//             <img className="d-block w-100" src="/images/home/home1.png" alt="First slide" style={{ borderRadius: 10 }} />
//             {/* <MDBMask overlay="black-light" style={{ borderRadius: 10 }} /> */}
//           </MDBView>
//           {/* <MDBCarouselCaption>
//             <h3 className="h3-responsive" style={{ backgroundColor: 'rgba(240, 240, 240, 0.7)', borderRadius: 50, color: '#005475', fontWeight: '600' }}>Light mask</h3>
//           </MDBCarouselCaption> */}
//         </MDBCarouselItem>
//         <MDBCarouselItem itemId="2">
//           <MDBView>
//             <img className="d-block w-100" src="/images/home/home2.png" alt="Second slide" style={{ borderRadius: 10 }} />
//             <MDBMask overlay="black-light" style={{ borderRadius: 10 }} />
//           </MDBView>
//           {/* <MDBCarouselCaption>
//             <h3 className="h3-responsive">Strong mask</h3>
//             <p>Second text</p>
//           </MDBCarouselCaption> */}
//         </MDBCarouselItem>
//         <MDBCarouselItem itemId="3">
//           <MDBView>
//             <img className="d-block w-100" src="/images/home/home3.png" alt="Third slide" style={{ borderRadius: 10 }} />
//             <MDBMask overlay="black-slight" style={{ borderRadius: 10 }} />
//           </MDBView>
//           {/* <MDBCarouselCaption>
//             <h3 className="h3-responsive">Slight mask</h3>
//             <p>Third text</p>
//           </MDBCarouselCaption> */}
//         </MDBCarouselItem>
//       </MDBCarouselInner>
//     </MDBCarousel>
//   );
// }

// export default CarouselPage;
