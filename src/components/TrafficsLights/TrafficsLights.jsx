import React from 'react';
import './styles.css';

const TrafficsLights = ({ color, active }) => {

  let lightColor = '';
  let activated = active ? '' : 'not-activated';

  if (color === 'R'){
    lightColor = 'circle-red';
  }
  if (color === 'Y'){
    lightColor = 'circle-yellow';
  }
  if (color === 'G'){
    lightColor = 'circle-green';
  }

  return(
    <div className={`circle ${lightColor} ${activated}`}></div>
  );
}


export default TrafficsLights;
