import React, { Component } from 'react';
import '../Style/custom/indic-commonx.css'
import '../Style/custom/indic-dynamic.css'
// import { URL } from '../Settings/Server'
import Card from '../Adminspace/management/Card2'

import { connect } from 'react-redux'
// import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../Settings/ReduxStore/adminActions'
import { mapStateToProps } from '../Settings/ReduxStore/stateReducer'
import Login from './login/Login'
import Espace from './management/AdminSpace'
class Adminspace extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
    //this.props.AdminOFF('hamza@hamza.hamza', '123456789')
  }

  render() {
    return (
      <div className="indicator">
        {/* <Identity

         // title={"Espace administrateur"}
         // description={"Espace admin description ..."}
        /> */}
        <div className="row-1" >
          <div className="el-1" style={{ padding: '2px' }}>
            <Card  title={this.props.admin.status ? "Authentification" : null} style={{ }}
              content={
              !this.props.admin.status ? <Espace />  :<Login />
              } 
            >
            </Card>
           
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Adminspace)
