import React, { Component } from 'react'
import { URL } from '../Settings/Server'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import BarChart from '../Charts/BarChart'
import Information from '../Charts/Information'

export default class Recycled extends Component {

    constructor(props) {
        super(props)
        this.state = {
            weightsSolid: [],
            weightsComposte: [],
            levels: [],
            recycled: [],
            totalLevel: 0,
            totalWeight: 0,
            totalRecycledLevel: 0,
            totalRecycledWeight: 0,
        }
        this.refreshValues = this.refreshValues.bind(this)
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
                console.log(res)
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
                console.log(res)
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getLevels() {
        var levels = [
            { value: 0, title: 'Verre', capacity: 5 },
            { value: 0, title: 'Métal', capacity: 5 },
            { value: 0, title: 'Plastique', capacity: 5 },
            { value: 0, title: 'Organique', capacity: 5 },
            { value: 0, title: 'Papier', capacity: 5 },
            { value: 0, title: 'Dangereux', capacity: 5 },
            { value: 0, title: 'Autre', capacity: 5 },
        ]
        const url = `${URL}/dechets/getWasteLevel.php`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                for (var i = 0; i < 7; i++)
                    res[i] == null ? levels[i].value = 0 : levels[i].value = res[i]
                this.setState({ levels })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    getWasteRecycled(d0, d1) {
        // Weights
        const url = `${URL}/dechets/getWasteRecycled.php?dateStart=${d1}&dateEnd=${d0}`;
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var recycled = []
                res.map((i) => (i == null) ? recycled.push(0) : recycled.push(i))
                this.setState({ recycled })
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
                    totalLevel: res[0],
                    totalWeight: res[1]
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
        this.getWasteRecycled(date0, date1)
        this.getLevels()
        this.getWasteTotal(date0, date1)
        this.getRecycledTotal(date0, date1)
        this.setState({ selectedTime: days })
    }

    calculatePerformance(x, y) {
        if (y === 0)
            return 0 + " %"
        else
            return parseInt((x / y) * 100) + " %"
    }

    renderPerformance(value, title, icon, bg) {
        return (
            <div className="el-1" >
                <Card title={title}
                    content={
                        <Information
                            info={value}
                            icon={icon}
                            measure={true}
                        />
                    }
                    bg={bg}
                />
            </div>
        )
    }

    totalRecyled() {
        return this.state.recycled.reduce((pv, cv) => pv + cv, 0)
    }

    render() {
        return (
            <div className="indicator" >
                <Identity
                    title="Indicateur de Recyclage"
                    description="Les déchets organiques sont transformés en composites tandis que le reste des déchets sont confiés aux filiales de recyclage"
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title="Recyclage"
                            content={
                                <BarChart
                                    items={3}
                                    barWidth='15%'
                                    data1={[this.state.recycled[0]]}
                                    data2={[this.state.recycled[1]]}
                                    data3={[this.state.recycled[2]]}
                                    color1={'#92D050'}
                                    color2={'#FF0000'}
                                    color3={'#EBEB35'}
                                    legend1='Verre'
                                    legend2='Metal'
                                    legend3='Plastique'
                                    title={'Déchets Recyclés (en kg)'}
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
                                    data1={[this.state.recycled[3]]}
                                    data2={[this.state.recycled[4]]}
                                    color1={'#C55A11'}
                                    color2={'#5B9BD5'}
                                    legend1='Organique'
                                    legend2='Papier'
                                    title={'Déchets transformés en Composte (en kg)'}
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
                    {this.renderPerformance(this.calculatePerformance(this.state.recycled[0], this.totalRecyled()), "Verre", "/images/indicators/recyc/bin_glass.png", "#92D050")}
                    {this.renderPerformance(this.calculatePerformance(this.state.recycled[1], this.totalRecyled()), "Métal", "/images/indicators/recyc/bin_metal.png", "#FF0000")}
                    {this.renderPerformance(this.calculatePerformance(this.state.recycled[2], this.totalRecyled()), "Plastique", "/images/indicators/recyc/bin_plastic.png", "#EBEB35")}
                    {this.renderPerformance(this.calculatePerformance(this.state.recycled[3], this.totalRecyled()), "Organique", "/images/indicators/recyc/bin_organic.png", "#C55A11")}
                    {this.renderPerformance(this.calculatePerformance(this.state.recycled[4], this.totalRecyled()), "Papier", "/images/indicators/recyc/bin_paper.png", "#5B9BD5")}
                </div>
            </div>
        )
    }
}