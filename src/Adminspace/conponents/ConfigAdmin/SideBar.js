import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';

import A1 from '../../HomeManagement/tableHome'
import A2 from '../../RessourcesManagement/tableHome'
import A3 from '../../administrateur/ValidationAdmin'
import A4 from '../../backup/air'
import A5 from '../../backup/eau'
import A6 from '../../backup/energie'
import A7 from '../../waste/tableDechets'
import A8 from '../../recycling/tableDechets'
import A9 from '../../transport/tableLinks'
import A10 from '../../flora/tableHome'
import A11 from '../../wildlife/tableHome'
import A12 from '../../video/tableVideo'


import { Spring } from 'react-spring/renderprops'
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import Water from '@material-ui/icons/BrandingWatermark';
import Energy from '@material-ui/icons/Power';
import Backup from '@material-ui/icons/Backup';
import Collapse from '@material-ui/core/Collapse';
import Photo from '@material-ui/icons/Photo';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Admins from '@material-ui/icons/SupervisedUserCircle';
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../../../Settings/ReduxStore/stateReducer'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    flex: 1, 
    flexDirection: 'column', 
    display: 'flex' 
  },
  nested: {
    paddingLeft: theme.spacing.unit * 4,
  },
  list: {
		width: '100%',
    position:'relative',
    zIndex: 1,
    height: '611px'
  },

});

class SelectedListItem extends React.Component {
  state = {
    selectedIndex: 1,
    open: false,

  };

  handleListItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
     if(index===0){ReactDOM.render(<A1 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===1){ReactDOM.render(<A1 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===2){ReactDOM.render(<A2 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===3){ReactDOM.render(<A3 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===4){ReactDOM.render(<A4 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===5){ReactDOM.render(<A5 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===6){ReactDOM.render(<A6 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===7){ReactDOM.render(<A7 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===8){ReactDOM.render(<A8 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===9){ReactDOM.render(<A9 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===10){ReactDOM.render(<A10 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===11){ReactDOM.render(<A11 lang={this.props.lang}/>,document.getElementById("PaperTable"))}
else if(index===12){ReactDOM.render(<A12 lang={this.props.lang}/>,document.getElementById("PaperTable"))}

  };
  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.list} style={{maxHeight: '100%', overflow: 'auto'}}>

      <Spring from={{opacity:0,}} to={{opacity:1,height:'100%'}} config={{delay:800,duration:800}}>{props=>(
      <div className={classes.root} style={props}>
        <List component="nav" >
        <ListItem>
        </ListItem>
        <Divider />
          {/************************************/}
          <ListItem button selected={this.state.selectedIndex === 1} onClick={event => this.handleListItemClick(event, 1)} >
            <ListItemIcon>
              <Photo />
            </ListItemIcon>
            <ListItemText primary="Articles Accueil" />
          </ListItem>
          {/************************************/}
          <ListItem button selected={this.state.selectedIndex === 2} onClick={event => this.handleListItemClick(event, 2)} >
            <ListItemIcon>
              <PhotoCamera />
            </ListItemIcon>
            <ListItemText primary="Articles Ressources" />
          </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 3} onClick={event => this.handleListItemClick(event, 3)}  >
          <ListItemIcon>
            <Backup />
          </ListItemIcon>
          <ListItemText primary="Administrateurs " />
        </ListItem>
          {/************************************/}
          <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText inset primary="Indicateurs" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button selected={this.state.selectedIndex === 4} onClick={event => this.handleListItemClick(event, 4)} className={classes.nested}>
              <ListItemIcon>
                <Water />
              </ListItemIcon>
              <ListItemText inset primary="Qualité d'Air" />
            </ListItem>
          </List>
          {/*******************/}
          <List component="div" disablePadding>
            <ListItem button selected={this.state.selectedIndex === 5} onClick={event => this.handleListItemClick(event, 5)} className={classes.nested}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText inset primary="Eau" />
            </ListItem>
          </List>
          {/*******************/}
          <List component="div" disablePadding>
            <ListItem button selected={this.state.selectedIndex === 6} onClick={event => this.handleListItemClick(event, 6)} className={classes.nested} >
              <ListItemIcon>
                <Energy />
              </ListItemIcon>
              <ListItemText inset primary="Energies" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem button selected={this.state.selectedIndex === 7} onClick={event => this.handleListItemClick(event, 7)} >
          <ListItemIcon>
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Dechets" />
        </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 8} onClick={event => this.handleListItemClick(event, 8)} >
          <ListItemIcon>
            <PhotoCamera />
          </ListItemIcon>
          <ListItemText primary="Recyclage" />
        </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 9} onClick={event => this.handleListItemClick(event, 9)} >
          <ListItemIcon>
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Transport" />
        </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 10} onClick={event => this.handleListItemClick(event, 10)} >
          <ListItemIcon>
            <PhotoCamera />
          </ListItemIcon>
          <ListItemText primary="Flore" />
        </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 11} onClick={event => this.handleListItemClick(event, 11)} >
          <ListItemIcon>
            <Photo />
          </ListItemIcon>
          <ListItemText primary="Faune" />
        </ListItem>
        {/************************************/}
        <ListItem button selected={this.state.selectedIndex === 12} onClick={event => this.handleListItemClick(event, 12)} >
          <ListItemIcon>
            <PhotoCamera />
          </ListItemIcon>
          <ListItemText primary="Videos" />
        </ListItem>
        {/************************************/}
        
        <ListItem button selected={this.state.selectedIndex === 12} onClick={event => this.handleListItemClick(event, 12)} >
          <ListItemIcon>
            <Admins />
          </ListItemIcon>
          <ListItemText primary="Adminstrateurs" />
        </ListItem>
        </List>
        <Divider />
         <ListItem button selected={this.state.selectedIndex === 2} onClick={event => this.handleListItemClick(event, 1)} >
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Indicateurs" />
          </ListItem> 
          {/* <List component="nav">
          <ListItem
            button
            selected={this.state.selectedIndex === 2}
            onClick={event => this.handleListItemClick(event, 2)}
          >
            <ListItemText primary="Trash" />
          </ListItem>
          <ListItem
            button
            selected={this.state.selectedIndex === 3}
            onClick={event => this.handleListItemClick(event, 3)}
          >
            <ListItemText primary="Spam" />
          </ListItem>
        </List> */}
      </div>
       )}
       </Spring>
       </div>
    );
  }
}

SelectedListItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(SelectedListItem));
