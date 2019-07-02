import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Carousel from './Steppers'
import A2 from './tableHome'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Steppers from './Steppers'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Example from '../management/recharts'

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign:'left',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  fab:{      
    background:'#383234'  ,
    marginLeft: '10px',
    marginRight: '10px',
  
  },
  button: {
    color:'white',
    margin:  theme.spacing.unit ,
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
  typography:{
    color:'#F5F5F5',
  }
});

class CenteredGrid extends React.Component {
  constructor(props){
    super(props)
this.state = {
  open: false,
  fullWidth: true,
  maxWidth: 'lg',
};

  }
  newPublicationHome=()=>{
    ReactDOM.render(<div><Carousel /></div>,document.getElementById("PaperTable"))
  }
   
  listPublicationHome=()=>{
  ReactDOM.render(<div><A2 /></div>,document.getElementById("PaperTable"))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
  const { classes } = this.props;
  console.log(this.props.statistics)
  return (
    
    <div className={classes.root} >
      <Grid container alignItems="stretch" spacing={16}>
      <Grid item xs={4}>
        <Typography className={classes.instructions} id="message" variant="h6" noWrap>
          Articles Ressources
        </Typography>
        <Typography variant="button" noWrap>
          Ajouter, Supprimer et Modifier Des Articles
        </Typography>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.handleClickOpen} >
          Ajouter
        </Button>
        <Button variant="outlined" color="primary" className={classes.button} onClick={this.listPublicationHome.bind(this)} >
          Lister 
        </Button>
      </Grid>
      <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#EAEAEA'}}>
          <Typography  variant="h6" noWrap>Total</Typography>
          <Typography  variant="h1" noWrap>{this.props.statistics.total}</Typography>
          {/* <DataUsage style={{width:'100%',height:'auto'}}/> */}
        </Paper>
      </Grid>
      {/* <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#498A24'}}>
          <Typography className={classes.typography} variant="subtitle1" noWrap>Difference</Typography>
          <Example statistics={this.props.statistics}/>
        </Paper>
      </Grid> */}

      <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#f5f5f5'}}>
        <Typography variant="h6" noWrap> Avec Image</Typography>
          <Typography  variant="h1" noWrap>{this.props.statistics.withImage}</Typography>
          {/* <DataUsage style={{width:'50%',height:'auto'}}/> */}
        </Paper>
      </Grid>
      <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#9DA6AF'}}>
          <Typography className={classes.typography}  variant="h6" noWrap>Sans Image</Typography>
          <Typography className={classes.typography}  variant="h1" noWrap>{this.props.statistics.WithoutImage}</Typography>
          {/* <DataUsage style={{width:'50%',height:'auto'}}/> */}
        </Paper>
      </Grid>
      <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#498A24'}}>
          <Typography className={classes.typography} variant="h6" noWrap>Pourcentage</Typography>
          <Example statistics={this.props.statistics}/>
        </Paper>
      </Grid>
      </Grid>

      {/**********              ***********/}
      <React.Fragment>
      {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open max-width dialog
        </Button> */}
      <Dialog
          fullWidth={this.state.fullWidth} maxWidth={this.state.maxWidth} open={this.state.open} onClose={this.handleClose} aria-labelledby="max-width-dialog-title">
          <DialogTitle id="max-width-dialog-title">Nouvel Article </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Saisissez Vos Données 
            </DialogContentText>
          </DialogContent>
            <Steppers />
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Fermer
            </Button>
          </DialogActions>
        </Dialog>
        </React.Fragment>
    </div>
  );
}
}
CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);

