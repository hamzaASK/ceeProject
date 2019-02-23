import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import styled from 'styled-components'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import { connect } from 'react-redux'
import { lang } from './Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from './Settings/ReduxStore/actions'

class AirQuality extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    renderSpace(title, temp, co2, humid) { // Space could be a hallway, a room or an open area
        let x = this.props.lang === 'fr' ? 0 : 1
        var bghumid = '/images/indicators/air/humidopt.png'
        var bgtemp = '/images/indicators/air/AirQtempopt.png'
        var bgco2 = '/images/indicators/air/air60.png'
        if (co2 < 500)
            bgco2 = '/images/indicators/air/air20.png'
        if (co2 > 1000)
            bgco2 = '/images/indicators/air/air80.png'
        if (humid < 45)
            bghumid = '/images/indicators/air/humidmin.png'
        if (humid > 60)
            bghumid = '/images/indicators/air/humidmax.png'
        if (temp < 19)
            bgtemp = '/images/indicators/air/AirQtempmin.png'
        if (temp > 22)
            bgtemp = '/images/indicators/air/AirQtempmax.png'
        return (
            <div className="el-1" style={{ margin: 20 }} >
                <Card title={title}
                    content={
                        <div style={{ flex: 1, flexDirection: 'column', display: 'flex' }} >

                            <Element style={{ flexDirection: 'row', display: 'flex' }} >
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {'Température'}
                                    </Title>
                                </Element>
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {'Humidité'}
                                    </Title>
                                </Element>
                                <Element className="just">
                                    <Title className="just" style={{ backgroundColor: 'whitesmoke', borderRadius: 50, margin: 10 }}>
                                        {'GES'}
                                    </Title>
                                </Element>

                            </Element>
                            <Element className="just" big style={{ flexDirection: 'row' }} >
                                {
                                    temp !== null ?
                                        <Element className="just">
                                            <img
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bgtemp}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element />
                                }
                                {
                                    co2 !== null ?
                                        <Element className="just">
                                            <img
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bghumid}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element className="just">
                                            <img
                                                src={'/images/indicators/air/humid0.png'}
                                                className="is-icon is-active"
                                                style={{ opacity: 0.8, maxWidth: 90, maxHeight: 90, margin: 5 }}
                                            />
                                        </Element>
                                }
                                {
                                    humid !== null ?
                                        <Element className="just">
                                            <img
                                                style={{ maxWidth: 90, maxHeight: 90, margin: 5 }}
                                                src={bgco2}
                                                className="is-icon is-active"
                                            />
                                        </Element>
                                        :
                                        <Element className="just">
                                            <img
                                                src={'/images/indicators/air/air0.png'}
                                                className="is-icon is-active"
                                                style={{ opacity: 0.8, maxWidth: 90, maxHeight: 90, margin: 5 }}
                                            />
                                        </Element>
                                }
                            </Element>
                            <Element className="just" style={{ flexDirection: 'row' }} >
                                {
                                    temp !== null ?
                                        <Element className="just" big>
                                            {temp + ' °C'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                </Element>
                                }
                                {
                                    humid !== null ?
                                        <Element className="just" big>
                                            {humid + ' %'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                </Element>
                                }
                                {
                                    co2 !== null ?
                                        <Element className="just" big>
                                            {co2 + ' ppm'}
                                        </Element>
                                        :
                                        <Element className="just" big>
                                            n/a
                                        </Element>
                                }
                            </Element>
                        </div>
                    }
                />
            </div>
        )
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator">
                <Identity
                    title="Indicateur de la Qualité d'air"
                    description="L'indicateur de la qualité d'air affiche les différentes valeurs mesurées et instantanées de la température, de l'humidité et de la quantité des particules CO2 dans l'air, ainsi que les variations de ces paramétres dans les diverses périodes souhaitées"
                />
                <div className="row-1" >
                    {this.renderSpace("Extérieur", 18, 600, 55)}
                    {this.renderSpace("Mezzanine", 21, 350, 60)}
                </div>
                <div className="row-1" >
                    {this.renderSpace("Classe verte", 23, 400, null)}
                    {this.renderSpace("Salle plénière", 21, 410, 40)}
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AirQuality)

const Element = styled.div`
Flex: ${props => props.big ? '2' : '1'};
font-size: 22px;
`;

const Title = styled.div`
Flex: 1;
font-size: 22px;
`;
// background: ${props => props.big ? "palevioletred" : "white"};
// color: ${props => props.big ? "white" : "palevioletred"};
