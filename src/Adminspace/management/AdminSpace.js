import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Appbar from '../conponents/ConfigAdmin/Appbar'
import SideBar from '../conponents/ConfigAdmin/SideBar'
import Video from '../HomeManagement/tableHome'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../../Settings/ReduxStore/stateReducer'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  paper: {
    padding: '2px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class CenteredGrid extends React.Component {
  constructor(props){
    super(props)
this.state = {
    open: true,
  };

  }
  
  render(){
  const { classes } = this.props;
  return (
    
    <div className={classes.root} >
      <Grid container spacing={8}>
      {/* Barre Top */}
        <Grid item xs={12} >
          <Paper className={classes.paper}>
          <Appbar />
          </Paper>
        </Grid>
     {/* Side bar */}
        <Grid container xs={3} style={{ alignItems:"stretch"}}>
          <Paper className={classes.paper} style={{width: '100%',}} alignItems="stretch">
            <SideBar />
          </Paper>
        </Grid>
        {/* Body */}
        <Grid container xs={9} style={{ alignItems:"stretch"}}>
          <Paper className={classes.paper}  style={{width: '100%'}} alignItems="stretch" id="PaperTable">
          <Video  />
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

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CenteredGrid));
















// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
// import { Paper } from '@material-ui/core';

// const styles = theme => ({
//   root: {
   
//     maxWidth: 200,
//     backgroundColor: theme.palette.background.paper,
//   },
//   nested: {
//     paddingLeft: theme.spacing.unit * 4,
//   },
// });

// class NestedList extends React.Component {
//   state = {
//     open: true,
//   };

//   handleClick = () => {
//     this.setState(state => ({ open: !state.open }));
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <Paper>
//       <List
//         component="nav"
//         subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
//         className={classes.root}
//         style={{    justifyContent: 'normal',background:'red'}}
//       >
//         <ListItem button>
//           <ListItemIcon>
//             <SendIcon />
//           </ListItemIcon>
//           <ListItemText inset primary="Sent mail" />
//         </ListItem>
//         <ListItem button>
//           <ListItemIcon>
//             <DraftsIcon />
//           </ListItemIcon>
//           <ListItemText inset primary="Drafts" />
//         </ListItem>
//         <ListItem button onClick={this.handleClick}>
//           <ListItemIcon>
//             <InboxIcon />
//           </ListItemIcon>
//           <ListItemText inset primary="Inbox" />
//           {this.state.open ? <ExpandLess /> : <ExpandMore />}
//         </ListItem>
//         <Collapse in={this.state.open} timeout="auto" unmountOnExit>
//           <List component="div" disablePadding>
//             <ListItem button className={classes.nested}>
//               <ListItemIcon>
//                 <StarBorder />
//               </ListItemIcon>
//               <ListItemText inset primary="Starred" />
//             </ListItem>
//           </List>
//         </Collapse>
//       </List>
//       </Paper>
//     );
//   }
// }

// NestedList.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(NestedList);