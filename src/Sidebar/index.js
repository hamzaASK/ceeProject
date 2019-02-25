import React, { Component } from 'react';
import styled from 'styled-components'
import Information from '../Charts/Information'
import { URL } from '../Settings/Server'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/actions'

import Card from '../Components/Card'

import Progress from './Progress'

var timer = 10

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedWater: 0,
            recycledWater: 0,
            consumedEnergy: 0,
            consumedPV: 0,
            totalWaste: 0,
            totalRecycled: 0,
            transport: 0
        }
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

    getConsumedPV(days) {
        const url = `${URL}/energy/getConsumedPV.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedPV: 0 })
                } else {
                    this.setState({ consumedPV: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getWasteTotal(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getWasteTotal.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null)
                    res[0] = 0;
                if (res[1] == null)
                    res[1] = 0;
                this.setState({
                    totalWaste: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getRecycledTotal(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getRecycledTotal.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null)
                    res[0] = 0;
                if (res[1] == null)
                    res[1] = 0;
                this.setState({
                    totalRecycled: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getTransport(d0, d1) {
        const url = `${URL}/transport/getTransport.php?dateStart=${d1}&dateEnd=${d0}`
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var transport = 10
                //transport = transport + res.map((i) => (i != null) ? i : 0)
                this.setState({ transport })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    calculateDates(days) {
        // Formalize dates: d0, d1 to m/d/y
        var myDate = new Date()
        var y = 0
        var m = 0
        var d = 0
        var d0 = ''
        var d1 = ''
        y = myDate.getFullYear()
        m = myDate.getMonth() + 1
        d = myDate.getDate()
        d0 = m + '/' + d + '/' + y
        if (days !== -1) {
            myDate.setDate(myDate.getDate() - days)
        } else {
            myDate = new Date(1990, 8, 1)
        }
        y = myDate.getFullYear()
        m = myDate.getMonth() + 1
        d = myDate.getDate()
        d1 = m + '/' + d + '/' + y
        var dates = { d0, d1 };
        return dates;
    }

    refreshValues(days) {
        this.getConsumedWater(days)
        this.getRecycledWater(days)
        this.getConsumedEnergy(days)
        this.getConsumedPV(days)
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getWasteTotal(date0, date1)
        this.getRecycledTotal(date0, date1)
        this.getTransport(date0, date1)
    }

    componentDidMount() {
        // this.refreshValues(7)
        timer = setInterval(() => { this.refreshValues(7) }, 6000);
    }

    render() {
        // let x = this.props.lang === 'fr' ? 0 : 1
                return (
            <Container>
                <div style={{ display: 'flex' }} >
                    <Card title={"Performances environnementales"}
                        content={
                            <Information
                                info="Aperçu sur les performances environnementales au cours des sept jours derniers"
                            // Fix: icon for general information like bulbe
                            />
                        }
                    />
                </div>
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={this.state.consumedWater} max={100} icon={'/images/sidebar/water.png'} title={'Eaux cons.'} unit={' m3'} />
                            <Progress value={this.state.recycledWater} max={100} icon={'/images/sidebar/water_.png'} title={'Eaux recyc.'} unit={' m3'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={this.state.consumedEnergy} max={100} icon={'/images/sidebar/energy.png'} title={'Energies cons.'} unit={' kWh'} />
                            <Progress value={this.state.consumedPV} max={100} icon={'/images/sidebar/energy_.png'} title={'Energies prod.'} unit={' kWh'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={this.state.totalWaste} max={100} icon={'/images/sidebar/waste.png'} title={'Déchets'} unit={' m3'} />
                            <Progress value={this.state.totalRecycled} max={100} icon={'/images/sidebar/waste_.png'} title={'Recyclage'} unit={' m3'} />
                        </Content>
                    }
                />
                <Card title={null}
                    content={
                        <Content>
                            <Progress value={58} max={100} icon={'/images/sidebar/ges.png'} title={'Eau'} unit={' m3'} />
                            <Progress value={this.state.transport} max={100} icon={'/images/sidebar/transport.png'} title={'Eau'} unit={' m3'} />
                        </Content>
                    }
                />

            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

const Container = styled.div`
width: 360px;
height: inherit;
display: flex;
flex-direction: column;
`;

const Content = styled.div`
flex: 1;
display: flex;
flex-direction: row;
padding: 5px;
`;

// const Box = styled.div`
// flex: 1;
// display: flex;
// flex-direction: column;
// background-color: orange;
// margin: 5px;
// `;
