import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import Card from '../Components/Card'

export default class Photovolta extends Component {

    render() {
        return (
            <div className="indicator">
                <div className="row-1" >
                    <div className="el-1" >
                        <Card // title="Energie globale consommée (kWh)"
                            content={
                                <div style={{ flex: 1, backgroundColor: 'orange' }} />
                            }
                        />
                    </div>
                </div>
                <div className="row-3" >
                    <div className="el-1" >
                        <Card //title="Consommation d'énergie\npar équipements"
                            content={
                                <div style={{ flex: 1, backgroundColor: 'orange' }} />
                            }
                        />
                    </div>
                    <div className="el-1" >
                        <Card // title="Performance"
                            content={
                                <div style={{ flex: 1, backgroundColor: 'orange' }} />
                            }
                        />
                    </div>
                </div>
            </div>
        );
    }
}

