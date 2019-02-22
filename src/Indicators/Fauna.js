import React, { Component } from "react";
import Slider from "react-slick";
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Information from '../Charts/Information'

import Biodiv from '../Charts/Biodiv'

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
            biodiv: [],
            biostat: []
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

    getStatFauna() {
        const url = `${URL}/bio/getStatFauna.php`;
        return fetch(url)
            .then(res => res.json())
            .then((biostat) => {
                this.setState({ biostat })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    componentDidMount() {
        this.getFauna()
        this.getStatFauna()
    }

    componentWillUnmount() {
        clearTimeout(timer)
    }

    render() {
        const settings = {
            infinite: true,
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: Timers.indicItems / 100,
        }
        return (
            <div className="indicator" >
                <Identity
                    title="Indicateur de la Faune"
                    description="Description ... "
                />
                <div style={{ flexDirection: 'row', display: 'flex', padding: 5, marginTop: 5 }} >
                    <Slider {...settings} >
                        {
                            this.state.biodiv.map((x) => {
                                return (
                                    <Biodiv
                                        title={x[1]}
                                        title_ar={x[5]}
                                        image={URL + '/' + x[2]}
                                        text={x[3]}
                                        text_ar={x[6]}
                                        status={x[4]}
                                    />
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className="row-1" >
                    <div className="el-1" >
                        <Card title="Espèces à préoccupation mineur"
                            content={
                                <Information
                                    info={this.state.biostat[0]}
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
                                    info={this.state.biostat[1]}
                                    icon={"/images/splash.png"}
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Especes menacés"
                            content={
                                <Information
                                    info={this.state.biostat[2]}
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



