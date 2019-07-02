import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import A2 from './tableDechets'
import ReactDOM from 'react-dom'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Steppers from './textfields'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';
import Example2 from '../management/BarChart'


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
      this.state  = {
                      open: false,
                      fullWidth: true,
                      maxWidth: 'lg',
                    };
                    ReactDOM.render(<div><A2 type={this.state.open}/></div>,document.getElementById("PaperTable"))
                  }
  
  listPublicationHome=()=>{

    ReactDOM.render(<div><A2 type={this.state.open}/></div>,document.getElementById("PaperTable"))
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
  const { classes } = this.props;
  console.log(this.props.statisticsPoids)
  return (
    
    <div className={classes.root} >
      <Grid container alignItems="stretch" spacing={16}>
      <Grid item xs={4}>
      <Typography className={classes.instructions} id="message" variant="h6" noWrap>
          Articles Déchets
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
          {/* <DataUsage style={{width:'50%',height:'auto'}}/> */}

      </Grid>
      {/* <Grid   item xs={2}>
        <Paper  style={{background:'#f5f5f5',height:'50%',    padding: '20',textAlign: 'center',}}>
            <Typography  variant="button" noWrap>Total</Typography>
            <Typography  variant="h4" noWrap>{this.props.statisticsPoids.total}</Typography>
          </Paper>
          <Paper  style={{background:'#9DA6AF',height:'50%',    padding: '20',textAlign: 'center',}}>
            <Typography className={classes.typography}  variant="button" noWrap>Metal</Typography>
            <Typography className={classes.typography}  variant="h4" noWrap>{this.props.statisticsPoids.metal}Kg</Typography>
          </Paper>

      </Grid> */}
      {/* <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#498A24'}}>
          <Typography className={classes.typography} variant="subtitle1" noWrap>Difference</Typography>
          <Example statisticsPoids={this.props.statisticsPoids}/>
        </Paper>
      </Grid> */}
      <Grid   item xs={4}>
        <Paper className={classes.paper} style={{background:'#498A24',padding:0, paddingTop:10}}>
         <Example2 statistics={this.props.statisticsPoids} titre='Poids Selon Le Type' unity='Kg'/>
        </Paper>

      </Grid>
      <Grid   item xs={4}>
        <Paper className={classes.paper} style={{background:'#9DA6AF',padding:0, paddingTop:10}}>
         <Example2 statistics={this.props.statisticsNiveau} titre='Niveau Selon Le Type' unity='M-cube'/>
        </Paper>

      </Grid>

      {/* <Grid   item xs={2}>
        <Paper className={classes.paper} style={{background:'#498A24',height:'50%'}}>
        <Typography  variant="h4" noWrap>Total</Typography>
          {/* <Example statisticsPoids={this.props.statisticsPoids}/> 
        </Paper>
      </Grid> */}

      {/* <Grid   item xs={2}>
        <Paper  style={{background:'#f5f5f5',height:'50%',    padding: '20',textAlign: 'center',}}>
          <Typography variant="button" noWrap> Plastique</Typography>
          <Typography  variant="h4" noWrap>{this.props.statisticsPoids.plastique}Kg</Typography>
        </Paper>
        <Paper  style={{background:'#f5f5f5',height:'50%',padding: '20',textAlign: 'center',}}>
          <Typography variant="button" noWrap> Papier</Typography>
          <Typography  variant="h4" noWrap>{this.props.statisticsPoids.papier}Kg</Typography>
        </Paper>
      </Grid>
      <Grid   item xs={2}>
        <Paper  style={{background:'#f5f5f5',height:'50%',    padding: '20',textAlign: 'center',}}>
          <Typography variant="button" noWrap> Verre</Typography>
          <Typography  variant="h4" noWrap>{this.props.statisticsPoids.verre}Kg</Typography>
        </Paper>
        <Paper  style={{background:'#f5f5f5',height:'50%',padding: '20',textAlign: 'center',}}>
          <Typography variant="button" noWrap> Organique</Typography>
          <Typography  variant="h4" noWrap>{this.props.statisticsPoids.organique}Kg</Typography>
        </Paper>
      </Grid>
 */}
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





















// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// //import Video from './video'
// // import Video from './tableVideo'
// // import Upload from './uploadVideo'
// import TableHome from './tableDechets'
// import Textff from './textfields'

// import ReactDOM from 'react-dom'
// //import PlayCircleOutline from '@material-ui/icons/PlayCircleOutline'
// import Button from '@material-ui/core/Button';
// import { Typography } from '@material-ui/core';

// const styles = theme => ({
//   root: {
//     flexGrow: 1,
//     textAlign:'left',
//   },
//   nested: {
//     paddingLeft: theme.spacing.unit * 4,
//   },
//   paper: {
//     padding: '2px',
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   fab:{      
//     background:'#383234'  ,
//     marginLeft: '10px',
//     marginRight: '10px',
  
//   },
//   button: {
//     color:'green',
//     margin:  theme.spacing.unit ,
//   },
//   instructions: {
//     marginTop: theme.spacing.unit,
//     marginBottom: theme.spacing.unit,
//   },

// });

// class CenteredGrid extends React.Component {
//   constructor(props){
//     super(props)
// this.state = {
//     open: true,
//   };

//   }
//   newPublicationHome=()=>{
//     ReactDOM.render(<div><Textff /></div>,document.getElementById("PaperTable"))
//    }
//    listPublicationHome=()=>{
//     ReactDOM.render(<div><TableHome /></div>,document.getElementById("PaperTable"))
//    }
//    playVideo=()=>{
//     ReactDOM.render(<div><Textff /></div>,document.getElementById("PaperTable"))
//    }
//   render(){
//   const { classes } = this.props;
//   return (
    
//     <div className={classes.root} >
//       {/* <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.newPublicationHome.bind(this)} >
//         <AddIcon />
//       </Fab> 
//       <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.listPublicationHome.bind(this)} >
//         <List />
//       </Fab>  */}
//       <Typography className={classes.instructions} id="message" variant="h4" >
//         Espace Déchets
//       </Typography>
//       <Typography variant="subtitle1" gutterBottom>
//       A Partir de ce Tableau Vous Pouvez Modifier Et Supprimer Les Articles
//       </Typography>

//       <Button variant="outlined" color="primary" className={classes.button} onClick={this.newPublicationHome.bind(this)}>
//       Ajouter
//       </Button>
//       <Button variant="outlined" color="primary" className={classes.button} onClick={this.listPublicationHome.bind(this)}>
//       Lister Les Articles
//       </Button>



//       {/* <Fab color="primary" aria-label="Add" className={classes.fab} onClick={this.playVideo.bind(this)} >
//         <PlayCircleOutline />
//       </Fab> */}
//     </div>
//   );
// }
// }
// CenteredGrid.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(CenteredGrid);

