import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import PieChart from '../Charts/PieChart'
import Information from '../Charts/Information'
import ReactSpeedometer from "react-d3-speedometer"

export default class Water extends Component {

    constructor(props) {
        super(props);
        this.state = {
            consumedWater: 0,
            recycledWater: 0,
            max: 50,
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
    }

    refreshValues(days) {
        days = days === 0 ? 10000 : days
        this.getConsumedWater(days)
        this.getRecycledWater(days)
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

    componentDidMount() {
        // this.refreshValues(7)
        // timer = setInterval(() => { this.update() }, 2000);
    }

    componentWillUnmount() {
        // clearInterval(timer)
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

    consumedPercent() {
        let total = this.state.consumedWater + this.state.recycledWater
        return total === 0 ? 0 + ' %' : Math.round((this.state.consumedWater / total) * 1000) / 10 + ' %'
    }

    recycledPercent() {
        let total = this.state.consumedWater + this.state.recycledWater
        return total === 0 ? 0 + ' %' : Math.round((this.state.recycledWater / total) * 1000) / 10 + ' %'
    }

    render() {
        return (
            <div className="indicator">
                <Identity
                    title="Indicateurs des Eaux"
                    description="Cet indicateur affiche la quantité d'eau potable consommée dans le CEE ainsi que la quantité d'eau recyclée par la station de traitement des eaux usées et récupérées"
                />
                <Controls
                    refreshValues={this.refreshValues}
                />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title="Eau potable consommée (m3)"
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max / 2}
                                    value={this.state.consumedWater}
                                    needleColor="purple"
                                    startColor="dodgerblue"
                                    segments={5}
                                    endColor="darkblue"
                                    needleTransitionDuration={2000}
                                    needleTransition="easeElastic"
                                    textColor="grey"
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
                                    legend={["Eaux consommées", "Eaux recyclées"]}
                                    title="Eaux consommées vs. Eaux recyclées"
                                    titleFont='15'
                                    colorList={['#92D050', 'dodgerblue']}
                                    data={[
                                        { value: this.state.recycledWater, name: "Eaux\nRecyclées" },
                                        { value: this.state.consumedWater, name: "Eaux\nConsommées" },
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Eau recyclée (m3)"
                            content={
                                <ReactSpeedometer
                                    width={250}
                                    height={'100%'}
                                    forceRender={true}
                                    maxValue={this.state.max / 2}
                                    value={this.state.recycledWater}
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
                <div className="row-2" >
                    <div className="el-1" >
                        <Card title="Qualité d’eau en provenance de la STEP"
                            content={
                                <Information
                                    info="Non potable mais bonne pour l’arrosage"
                                    icon="/images/2-green.png"
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Qualité d’eau en provenance du réseau national"
                            content={
                                <Information
                                    info="Potable, très bonne pour la consommation quotidienne"
                                    icon="/images/3-blue.png"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

