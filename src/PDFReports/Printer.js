import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Button from '@material-ui/core/Button';
import Report from './Report'

export default class Printer extends Component {
    render() {
        return (
            <ExpansionPanelDetails style={{ flexDirection: 'column', padding: 10, overflowY: 'hidden', height: 80 }} >
                <ReactToPrint
                    trigger={() => <Button style={{ width: 120, height: 40, margin: 10 }} variant="contained" color="primary" >Imprimer</Button>}
                    content={() => this.report}
                />
                <Report
                    ref={el => (this.report = el)}
                    energy={this.props.energy}
                    water={this.props.water}
                    biodiv={this.props.biodiv}
                    fauna={this.props.fauna}
                    flora={this.props.flora}
                />
            </ExpansionPanelDetails>
        )
    }
}

