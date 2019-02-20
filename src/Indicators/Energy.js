import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import PieChart from '../Charts/PieChart'
import ReactSpeedometer from "react-d3-speedometer"

export default class Energy extends Component {

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

    getConsumedEclairage(days) {
        const url = `${URL}/energy/getConsumedEclairage.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ eclairage: 0 })
                } else {
                    this.setState({ eclairage: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getConsumedCVC(days) {
        const url = `${URL}/energy/getConsumedCVC.php?days=${days}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                if (res[0] == null) {
                    this.setState({ cvc: 0 })
                } else {
                    this.setState({ cvc: res[0] })
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
                    this.setState({ plugs: 0 })
                } else {
                    this.setState({ plugs: res[0] })
                }
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        this.getConsumedCVC(days)
        this.getConsumedEclairage(days)
        this.getConsumedPlugs(days)
        this.getConsumedEnergy(days)
        this.getConsumedPV(days)
        this.getProducedEnergy(days)
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
        var total = this.state.consumedEnergy + this.state.consumedPV
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedEnergy / total) * 1000) / 10 + ' %'
    }

    consumedPVPercent() {
        var total = this.state.consumedEnergy + this.state.consumedPV
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedPV / total) * 1000) / 10 + ' %'
    }

    plugsPercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : (this.state.consumedPlugs / total) + ' %'
    }

    eclairagePercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : (this.state.consumedEclairage / total) + ' %'
    }

    cvcPercent() {
        var total = this.state.consumedPlugs + this.state.consumedEclairage + this.state.consumedCVC
        return total === 0 ? 0 + ' %' : (this.state.consumedCVC / total) + ' %'
    }

    // componentDidMount() {
    //     this.refreshValues(7)
    // }

    render() {
        return (
            <div className="indicator">
                <Identity
                    title="Indicateurs des énergies"
                    description="Les indicateurs des énergies renseignent sur la quantité d'énergie consommée par les équipements du CEE à savoir : les équipements de confort Climatisation-Chauffage-Ventilation, les prises éléctriques et l'éclairage. Ils indiquent aussi la quantité d'énergie renouvelable produite par la ferme solaire du CEE"
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title="Energie globale consommée (kWh)"
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max * 5}
                                    value={this.state.consumedEnergy}
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
                        <Card title="Energie renouvelable consommée (kWh)"
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max* 5}
                                    value={this.state.consumedPV}
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
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card //title="Consommation d'énergie\npar équipements"
                            // Fix: Pie charts deformation
                            content={
                                <PieChart
                                    height="95%"
                                    width="95%"
                                    title={"Consommation d'énergie\npar équipements"}
                                    colorList={['#77d9f9', '#17b229', '#040238', '#30141b']}
                                    data={[
                                        { value: this.state.consumedCVC, name: "Équipement de \n confort CVC\n" + this.cvcPercent() },
                                        { value: this.state.consumedEclairage, name: "Éclairage\n" + this.eclairagePercent() },
                                        { value: this.state.consumedPlugs, name: "Prises électriques\n" + this.plugsPercent() },
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Performance"
                            content={
                                <PieChart
                                    height="95%"
                                    width="95%"
                                    title={"Energie consommée\nConventionnelle vs. Renouvelable"}
                                    colorList={['#12B5EA', '#92D050', '#040238', '#30141b']}
                                    data={[
                                        { value: this.state.consumedEnergy, name: "Energie\nconventionnelle\n " + this.consumedPercent() },
                                        { value: this.state.consumedPV, name: "Energie\nrenouvelable\n " + this.consumedPVPercent() }]}
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

