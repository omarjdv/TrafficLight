import React, { Component } from 'react';
import TrafficsLights from './components/TrafficsLights';
import './App.css';


let Secuencia = [];


class App extends Component {

  state = {
    active: 'all',
  }

setLights = (index) => {
  this.setState({
    active: Secuencia[index].color,
  });
  let newIndex = index + 1;
  if (index === Secuencia.length - 1 ) {
    newIndex = 0;
  };
  const newDuration = parseInt(Secuencia[index].duration) * 1000;
  setTimeout(()=> this.setLights(newIndex), newDuration);
}

async componentDidMount () {
  const response = await fetch('https://api-pre.americadigital.com.ar/contents/semaphore/random');
  const data = await response.json();
  Secuencia = data.data;
  setTimeout(()=> this.setLights(0), 4000);
}

  render(){
    const { active } = this.state;
    return (
     <div className="trafficslights"> <h1>Traffics Lights</h1>
       <div className="App trafficslightscontainer ">
        <TrafficsLights active={active === 'all' || active === 'R'} color='R'/>
        <TrafficsLights active={active === 'all' || active === 'Y'} color='Y'/>
        <TrafficsLights active={active === 'all' || active === 'G'} color='G'/>
      </div>
      <p>A component React that represent the functionality of one traffic light is displayed, checking the following endpoint of an API. <a href="https://api-pre.americadigital.com.ar/contents/semaphore/random" target="_blank">link</a> Once it starts, a light is displayed according to the random response of the API.</p>
     </div>

    );
  }
  }

  export default App;
