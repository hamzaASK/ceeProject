import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Radar from '../Charts/Radar'
import Card from '../Components/Card'
import Information from '../Charts/Information'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'

export default class Carbon extends Component {

    constructor(props) {
        super(props)
        this.state = {
            consumedEnergy: 0,
            consumedPV: 0,
            consumedWater: 0,
            recycledWater: 0,
            transport: 0,
            totalWeight: 0
        }
        this.refreshValues = this.refreshValues.bind(this)
    }

    refreshValues(days) {
        this.getConsumedEnergy(days)
        this.getConsumedPV(days)
        this.getConsumedWater(days)
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getTransport(date0, date1)
        this.getWasteTotal(date0, date1)
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
        if (days != -1) {
            myDate.setDate(myDate.getDate() - days)
        } else {
            myDate = new Date(1990, 8, 1)
        }
        y = myDate.getFullYear()
        m = myDate.getMonth() + 1
        d = myDate.getDate()
        d1 = m + '/' + d + '/' + y
        var dates = { d0, d1 }
        return dates
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
                    totalWeight: res[1]
                })
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

    // componentDidMount() {
    // 	this.refreshValues(7)
    // }

    render() {
        return (
            <div className="indicator" >
                <Identity
                    title="Radar des performances"
                    description="Le radar des performances donne une vue globale sur le bilan Carbon des différentes activités du centre de l'éducation à l'environnement"
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title="Radar des performances"
                            content={
                                <Radar
                                    name="Performance par secteur"
                                    data={[
                                        this.state.transport,
                                        this.state.consumedEnergy,
                                        this.state.consumedWater,
                                        51,
                                        70
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Le jardin botanique du CEE"
                            content={
                                <img
                                    style={{ maxHeight: 700, maxWidth: 700, borderRadius: 10 }}
                                    src="/images/indicators/radar/ges.jpg"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title="Bilan GES total du CEE"
                            content={
                                <Information
                                    info={[
                                        (this.state.consumedEnergy - this.state.consumedPV) * 0.784 +
                                        (this.state.consumedWater - this.state.recycledWater) * 0.5 +
                                        (this.state.consumedWater - this.state.recycledWater) * 0.5 +
                                        this.state.transport
                                        // Fix: add waste carbon footprint to the total
                                    ] + ' kgCO2'}

                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-2" >
                        <Card title="Comment lire le radar ?"
                            content={
                                <Information
                                    info="Le centre du graphe du Radar renvoi vers la valeur minimale 0. Plus les zones sont de couleur verte, plus les émissions du CO2 sont basses, plus elles sont blanches plus les émissions en CO2 sont élevées."
                                />
                            }
                        />
                    </div>
                    <div className="el-3" >
                        <Card //title="Radar des performances"
                            content={
                                <Information
                                    info="Le jardin botanique du Centre de l’éducation à l’environnement contient différentes espèces végétales identifiées en collection. Ce jardin a pour mission principale la conservation de la biodiversité, notamment des espèces locales, l'amélioration de la qualité de l'air en absorbant les GES, ainsi qu'une mission d'information et da sensibilisation à la protection de l'environnement du public."
                                />
                            }
                        />

                    </div>
                </div>
            </div>
        );
    }
}
