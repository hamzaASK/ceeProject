 import React from 'react';
 import Buttons from './buttonNavigationVideo'
 import axios from 'axios'

const urls = [
  "videos/1560854211587.mp4", 
  "videos/1560854222308.mp4",
  "videos/1560854223154.mp4",
  "videos/1560854223531.mp4", 
  "videos/1560854223611.mp4",
  "videos/1560854223812.mp4",
  "videos/1560854224005.mp4", 
  "videos/1560854224201.mp4",
  "videos/1560854224386.mp4",
  "videos/1560854604922.mp4", 
  "videos/1560854646597.mp4",
  "videos/1560949447760.mp4",
  "videos/1560949451668.mp4",
  "videos/1560949474835.mp4",
  "videos/1560949584063.mp4", 
  "videos/1560949619386.mp4",
  "videos/1560949676205.mp4",
];
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
  this._refreshBooks();
}
/***************************************/
  handleEnded(e) {
    const nextUrlIdx = (this.state.currentUrlIdx + 1) % this.state.videos.length
    this.setState({ currentUrlIdx: nextUrlIdx });
  }
/***************************************/

  _refreshBooks() {
    axios.get('http://localhost:8000/api/showvideo').then((response) => {

      const videos = response.data;
      this.setState({videos})
      
     });
     console.log(this.state.videos)
  }

  render() {
    return  <div>
                <Buttons />
                <video width="100%" height="400px" controls src={urls[this.state.currentUrlIdx]} autoPlay onEnded={this.handleEnded}/>
            </div>;
  }
}

export default App;