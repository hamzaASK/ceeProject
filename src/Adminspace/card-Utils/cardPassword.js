import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../Components/Card'
import Identity from '../../Components/Identity'
import { connect } from 'react-redux'
// import { lang } from '../Settings/Lang'
import { mapDispatchToProps } from '../../Settings/ReduxStore/adminActions'
import { mapStateToProps } from '../../Settings/ReduxStore/stateReducer'
import FrPasswd from '../login/ForgotPasswd'
//import { Spring } from 'react-spring/renderprops'

class Checkout extends React.Component
{

  render ()
  {

    return (

      // <Spring     from={{opacity:0,}}
      // to={{opacity:1, }}
      // config={{delay:1100,duration:1100}}>
      //             {props=>(
      <div className="indicator">
        <Identity title={ "Récupération Du Mot De Passe" }
          description={ "Votre Email ..." }
        />
        <div className="row-1" >
          <div className="el-1" style={ { padding: 76, margin: 0 } }>
            <Card title="Saisir Votre Email" style={ {} }
              content={
                this.props.admin.status ? <h1>Vous devez vous déconnecter pour voir cette page</h1> : <FrPasswd />
              }
            >
            </Card>
          </div>
        </div>
      </div>
      //     )}
      //  </Spring>
    );
  }
}
Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default connect( mapStateToProps, mapDispatchToProps )( Checkout );
