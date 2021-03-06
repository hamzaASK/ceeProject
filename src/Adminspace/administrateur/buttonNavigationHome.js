import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Example from '../management/recharts'

/*
|--------------------------------------------------------------------------
| 
|--------------------------------------------------------------------------
|
|
*/
class CenteredGrid extends React.Component
{
  constructor ( props )
  {
    super( props )
    this.state = {
      open: false,
      fullWidth: true,
      maxWidth: 'lg',
    };
  }
  /*
  |--------------------------------------------------------------------------
  |
  |--------------------------------------------------------------------------
  |
  */
  handleClickOpen = () =>
  {
    this.setState( { open: true } );
  };
  /**********************************************/
  handleClose = () =>
  {
    this.setState( { open: false } );
  };

  /*
  |--------------------------------------------------------------------------
  |
  |--------------------------------------------------------------------------
  */

  render ()
  {
    const { classes } = this.props;
    console.log( this.props.statistics )
    return (
      <div className={ classes.root } >
        <Grid container alignItems="stretch" spacing={ 16 }>
          <Grid item xs={ 4 }>
            <Typography className={ classes.instructions } id="message" variant="h6" noWrap>
              Articles Accueil
            </Typography>
            <Typography variant="button" noWrap>
              Ajouter, Supprimer et Modifier Des Articles
            </Typography>
          </Grid>
          <Grid item xs={ 2 }>
            <Paper className={ classes.paper } style={ { background: '#EAEAEA' } }>
              <Typography variant="h6" noWrap>Total</Typography>
              <Typography variant="h1" noWrap>{ this.props.statistics.total }</Typography>
            </Paper>
          </Grid>
          <Grid item xs={ 2 }>
            <Paper className={ classes.paper } style={ { background: '#f5f5f5' } }>
              <Typography variant="h6" noWrap> Validé</Typography>
              <Typography variant="h1" noWrap>{ this.props.statistics.valid }</Typography>
            </Paper>
          </Grid>
          <Grid item xs={ 2 }>
            <Paper className={ classes.paper } style={ { background: '#9DA6AF' } }>
              <Typography className={ classes.typography } variant="h6" noWrap>Non Validé</Typography>
              <Typography className={ classes.typography } variant="h1" noWrap>{ this.props.statistics.invalid }</Typography>
            </Paper>
          </Grid>
          <Grid item xs={ 2 }>
            <Paper className={ classes.paper } style={ { background: '#498A24' } }>
              <Typography className={ classes.typography } variant="h6" noWrap>Pourcentage</Typography>
              <Example statistics={ { withImage: this.props.statistics.valid, WithoutImage: this.props.statistics.invalid } } />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};
/*
|--------------------------------------------------------------------------
|
|--------------------------------------------------------------------------
*/
const styles = theme => ( {
  root: {
    flexGrow: 1,
    textAlign: 'left',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  fab: {
    background: '#383234',
    marginLeft: '10px',
    marginRight: '10px',

  },
  button: {
    color: 'white',
    margin: theme.spacing.unit,
    height: '50%',
    background: 'gray'
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '100%'
  },
  typography: {
    color: '#F5F5F5',
  }
} );

export default withStyles( styles )( CenteredGrid );

