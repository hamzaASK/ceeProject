 import React from 'react';
 import Buttons from './buttonNavigationVideo'
 import axios from 'axios'

class App extends React.Component {
 
state = {
    currentUrlIdx: 1,
    videos : [],
    books:[]
  }


  constructor (props) {
    super(props)
    this.handleEnded = this.handleEnded.bind(this);
  }

/***************************************/
componentWillMount() {
  axios.get('http://localhost:8000/api/showvideo').then((response) => {
    const videos = response.data;
    this.setState({videos})
   });
}
/***************************************/
  handleEnded(e) {
    const nextUrlIdx = (this.state.currentUrlIdx + 1) % this.state.videos.length
    this.setState({ currentUrlIdx: nextUrlIdx });
  }
/***************************************/

  render() {
    console.log(this.state.videos)


    let myJson = {};
    for (var k = 1; k <  this.state.videos.length; k++) {
        var objValue ='videos/'+this.state.videos[k].video;
        myJson[k] = objValue;
    }
    // this.setState({
    //   videos:Object.values(myJson)
    // })
    console.log(Object.values(myJson)[0]);


    return  (<div>
                <Buttons />
                <video width="100%" height="400px" controls src={Object.values(myJson)[this.state.currentUrlIdx]} autoPlay onEnded={this.handleEnded}/>
            </div>);
  }
}

export default App;


// let myJson = {};
// for (var k = 1; k <  this.state.books.length; k++) {
//     var objValue ='videos/'+this.state.books[k].video;
//     myJson[k] = objValue;
// }
// this.setState({
//   videos:Object.values(myJson)
// })
// console.log(this.state.videos);



// let myJson = {};
// for (var k = 1; k <  this.state.books.length; k++) {
//     var objValue ='videos/'+this.state.books[k].video;
//     myJson[k] = objValue;
// }
// this.setState({
//   videos:Object.values(myJson)
// })
// vidoes=myJson;
// for (var k = 0; k <  this.state.videos.length; k++) {
//   console.log(this.state.videos)
// }


// console.log('Videos List')
// console.log(vidoes)
