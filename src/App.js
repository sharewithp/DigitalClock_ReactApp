import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {

  constructor(){
    super()
     this.state={time:new Date()}
  }
   currentTime() {
     this.setState({
       time:new Date()
     })
   }
   componentWillMount(){
     setInterval(()=>this.currentTime(),500)
   }

  render() {
    return (
      <h1>
        {this.state.time.toLocaleTimeString()}
      </h1>
    )
  }
}
export default App;