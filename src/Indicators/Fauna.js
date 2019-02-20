import React, { Component } from "react";
// import {
//     MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView
// } from
//     "mdbreact";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
// import '../Style/slick.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Information from '../Charts/Information'

import Biodiv from '../Charts/Biodiv'

import Slick from './Slider'

import { Timers } from '../Settings/Timers'

import { connect } from 'react-redux'
import lang from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

let timer = 0

class Fauna extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            biodiv: []
        }
    }

    getFauna() {
        const url = `${URL}/bio/getFauna.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biodiv) => {
                this.setState({ biodiv })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    updateView() {
        let count = this.state.count
        count = count < this.state.biodiv.length ? this.state.count + 4 : 0
        // console.log(count)
        this.setState({ count })
        timer = setTimeout(() => this.updateView(), 20000)
    }

    componentDidMount() {
        this.getFauna()
        // this.updateView()
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    render() {
        const settings = {
            infinite: true,
            speed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
        }
        return (
            <div className="indicator" >
                <Identity
                    title="Indicateur de la faune"
                    description="Description ... "
                />
                <div style={{ flexDirection: 'row', display: 'flex', padding: 10, margin: 10 }} >
                    {/* <div style={{ flex: 1 }} />
                    {
                        this.state.biodiv.map((x, i) => {
                            let count = this.state.count
                            if (i >= count && i < count + 4) {
                                console.log('i = ' + i + ', count = ' + count)
                                return (
                                    <Biodiv
                                        title={x[1]}
                                        image={x[2]}
                                        text={x[3]}
                                        status={x[4]}
                                    />
                                )
                            }
                        })
                    }
                    <div style={{ flex: 1 }} /> */}

                    <Slider {...settings} >
                        {
                            this.state.biodiv.map((x) => {
                                return (
                                    <Biodiv
                                        title={x[1]}
                                        image={x[2]}
                                        text={x[3]}
                                        status={x[4]}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className="row-1" >
                    <div className="el-1" >
                        <Card title="Especes menacés"
                            content={
                                <Information
                                    info={"value"}
                                    icon={"/images/splash.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Especes en vulnérabilité"
                            content={
                                <Information
                                    info={"value"}
                                    icon={"/images/splash.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Préoccupation mineur"
                            content={
                                <Information
                                    info={"value"}
                                    icon={"/images/splash.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fauna)



