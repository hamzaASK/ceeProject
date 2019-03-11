import React, { Component } from 'react';
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography';

import {
    Identity, People, General, Remarks,
    Water, Energy, Fauna, Flora, Carbon
} from './Details'

export default class Report extends Component {

    constructor(props) {
        super(props)
        this.state = {
            elements: []
        }
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
                    {Energy}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des eaux</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Water}
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
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de la biodiversité</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Flora}
                    <div style={{ height: 30 }} />
                    <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                    {Fauna}
                    {Remarks}
                </div>
            )
        }
        this.setState({ elements })
    }

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
                {Identity}

                <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Diffusion</Typography>
                {People}

                <div>
                    <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Radar des performances</Typography>
                    <Typography variant="h6" style={{ marginLeft: 20 }} >Radar des performances description ...</Typography>
                    {Carbon}
                    {Remarks}
                </div>

                {
                    this.state.elements.map((x) => {
                        return x
                    })
                }

                {/* PAGE #2 */}
                {/* <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                {this.props.energy ?
                    <div>
                        <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des énergies</Typography>
                        <Typography variant="h6" style={{ marginLeft: 20 }} >Energies description ...</Typography>
                        {Energy}
                        {Remarks}
                        <div style={{ height: 50 }} />
                    </div>
                    : null
                }

                {this.props.water ?
                    <div>
                        <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs des eaux</Typography>
                        <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                        {Water}
                        {Remarks}
                        <div style={{ height: 50 }} />
                    </div>
                    : null
                } */}

                {/* PAGE #3 */}
                {/* <Header>
                    <Intellcap />
                    <div style={{ flex: 1 }} />
                    <Fondation />
                </Header>

                {this.props.biodiv ?
                    <div>
                        <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de la biodiversité</Typography>
                        <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                        {Flora}
                        <div style={{ height: 30 }} />
                        <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                        {Fauna}
                        {Remarks}
                    </div>
                    : null
                } */}

                {/* {this.props.biodiv ?
                    <div>
                        <Typography variant="h4" style={{ margin: 20, borderTopWidth: 1, borderTopStyle: 'solid' }} >Indicateurs de la Faune</Typography>
                        <Typography variant="h6" style={{ marginLeft: 20 }} >description ...</Typography>
                        {Fauna}
                        {Remarks}
                    </div>
                    : null */}
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

