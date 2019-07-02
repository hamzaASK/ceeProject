const styles = theme => ({
  Button:{
      background: 
            'linear-gradient(to right bottom, #00FF00,#000000,#000000)'  },
root: {
  background: 
  'radial-gradient(circle at 20% 20%,rgba(30, 37, 30,1),rgba(33, 100, 34,0) 44.71%),radial-gradient(circle at 25.7% 60%,rgba(125, 180, 1,1),rgba(33, 100, 34,0) 30.71%),radial-gradient(circle at 80.3% 20%,rgba(125, 180, 1,1),rgba(33, 100, 34,1) 30.71%) beige',
 height:'auto'
},
paper: {
  //marginTop: theme.spacing.unit * 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  height:'auto',
  width:330,
  marginTop: '70px'

},
paper_center_image:{ 
 // marginTop: theme.spacing.unit * 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  height:400,
  width:330,
  opacity: 0.9, 
  backgroundImage: "url(img/img-util/7.jpg)",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat', 

},
paper_Left_color:{ 
  //marginTop: theme.spacing.unit * 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  height:400,width:20,
  background:'linear-gradient(to right top,rgba(0, 255, 0,0.3),rgba(30, 37, 30,1)) '
},
logo:{
    height:'100px' , 
    width: '100px',
    backgroundColor: 'transparent',
    border: '5px solid #F5F5F5',
    margin: theme.spacing.unit,
  },
  welcome:{
    //marginTop:50,
    color:'#F5F5F5'},
control: {
  padding: theme.spacing.unit * 2,
},
main: {
  width: 'auto',
  display: 'block', // Fix IE 11 issue.
  marginLeft: theme.spacing.unit * 3,
  marginRight: theme.spacing.unit * 3,
  [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
    width: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  
},
chip:{background: 
  'linear-gradient(to right top, #00FF00,#000000,#000000)'},
avatar: {
  margin: theme.spacing.unit,
  backgroundColor: '#BD1A60',
  background: 
            'linear-gradient(to right bottom, #00FF00,#000000,#000000)'
},
form: {
  width: '100%', // Fix IE 11 issue.
  //marginTop: theme.spacing.unit,
},
submit: {
  //marginTop: theme.spacing.unit * 3,
}
});
export default  styles;