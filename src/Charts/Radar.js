import React, { PureComponent } from 'react';
import ReactEcharts from 'echarts-for-react';

export default class Loading extends PureComponent {
    /*
        constructor(props) {
            super(props)
            this.state = {
                max: 100,
            }
        }
        componentDidMount() {
            this.getMax()
        }
    
        getMax() {
            var max = this.props.data.reduce((pv, cv) => pv + cv, 0)
            this.setState({ max })
        }
    */
    getData() {
        var max = this.props.data.reduce((pv, cv) => pv + cv, 0)
        var data = []
        this.props.data.map((x) => data.push(Math.round(100 - (x / max) * 100)))
        return data
    }

    _t = null;
    getOption = () => {
        return {
            title: {
                //text: 'Bilan carbon du CEE (Tonnes équ. CO2)',
                textStyle: {
                    fontStyle: 'normal',
                    fontFamily: 'dubai',
                    fontWeight: 'normal',
                    fontSize: 20,
                    color: '#005475'
                },
            },
            tooltip: {},
            legend: {
                //data: ['(Allocated Budget)']
            },
            radar: {
                //shape: 'circle',
                indicator: [
                    { name: 'Transport ' + this.props.data[0] + ' kgCO2', max: 100 },
                    { name: 'Energie ' + this.props.data[1] + ' kgCO2', max: 100 },
                    { name: 'Eau ' + this.props.data[2] + ' kgCO2', max: 100 },
                    { name: 'Déchets ' + this.props.data[3] + ' kgCO2', max: 100 },
                    { name: 'Autres ' + this.props.data[4] + ' kgCO2', max: 100 },
                ],
                nameGap: 10,
                //zlevel: 100,

            },
            textStyle: {
                fontStyle: 'normal',
                fontFamily: 'dubai',
                fontWeight: 'normal',
                fontSize: 14,
                color: '#005475'
            },
            //color : ['red'],
            series: [{
                name: this.props.name,
                type: 'radar',
                areaStyle: { normal: {} },
                data: [
                    {
                        value: this.getData(),
                        //name: 'Bilan carbone (kg équi. CO2)'
                    },
                ],
                color: 'limegreen'
            }]
        };
    };
    onChartReady = (chart) => {
        this._t = setTimeout(function () {
            chart.hideLoading();
        }, 1000);
    };

    getLoadingOption = () => {
        return {
            text: 'Téléchargement...',
            color: '#4413c2',
            textColor: '#270240',
            maskColor: 'rgba(0, 70, 0, 0.5)',
            zlevel: 0
        };
    };

    componentWillUnmount() {
        clearTimeout(this._t);
    };

    render() {

        return (
            <ReactEcharts
                option={this.getOption()}
                onChartReady={this.onChartReady}
                loadingOption={this.getLoadingOption()}
                showLoading={false}
                style={{ height: '100%', width: '100%' }}
            />
        );
    }
}