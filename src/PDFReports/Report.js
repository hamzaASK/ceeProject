import React, { Component } from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

import {
    Identity, People, General, Remarks, Waste, Recycle,
    Water, Energy, Fauna, Flora, Carbon, Transport
} from './Details'

import { URL } from '../Settings/Server'

export default class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedEnergy: 8,
            producedEnergy: 4,
            consumedWater: 6,
            recycledWated: 5,
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

    // addHeader() {
    //     let elements = []
    //     let length = this.state.elements.length
    //     // if (length % 2 === 0) {
    //     elements.push(
    //     )
    //     // }
    //     this.setState({ elements })
    // }

    setElements() {
        let header = (
            <Header>
                <Intellcap />
                <div style={{ flex: 1 }} />
                <Fondation />
            </Header>
        )
        let elements = []
        if (this.props.energy) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des énergies</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >Energies description ...</Typography>
                    {Energy(this.state.consumedEnergy, this.state.producedEnergy)}
                    {Remarks}
                    <div style={{ height: 50 }} />
                </div>
            )
        }
        if (this.props.water) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des Eaux</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Water(this.state.consumedWater, this.state.recycledWated)}
                    {Remarks}
                    <div style={{ height: 50 }} />
                </div>
            )
        }
        if (this.props.transport) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de Transport</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Transport}
                    {Remarks}
                    <div style={{ height: 50 }} />
                </div>
            )
        }
        if (this.props.waste) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des Déchets</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Waste}
                    {Remarks}
                    <div style={{ height: 50 }} />
                </div>
            )
        }
        if (this.props.recycle) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de Recyclage</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Recycle}
                    {Remarks}
                    <div style={{ height: 50 }} />
                </div>
            )
        }
        if (this.props.biodiv) {
            // if (elements.length % 2 === 0)
            elements.push(header)
            elements.push(
                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de la Biodiversité</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Flora(this.state.statFlora)}
                    <div style={{ height: 30 }} />
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Fauna(this.state.statFauna)}
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
        return (
            <div style={{ margin: 10 }}>
                <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Information général sur le rapport</Typography>
                {General}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Identité du rapport</Typography>
                {Identity(this.props.reference, this.props.date, this.props.period, this.props.place)}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Diffusion</Typography>
                {People(this.props.diffusion, this.props.precision, this.props.generatedby, this.props.authorizedby)}

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Radar des performances</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >Radar des performances description ...</Typography>
                    {Carbon(this.state.consumedEnergy, this.state.consumedWater, this.state.transport, this.state.waste, 0)}
                    {Remarks}
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

const Header = styled.div`
margin: 10px;
display: flex;
flex-direction: row;
height: 80px;
width: inherit;
`;

const Intellcap = styled.div`
height: 60px;
width: 120px;
margin: 10px;
background-image: url(/images/intellcap.png);
background-position: 0 0;
background-size: 100% 100%;
`;

const Fondation = styled.div`
height: 60px;
width: 120px;
margin: 10px;
background-image: url(/images/logo.png);
background-position: 0 0;
background-size: 100% 100%;
`;
