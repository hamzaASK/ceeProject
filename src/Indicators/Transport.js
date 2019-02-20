import React, { Component } from 'react';
// import styled from 'styled-components'
// ---
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import BarChart from '../Charts/BarChart'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'

export default class Transport extends Component {

    constructor(props) {
        super(props);

        this.state = {
            transport: [],
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
        var dates = { d0, d1 }
        return dates
    }

    getTransport(d0, d1) {
        const url = `${URL}/transport/getTransport.php?dateStart=${d1}&dateEnd=${d0}`
        console.log(url)
        return fetch(url)
            .then(res => res.json())
            .then((res) => {
                var transport = []
                res.map((i) => (i == null) ? transport.push(0) : transport.push(i))
                this.setState({ transport: transport })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    refreshValues(days) {
        var dates = this.calculateDates(days)
        var date0 = dates.d0
        var date1 = dates.d1
        this.getTransport(date0, date1)
    }

    render() {
        return (
            <div className="indicator" >
                <Identity
                    title="Indicateur de Transport"
                    description="Cet indicateur a pour objectif de définir le degré de la contribution des moyens de transport dans la pollution de l'air"
                />
                <Controls refreshValues={this.refreshValues} />
                <div className="row-3" >
                    <div className="el-1" >
                        <Card title="Bilan carbone du transport"
                            content={
                                <BarChart
                                    items={5}
                                    barWidth='15%'
                                    data1={[this.state.transport[0]]}
                                    data2={[this.state.transport[1]]}
                                    data3={[this.state.transport[2]]}
                                    data4={[this.state.transport[3]]}
                                    data5={[this.state.transport[4]]}
                                    color1={'#A0A0A0'}
                                    color2={'#C06020'}
                                    color3={'#5B9BD5'}
                                    color4={'#92D050'}
                                    color5={'orange'}
                                    legend1='Voiture'
                                    legend2='Train'
                                    legend3='Tramway'
                                    legend4='Bus urbain'
                                    legend5='Deux roues'
                                    title={'Bilan carbone du transport (Kg équi. CO2)'}
                                    legend={null}
                                    time={['']}
                                    height='85%'
                                    width='85%'
                                />
                            }
                        />
                    </div>
                </div>
            </div>
        )
    }
}
