import React from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import './App.css';

// configuration for the Particles package.
const particleOptions = {
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}

function App() {
  return (
    <div className="App">
      <Particles className='particles'
        params={particleOptions}
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*
      <FaceRecon />*/}
    </div>
  );
}

export default App;
