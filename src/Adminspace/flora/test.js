import React, { Component } from 'react';
import '../../Style/custom/indic-commonx.css'
import '../../Style/custom/indic-dynamic.css'

class Energy extends Component {


    render() {
        let x = this.props.lang === 'fr' ? 0 : 1
        x=0
        return (
            <div className="indicator">
                {x}
            </div>
        );
    }
}

export default Energy
