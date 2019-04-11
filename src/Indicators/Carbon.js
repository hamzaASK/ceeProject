import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Radar from '../Charts/Radar'
import Card from '../Components/Card'
import Information from '../Charts/Information'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'

class Carbon extends Component {

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
        if (days !== -1) {
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
        let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator" >
                <Identity
                    title={lang[x].GES.title}
                    description={lang[x].GES.desc}
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_1.title}
                            content={
                                <Radar
                                    name="Performance par secteur"
                                    legends={[
                                        lang[x].GES.indic_1.Element_1.label,
                                        lang[x].GES.indic_1.Element_2.label,
                                        lang[x].GES.indic_1.Element_3.label,
                                        lang[x].GES.indic_1.Element_4.label,
                                        lang[x].GES.indic_1.Element_5.label,
                                    ]}
                                    data={[
                                        this.state.transport,
                                        Math.round((this.state.consumedEnergy / 1000 - this.state.consumedPV / 1000) * 0.784 * 10) / 10,
                                        Math.round((this.state.consumedWater / 1000 - this.state.recycledWater / 1000) * 0.5 * 10) / 10,
                                        51,
                                        70
                                        // Fix: Autres : Construction du batiment, les effets benefiques des espaces verts...
                                        // Fix: water to CO2 coef
                                    ]}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_2.title}
                            content={
                                <img alt=''
                                    style={{ maxHeight: 700, maxWidth: 700, borderRadius: 10 }}
                                    src="/images/indicators/radar/ges.jpg"
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title={lang[x].GES.indic_5.title}
                            content={
                                <Information
                                    info={[
                                        Math.round((
                                            (this.state.consumedEnergy / 1000 - this.state.consumedPV / 1000) * 0.784 +
                                            (this.state.consumedWater / 1000 - this.state.recycledWater / 1000) * 0.5 +
                                            this.state.transport)
                                            * 10) / 10
                                        // Fix: add waste carbon footprint to the total
                                    ] + ' kgCO2'}

                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-2" >
                        <Card title={lang[x].GES.indic_3.title}
                            content={
                                <Information
                                    info={lang[x].GES.indic_3.desc}
                                />
                            }
                        />
                    </div>
                    <div className="el-3" >
                        <Card //title="Radar des performances"
                            content={
                                <Information
                                    info={lang[x].GES.indic_4.title}
                                />
                            }
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Carbon)
