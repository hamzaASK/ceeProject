
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import { Water, Energy, Identity, People } from './Details'
import Printer from './Printer'
// import ReactToPrint from 'react-to-print';

const styles = theme => ({
  root: {
    width: 'inherit',
    margin: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class Panel extends Component {

  constructor(props) {
    super(props)
    this.state = {
      props: props,
      energy: false,
      water: false,
      biodiv: false,
      fauna: false,
      flora: false,
    }
  }

  render() {
    const { classes } = this.state.props
    return (
      <div className={classes.root} style={{ overflowY: 'auto', height: 780 }} >
        <ExpansionPanel expanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Identité du Rapport</Typography>
          </ExpansionPanelSummary>
          {Identity}
        </ExpansionPanel>
        <ExpansionPanel expanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Personnes concernées</Typography>
          </ExpansionPanelSummary>
          {People}
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, energy) => this.setState({ energy })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Energies</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, water) => this.setState({ water })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Eaux</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, biodiv) => this.setState({ biodiv })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Biodiversité</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        {/* <ExpansionPanel onChange={(x, fauna) => this.setState({ fauna })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Faune</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, flora) => this.setState({ flora })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Flore</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel> */}
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Imprimer le Rapport</Typography>
          </ExpansionPanelSummary>
          <Printer
            energy={this.state.energy}
            water={this.state.water}
            biodiv={this.state.biodiv}
            fauna={this.state.fauna}
            flora={this.state.flora}
          />
        </ExpansionPanel>
      </div>
    )
  }
}

Panel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Panel);