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
            consumedEnergy: 100000,
            producedEnergy: 0,
            consumedWater: 0,
            recycledWater: 0,
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
        // Fix: include indicators
        let i = this.props.lang === 'fr' ? 0 : 1
        // // if (!x)
        // let x = 0
        let header = (
            <Header>
                <Fondation />
                <div style={{ flex: 1 }} />
                <Intellcap />
            </Header>
        )
        let elements = []
        // if (this.props.energy) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Energy.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Energy.desc}</Typography>
                    {Energy(this.state.consumedEnergy, this.state.producedEnergy, lang[i].Energy)}
                    {Remarks}
                    {/*<div style={{ height: 20 }} />*/}
                </div>
            )
        // }
        if (this.props.water) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Water.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Water.desc}</Typography>
                    {Water(this.state.consumedWater, this.state.recycledWater, lang[i].Water)}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Transport.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Transport.desc}</Typography>
                    {Transport(lang[i].Transport)}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Waste.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Waste.desc}</Typography>
                    {Waste(lang[i].Waste)}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].recyclable.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].recyclable.desc}</Typography>
                    {Recycle(lang[i].recyclable)}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[i].Faune.biodiv}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Faune.desc}</Typography>
                    {Flora(this.state.statFlora, lang[i].Faune)}
                    {/*<div style={{ height: 20 }} />*/}
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50 }} >{lang[i].Faune.desc}</Typography>
                    {Fauna(this.state.statFauna, lang[i].Faune)}
                    {Remarks}
                </div>
            )
        }
        this.setState({ elements })
    }

    componentDidMount() {
        this.getConsumedEnergy(7)
        this.getProducedEnergy(7)
        this.getConsumedWater(7)
        this.getRecycledWater(7)
    }

    componentWillReceiveProps() {
        this.setElements()
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        console.log(this.state.energy)
        return (
            <div style={{ margin: 20, borderWidth: 1, borderStyle: 'solid', borderColor: 'gray' }}>
                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie1.title1}</Typography>
                {General(lang[x].rapport)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie2.title}</Typography>
                {Identity(this.props.reference, this.props.date, this.props.period, lang[x].rapport.partie2.title3, lang[x].rapport)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].rapport.partie3.title}</Typography>
                {People(this.props.diffusion, this.props.precision, this.props.generatedby, this.props.authorizedby, lang[x].rapport)}

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].GES.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[x].GES.desc}</Typography>
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
                    {Remarks("Remarques spéciales")}
                    {/* Fix: translate "Remarques spéciales" */}
                </div>

                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Energy.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[x].Energy.desc}</Typography>
                    {Energy(this.state.consumedEnergy, this.state.producedEnergy, lang[x].Energy)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>

                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid', textAlign: 'center' }} >{lang[x].Water.title}</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20, height: 50, textAlign: 'center' }} >{lang[x].Water.desc}</Typography>
                    {Water(this.state.consumedWater, this.state.recycledWater, lang[x].Water)}
                    {Remarks("Remarques spéciales")}
                    {/*<div style={{ height: 20 }} />*/}
                </div>


                {/* {
                    this.state.elements.map((x) => {
                        return x
                    })
                } */}

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
