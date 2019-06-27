import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import PieChart from '../Charts/PieChart'
import ReactSpeedometer from "react-d3-speedometer"
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

import { consumedEnergy, consumedPV } from '../APIRequests'

class Energy extends Component {

    constructor(props) {
        super(props)
        this.state = {
            producedEnergy: 0,
            consumedEnergy: 0,
            consumedEclairage: 0,
            consumedPlugs: 0,
            consumedCVC: 0,
            consumedPV: 0,
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
    }

    // getConsumedEnergy(days) {
    //     const url = `${URL}/energy/getConsumedEnergy.php?days=${days}`;
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then((res) => {
    //             if (res[0] == null) {
    //                 this.setState({ consumedEnergy: 0 })
    //             } else {
    //                 this.setState({ consumedEnergy: res[0] })
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    // getConsumedPV(days) {
    //     const url = `${URL}/energy/getConsumedPV.php?days=${days}`;
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then((res) => {
    //             if (res[0] == null || res[0] === 0) {
    //                 this.setState({ consumedPV: 42000 * days })
    //             } else {
    //                 // this.setState({ consumedPV: res[0] })
    //                 this.setState({ consumedPV: res[0] })
    //             }
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

    getConsumedEclairage(days) {
        const url = `${URL}/energy/getConsumedEclairage.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedEclairage: 0 })
                } else {
                    this.setState({ consumedEclairage: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getConsumedCVC(days) {
        let url = `${URL}/energy/getConsumedCVC.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedCVC: 0 })
                } else {
                    this.setState({ consumedCVC: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getConsumedPlugs(days) {
        const url = `${URL}/energy/getConsumedPlugs.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ consumedPlugs: 0 })
                } else {
                    this.setState({ consumedPlugs: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    async refreshValues(days) {
        this.setState({
            consumedEnergy: await consumedEnergy(days),
            consumedPV: await consumedPV(days),
        })
        this.getConsumedCVC(days)
        this.getConsumedEclairage(days)
        this.getConsumedPlugs(days)
        // this.getConsumedEnergy(days)
        // this.getConsumedPV(days)
        switch (days) {
            case 1:
                this.setState({ max: 10 })
                break;
            case 7:
                this.setState({ max: 50 })
                break;
            case 30:
                this.setState({ max: 100 })
                break;
            case 90:
                this.setState({ max: 500 })
                break;
            default:
                this.setState({ max: 1000 })
                break;
        }
    }

    consumedPercent() {
        var total = this.state.consumedEnergy
        return total === 0 ? 0 + ' %' : Math.round(((this.state.consumedEnergy - this.state.consumedPV) / total) * 1000) / 10 + ' %'
    }

    consumedPVPercent() {
        var total = this.state.consumedEnergy
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedPV / total) * 1000) / 10 + ' %'
    }

    plugsPercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedPlugs / total) * 1000) / 10 + ' %'
    }

    eclairagePercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedEclairage / total) * 1000) / 10 + ' %'
    }

    cvcPercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedCVC / total) * 1000) / 10 + ' %'
    }

    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator">
                <Identity
                    title={lang[x].Energy.title}
                    description={lang[x].Energy.desc}
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].Energy.indic_1.title}
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max * 50}
                                    value={Math.round((this.state.consumedEnergy / 1000) * 10) / 10}
                                    needleColor="purple"
                                    startColor="limegreen"
                                    endColor="red"
                                    segments={7}
                                    needleTransitionDuration={2000}
                                    needleTransition="easeElastic"
                                    textColor="grey"
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Energy.indic_2.title}
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max * 30}
                                    value={Math.round((this.state.consumedPV / 1000) * 10) / 10}
                                    needleColor="purple"
                                    startColor="red"
                                    endColor="limegreen"
                                    segments={7}
                                    needleTransitionDuration={2000}
                                    needleTransition="easeElastic"
                                    textColor="grey"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card //title="Consommation d'énergie\npar équipements"
                            // Fix: Pie charts deformation
                            content={
                                <PieChart
                                    height="95%"
                                    width="95%"
                                    title={lang[x].Energy.indic_3.title}
                                    colorList={['tomato', 'green', 'DodgerBlue', '#30141b']}
                                    data={[
                                        { value: this.state.consumedCVC / 1000, name: lang[x].Energy.indic_3.Element_1.label + "\n" + this.cvcPercent() },
                                        { value: this.state.consumedEclairage / 1000, name: lang[x].Energy.indic_3.Element_2.label + "\n" + this.eclairagePercent() },
                                        { value: this.state.consumedPlugs / 1000, name: lang[x].Energy.indic_3.Element_3.label + "\n" + this.plugsPercent() },
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].Energy.indic_4.title}
                            content={
                                <PieChart
                                    height="95%"
                                    width="95%"
                                    title={lang[x].Energy.indic_4.desc}
                                    colorList={['dodgerblue', 'forestgreen', '#040238', '#30141b']}
                                    data={[
                                        { value: this.state.consumedEnergy - this.state.consumedPV, name: lang[x].Energy.indic_4.Element_2.label + "\n " + this.consumedPercent() },
                                        { value: this.state.consumedPV, name: lang[x].Energy.indic_4.Element_1.label + "\n " + this.consumedPVPercent() }]}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Energy)
