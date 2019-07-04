import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ImageIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/SupervisedUserCircle';
import BeachAccessIcon from '@material-ui/icons/Phone';
import User from '@material-ui/icons/PermIdentity';
import Room from '@material-ui/icons/Room';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux'
import { mapStateToProps } from '../../Settings/ReduxStore/stateReducer'
import styles from '../css/BarAdminStyles'
import { Spring } from 'react-spring/renderprops'
/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
|
|
*/

class FullWidthGrid extends Component
{
  /*
  |--------------------------------------------------------------------------
  |
  |--------------------------------------------------------------------------
  */
  render ()
  {
    const url = "images/profil/" + this.props.admin.data.image
    const { classes } = this.props;

    return (
      <Spring from={ { opacity: 0, } }
        to={ { opacity: 1, } }
        config={ { delay: 1100, duration: 1100 } }>
        { props => (
          <Grid container justify="center" item xs={ 6 } sm={ 3 } style={ props }>
            <div justify="center" alignItems="center">
              <Avatar justify="center" alignItems="center" alt="Remy Sharp" src={ url } className={ classes.avatar } />
              <br></br>
              <List className={ classes.root }>
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <ImageIcon />
                  </Avatar>
                  <ListItemText primary="Nom" secondary={ this.props.admin.data.nom } />
                </ListItem>
                <li>
                  <Divider variant="inset" />
                </li>
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Email" secondary={ this.props.admin.data.email } />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <BeachAccessIcon />
                  </Avatar>
                  <ListItemText primary="Prénom" secondary={ this.props.admin.data.prenom } />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <User />
                  </Avatar>
                  <ListItemText primary="Fonction" secondary={ this.props.admin.data.fonction } />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <Room />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                  <Avatar className={ classes.avatar2 }>
                    <WorkIcon />
                  </Avatar>
                  <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
              </List>
            </div>
          </Grid>
        ) }
      </Spring>
    );
  }
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles( styles )( connect( mapStateToProps )( FullWidthGrid ) );
