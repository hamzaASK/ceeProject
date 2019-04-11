import React, { Component } from 'react';
import { URL } from '../Settings/Server'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import {
    Identity, People, General, Remarks, Waste, Recycle,
    Water, Energy, Fauna, Flora, Carbon, Transport
} from './Details'

class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedEnergy: 654321,
            producedEnergy: 567890,
            consumedWater: 987654,
            recycledWater: 543210,
            Transport: [],
            waste: 0,
            statFauna: [0, 1, 6],
            statFlora: [0, 2, 9],
            elements: []
        }
    }

    getConsumedEnergy(days) {
        const url = `${URL}/energy/getConsumedEnergy.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedEnergy: 0 })
                } else {
                    this.setState({ consumedEnergy: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getProducedEnergy(days) {
        const url = `${URL}/energy/getProducedEnergy.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ producedEnergy: 0 })
                } else {
                    this.setState({ producedEnergy: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getConsumedWater(days) {
        const url = `${URL}/water/getConsumedWater.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedWater: 0 })
                } else {
                    this.setState({ consumedWater: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getRecycledWater(days) {
        const url = `${URL}/water/getRecycledWater.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ recycledWater: 0 })
                } else {
                    this.setState({ recycledWater: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    setElements() {
        let x = this.props.lang === 'fr' ? 0 : 1
        let header = (
            <Header>
                <Fondation />
                <div style={{ flex: 1 }} />
                <Intellcap />
            </Header>
        )
        let elements = []
        if (this.props.energy) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Energy.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Energy.desc}</Typography>
                    {Energy(this.state.consumedEnergy, this.state.producedEnergy, lang[x].Energy)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.water) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Water.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Water.desc}</Typography>
                    {Water(this.state.consumedWater, this.state.recycledWater, lang[x].Water)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.transport) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Transport.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Transport.desc}</Typography>
                    {Transport(lang[x].Transport)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.waste) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Waste.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Waste.desc}</Typography>
                    {Waste(lang[x].Waste)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.recycle) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].recyclable.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].recyclable.desc}</Typography>
                    {Recycle(lang[x].recyclable)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        }
        if (this.props.biodiv) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Faune.biodiv}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Faune.desc}</Typography>
                    {Flora(this.state.statFlora, lang[x].Faune)}
                    {/*<div style={{ height: 20 }} />*/}
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[x].Faune.desc}</Typography>
                    {Fauna(this.state.statFauna, lang[x].Faune)}
                    {Remarks}
                </div>
            )
        }
        this.setState({ elements })
    }

    // componentDidMount() {
    //     this.getConsumedEnergy(7)
    //     this.getProducedEnergy(7)
    //     this.getConsumedWater(7)
    //     this.getRecycledWater(7)
    // }

    componentWillReceiveProps() {
        this.setElements()
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div style={{ margin: 20, borderWidth: 1, borderStyle: 'solid', borderColor: 'gray' }}>
                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >Information général sur le rapport</Typography>
                {General}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >Identité du rapport</Typography>
                {Identity(this.props.reference, this.props.date, this.props.period, this.props.place)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >Diffusion</Typography>
                {People(this.props.diffusion, this.props.precision, this.props.generatedby, this.props.authorizedby)}

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >Radar des performances</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement</Typography>
                    {Carbon(
                        Math.round((this.state.consumedEnergy / 1000 - this.state.producedEnergy / 1000) * 0.784 * 10) / 10,
                        Math.round((this.state.consumedWater / 1000 - this.state.recycledWater / 1000) * 0.5 * 10) / 10,
                        0,
                        0,
                        100,
                        [
                            lang[x].GES.indic_1.Element_1.label,
                            lang[x].GES.indic_1.Element_2.label,
                            lang[x].GES.indic_1.Element_3.label,
                            lang[x].GES.indic_1.Element_4.label,
                            lang[x].GES.indic_1.Element_5.label
                        ]

                        // Fix: Autres : Construction du batiment, les effets benefiques des espaces verts...
                        // Fix: water to CO2 coef

                    )}
                    {Remarks(lang[1].title)}
                </div>

                {
                    this.state.elements.map((x) => {
                        return x
                    })
                }

            </div >
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Report)

const Header = styled.div`
margin: 10px;
display: flex;
flex-direction: row;
height: 80px;
width: inherit;
`;

const Intellcap = styled.div`
height: 60px;
width: 180px;
margin: 10px;
background-image: url(/images/intellcapx.png);
background-position: 0 0;
background-size: 100% 100%;
`;

const Fondation = styled.div`
height: 60px;
width: 200px;
margin: 10px;
background-image: url(/images/fondation.png);
background-position: 0 0;
background-size: 100% 100%;
`;
