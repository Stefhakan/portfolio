import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Body/Home';
import 'tachyons';
import ProjectCardList from './components/Projects/ProjectCardList/ProjectCardList';
import EndFoot from './components/EndFoot/EndFoot';



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Home />
        <ProjectCardList />
        <EndFoot />
      </div>
    )
  }
}

export default App
