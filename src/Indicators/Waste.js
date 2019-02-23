import React, { Component } from 'react';
// ---
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import BarChart from '../Charts/BarChart'
import Information from '../Charts/Information'
import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from './Settings/ReduxStore/actions'

class Waste extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weightsSolid: [],
            weightsComposte: [],
            totalLevel: 0,
            totalWeight: 0,
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
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

    getWasteWeightSolid(d0, d1) {
        // Weights
        const urlW = `${URL}/dechets/getWasteWeightSolid.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(urlW)
            .then(res => res.json())
            .then((res) => {
                var weightsSolid = []
                res.map((i) => (i == null) ? weightsSolid.push(0) : weightsSolid.push(i))
                this.setState({ weightsSolid })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getWasteWeightComposte(d0, d1) {
        // Weights
        const urlW = `${URL}/dechets/getWasteWeightComposte.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(urlW)
            .then(res => res.json())
            .then((res) => {
                var weightsComposte = []
                res.map((i) => (i == null) ? weightsComposte.push(0) : weightsComposte.push(i))
                this.setState({ weightsComposte })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    // getWasteTotal(d0, d1) {
    //     // Weights
    //     const url = `${URL}/dechets/getWasteTotal.php?dateStart=${d1}&dateEnd=${d0}`;
    //     return fetch(url)
    //         .then(res => res.json())
    //         .then((res) => {
    //             if (res[0] == null)
    //                 res[0] = 0;
    //             if (res[1] == null)
    //                 res[1] = 0;
    //             this.setState({
    //                 totalLevel: res[0],
    //                 totalWeight: res[1]
    //             })
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         });
    // }

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
                    totalRecycledLevel: res[0],
                    totalRecycledWeight: res[1]
                })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getWasteWeightSolid(date0, date1)
        this.getWasteWeightComposte(date0, date1)
        // this.getWasteRecycled(date0, date1)
        // this.getLevels()
        // this.getWasteTotal(date0, date1)
        this.getRecycledTotal(date0, date1)
        this.setState({ selectedTime: days })
    }

    // componentDidMount() {
    //     this.refreshValues(7)
    // }

    render() {
        // let x = this.props.lang === 'fr' ? 0 : 1
        return (
            <div className="indicator">
                <Identity
                    title="Indicateurs des déchets"
                    description="La poubelle du CEE permet le tri des déchets selon leurs catégories. Ce tri aide à la collecte des différentes informations ci-dessous"
                />
                <Controls
                    refreshValues={this.refreshValues}
                />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title="Recyclage"
                            content={
                                <BarChart
                                    items={3}
                                    barWidth='15%'
                                    data1={[this.state.weightsSolid[0]]}
                                    data2={[this.state.weightsSolid[1]]}
                                    data3={[this.state.weightsSolid[2]]}
                                    color1={'#92D050'}
                                    color2={'#FF0000'}
                                    color3={'#EBEB35'}
                                    legend1='Verre'
                                    legend2='Metal'
                                    legend3='Plastique'
                                    title={'Poids des déchets Recyclables (en kg)'}
                                    legend={['Verre', 'Metal', 'Plastique']}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Compostage"
                            content={
                                <BarChart
                                    items={2}
                                    barWidth='15%'
                                    data1={[this.state.weightsComposte[0]]}
                                    data2={[this.state.weightsComposte[1]]}
                                    color1={'#C55A11'}
                                    color2={'#5B9BD5'}
                                    legend1='Organique'
                                    legend2='Papier'
                                    title={'Poids des déchets Compostables (en kg)'}
                                    legend={['Organique', 'Papier']}
                                    time={['']}
                                    height='90%'
                                    width='90%'
                                />
                            }
                        />
                    </div>
                </div>
                <div className="row-1" >
                    <div className="el-1" >
                        <Card title="Niveau total"
                            content={
                                <Information
                                    info={this.state.totalRecycledLevel + " m3"}
                                    icon="/images/splash.png"
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card title="Poids total"
                            content={
                                <Information
                                    info={this.state.totalRecycledWeight + " kg"}
                                    icon="/images/indicators/waste/weight.png"
                                    measure={true}
                                />
                            }
                        />
                    </div>
                    <div className="el-2" >
                        <Card // title=""
                            content={
                                <Information
                                    info="Les déchets organiques sont transformés en composte pour les utiliser dans le jardin botanique. Les autres déchets sont confiés aux filières de recyclage."
                                    // Fix: icon for general information like bulbe
                                    icon="/images/splash.png"
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Waste)
