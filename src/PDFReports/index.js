import React, { Component } from 'react'
import styled from 'styled-components'
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
import { URL } from '../Settings/Server'
import Card from '../Components/Card'
import Identity from '../Components/Identity'
import Controls from '../Components/Controls'
import Panel from './Panel'

import { connect } from 'react-redux'
import { lang } from '../Settings/Lang'
import { mapStateToProps, mapDispatchToProps } from '../Settings/ReduxStore/langActions'

// import ReactToPrint from 'react-to-print';

class Reports extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.refreshValues = this.refreshValues.bind(this) /* jshint expr: true */
    }

    // componentWillUpdate() {
    //     if (!this.props.admin)
    //         this.props.history.push(`/`)
    // }

    refreshValues(days) {
    }

    render() {
        return (
            <div className="indicator">
                <Identity
                    title="Générateur des Rapports"
                    description="Description du générateur ..."
                />
                <Controls refreshValues={this.refreshValues} />
                <Panel />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Reports)

const Container = styled.div`
flex: 1;
display: flex;
flex-direction: column;
background-color: orange;
margin: 10px;
`;
