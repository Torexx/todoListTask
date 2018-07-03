import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
   //  getName (lastName) {
   //  return "Timofey " + lastName;
   // }
   // constructor() {
   //  super();
   //  this.name = "Tim";

   
   render() {
    var myStyle = {
      color: 'orange',
      fontSize:50
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 style = {myStyle}> Hello Tim </h1>
        </header>
       
      </div>
    );
  }
}

export default App;
