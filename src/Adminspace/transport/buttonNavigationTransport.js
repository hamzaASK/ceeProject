import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import TableHome from './tableLinks'
import Textff from './addLink'

import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';


class CenteredGrid extends React.Component
{
  constructor ( props )
  {
    super( props )
    this.state = {
      open: true,
    };

  }
  newPublicationHome = () =>
  {
    ReactDOM.render( <div><Textff /></div>, document.getElementById( "PaperTable" ) )
  }
  listPublicationHome = () =>
  {
    ReactDOM.render( <div><TableHome /></div>, document.getElementById( "PaperTable" ) )
  }
  playVideo = () =>
  {
    ReactDOM.render( <div><Textff /></div>, document.getElementById( "PaperTable" ) )
  }
  render ()
  {
    const { classes } = this.props;
    return (

      <div className={ classes.root } >
        {/* <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.newPublicationHome.bind(this)} >
        <AddIcon />
      </Fab>
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.listPublicationHome.bind(this)} >
        <List />
      </Fab> 
      <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.playVideo.bind(this)} >
        <DirectionsRun />
      </Fab>  */}


        <Typography className={ classes.instructions } id="message" variant="h6" >
          Liste Des Articles Accueil
      </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Apartir de ce tableau Vous Pouvez Modifier Et Supprimer Les Articles
      </Typography>
        <Button variant="outlined" color="primary" className={ classes.button } onClick={ this.newPublicationHome.bind( this ) }>
          Ajouter
      </Button>
        <Button variant="outlined" color="primary" className={ classes.button } onClick={ this.listPublicationHome.bind( this ) }>
          Lister Les Articles
      </Button>

      </div>
    );
  }
}
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
const styles = theme => ( {
  root: {
    flexGrow: 1,
    textAlign: 'left',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  paper: {
    padding: '2px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    background: '#383234',
    marginLeft: '10px',
    marginRight: '10px',

  },
  button: {
    color: 'green',
    margin: theme.spacing.unit,
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },

} );

export default withStyles( styles )( CenteredGrid );

