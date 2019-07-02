import React, { Component } from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Drawer from '@material-ui/core/Drawer'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import menuItems from './menItems.json'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { mapDispatchToProps } from '../../../Settings/ReduxStore/langActions'
import { mapStateToProps } from '../../../Settings/ReduxStore/stateReducer'


// const MaterialIcon = ({ icon }) => {
// 	console.log(icon)
// 	let resolved = require(`@material-ui/icons/${icon}`).default
// 	if (!resolved) {
// 			throw Error(`Could not find @material-ui/icons/${icon}`)
// 	}
// 	return React.createElement(resolved)
// }

// const MateriaComponent = ({ ComponentName }) => {

// 	console.log(ComponentName)
// 	let resolved = require(`../../${ComponentName}`).default
// 	if (!resolved) {
// 			throw Error(`Could not find `)
// 	}
// 	return React.createElement(resolved)
// }

// // .MenuBar-list-265 {
// // height:'100%'
// // }

// // .MuiDrawer-docked-269 {
// //  height: 100%;
// // }
// const styles = {
//   list: {
// 		width: '100%',
//     position:'relative',
//     zIndex: 1,
//     height: '611px'
//   },
//   links: {
//     textDecoration:'none',
//   },
//   menuHeader: {
//     paddingLeft: '10px'

//   }
// };
class MenuBar extends Component {
//   constructor( props ) {
//     super( props )
//     this.state = {}
//   }
// // this method sets the current state of a menu item i.e whether it is in expanded or collapsed or a collapsed state
// handleClick( item ) {
// 	console.log(item)
//     this.setState( prevState => ( 
//       { [ item ]: !prevState[ item ] } 
//     ) )
// 	}

// 	handleClick2( item ) {
// 		ReactDOM.render(
// 			<div style={{height: '100%'}} ><MateriaComponent ComponentName={item} /></div>
// 	 ,
// document.getElementById("PaperTable")
// )
// 	}
// // if the menu item doesn't have any child, this method simply returns a clickable menu item that redirects to any location and if there is no child this method uses recursion to go until the last level of children and then returns the item by the first condition.
// handler( children ) {
//     const { classes } = this.props
// 		const { state } = this
//   //   {
//   //     "name": "Backup",
//   //     "url": "/item1",
//   //     "icon": "Backup",
//   //     "id":0,
//   //     "component":"conponents/ConfigAdmin/tableAccueil.js"
//   // },
    

// return children.map( ( subOption ) => {
//       if ( !subOption.children ) {
//         return (
//           <div key={ subOption.name }>
//             <ListItem  button key={ subOption.name } onClick={ () => this.handleClick2( subOption.component ) }   >
// 						<MaterialIcon icon={subOption.icon} />
// 							<Link  							
// 							 onClick={event=>{console.log(subOption.name)}}   
// 							to="#" 
// 							className={ classes.links }>
//                 <ListItemText  inset  primary={ subOption.name } />
//               </Link>
//             </ListItem>
//           </div>
//         )
//       }
//       return (
//         <div key={ subOption.name }>
//           <ListItem  button  onClick={ () => this.handleClick( subOption.name ) }>
// 						<ListItemText  inset  primary={ subOption.name } />
// 						{ state[ subOption.name ] ?  <ExpandLess /> : <ExpandMore /> }
						
//           </ListItem>
//           <Collapse  in={ state[ subOption.name ] }  timeout="auto"  unmountOnExit >
//             { this.handler( subOption.children ) }
//           </Collapse>
//         </div>
//       )
//     } )
//   }
render() {
    // const { classes } = this.props
    // console.log("menu bar")

    // console.log(this.props.lang)

    return (<></>
      // <div className={classes.list}>
      //   <Drawer  variant="persistent"  anchor="left" open classes={ { paper: classes.list } }>
      //     <div>
      //       <List>
      //         <ListItem  key="menuHeading" divider disableGutters >
      //           <ListItemText className={ classes.menuHeader } inset primary="Nested Menu" />
      //         </ListItem>
      //       		{ this.handler( menuItems.data ) }
      //       </List>
      //     </div>
      //   </Drawer>
      // </div>
    )
  }
}
export default MenuBar
//withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(MenuBar));
