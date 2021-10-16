import React, { Component } from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter'
import LikeCounter from './components/LikeCounter'
import HahaCounter from './components/HahaCounter'
// import User from './components/User';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Counter render = { (count, incrementCount) => (
        <ClickCounter count={count} incrementCount= {incrementCount}>
        </ClickCounter>)}/>

        <Counter render = { (count, incrementCount) => (
        <HoverCounter count={count} incrementCount= {incrementCount}>
        </HoverCounter>)}/>

        <Counter render = { (count, incrementCount) => (
        <LikeCounter count={count} incrementCount= {incrementCount}>
        </LikeCounter>)}/>

        <Counter render = { (count, incrementCount) => (
        <HahaCounter count={count} incrementCount= {incrementCount}>
        </HahaCounter>)}/>

        {/* <User/> */}
      </div>
    );
  }
}


export default App;
