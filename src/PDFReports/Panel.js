
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
// import ChipInput from 'material-ui-chip-input'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import { Water, Energy, Identity, People } from './Details'
import Printer from './Printer'
// import ReactToPrint from 'react-to-print';
var moment = require('moment');

const styles = theme => ({
  root: {
    width: 'inherit',
    margin: 10,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
});

const diffOptions = [
  {
    value: 'Confidentiel',
    label: 'Confidentiel',
  },
  {
    value: 'Diffusion restreinte',
    label: 'Diffusion restreinte',
  },
  {
    value: 'Diffusion publique',
    label: 'Diffusion publique',
  },
  {
    value: 'Autre',
    label: 'Autre',
  },
]

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
      transport: false,
      waste: false,
      recycle: false,
      diffusion: 'Confidentiel',
      precision: '',
      generatedby: '',
      authorizedby: '',
      reference: '',
      date: '',
      period: '',
      place: '',
    }
  }

  handleAddChip(chip) {
    let diffusionList = this.state.diffusionList
    diffusionList.push(chip)
    this.setState({ diffusionList })
  }

  handleDeleteChip(chip, index) {
    let diffusionList = this.state.diffusionList
    diffusionList.splice(index, 1)
    this.setState({ diffusionList })
  }

  setIdentity() {
    let reference = "RAP-CEE-V1.0-" + moment().format('YYYY-MM-DD-HH')
    let date = moment().format('L')
    let period = this.props.days + " Jours"
    let place = "Le Centre d'Education à l'Environnement"
    this.setState({ reference, date, period, place })
  }

  componentWillReceiveProps() {
    this.setIdentity()
  }

  render() {
    const { classes } = this.state.props
    return (
      <div className={classes.root} style={{ overflowY: 'auto', height: 780 }} >
        <ExpansionPanel expanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Identité du Rapport</Typography>
          </ExpansionPanelSummary>
          <form className={classes.container} noValidate autoComplete="off" >
            <TextField
              disabled
              style={{ width: 280 }}
              id="outlined-dense"
              label="Référence"
              // value={"RAP-CEE-" + moment().format('YYYY-MM-DD-HH')}
              value={this.state.reference}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            <TextField
              disabled
              style={{ width: 200 }}
              id="outlined-dense"
              label="Date de génération"
              // value={moment().format('L')}
              value={this.state.date}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            <TextField
              disabled
              style={{ width: 200 }}
              id="outlined-dense"
              label="Durée d'activité"
              // value={this.props.days + " Jours"}
              value={this.state.period}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            <TextField
              disabled
              style={{ width: 320 }}
              id="outlined-dense"
              label="Lieu"
              // value="Le Centre d'Education à l'Environnement"
              value={this.state.place}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
          </form>
        </ExpansionPanel>
        <ExpansionPanel expanded={true}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Diffusion du rapport</Typography>
          </ExpansionPanelSummary>
          <form className={classes.container} noValidate autoComplete="off" >
            <TextField
              style={{ width: 200 }}
              id="outlined-select-currency"
              select
              label="Diffusion"
              className={classes.textField}
              value={this.state.diffusion}
              onChange={(diffusion) => this.setState({ diffusion: diffusion.target.value })}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              helperText=""
              margin="dense"
              variant="outlined"
            >
              {diffOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              style={{ width: 200 }}
              // disabled={this.state.diffusion === 'Autre' ? false : true}
              id="outlined-dense"
              label="Précision"
              value={this.state.precision}
              onChange={(precision) => this.setState({ precision: precision.target.value })}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            <TextField
              style={{ width: 200 }}
              id="outlined-dense"
              label="Généré par"
              value={this.state.generatedby}
              onChange={(generatedby) => this.setState({ generatedby: generatedby.target.value })}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            <TextField
              style={{ width: 200 }}
              id="outlined-dense"
              label="Authorisé par"
              value={this.state.authorizedby}
              onChange={(authorizedby) => this.setState({ authorizedby: authorizedby.target.value })}
              className={classes.textField}
              margin="dense"
              variant="outlined"
              helperText=""
            />
            {/* <ChipInput
              value={this.state.diffusionList}
              onRequestAdd={(chip) => this.handleAddChip(chip)}
              onRequestDelete={(chip, index) => this.handleDeleteChip(chip, index)}
            /> */}
          </form>
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
        <ExpansionPanel onChange={(x, transport) => this.setState({ transport })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Transport</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, waste) => this.setState({ waste })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Déchets</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel onChange={(x, recycle) => this.setState({ recycle })}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Recyclage</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{ height: 50, padding: 10 }} >
            <Typography style={{ margin: 10 }} className={classes.heading}>
              Indicateurs inclus dans le rapport
          </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel expanded={true} >
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.heading}>Imprimer le Rapport</Typography>
          </ExpansionPanelSummary>
          <Printer
            energy={this.state.energy}
            water={this.state.water}
            biodiv={this.state.biodiv}
            fauna={this.state.fauna}
            flora={this.state.flora}
            transport={this.state.transport}
            waste={this.state.waste}
            recycle={this.state.recycle}
            diffusion={this.state.diffusion}
            precision={this.state.precision}
            generatedby={this.state.generatedby}
            authorizedby={this.state.authorizedby}
            reference={this.state.reference}
            date={this.state.date}
            period={this.state.period}
            place={this.state.place}
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