import React, { useState } from 'react';

function App () {
  const [bgColor, setBgColor] = useState('white')

  const changeColor = (color) => {
  setBgColor(color) 
  }

  return (
    <div style={{ backgroundColor: bgColor, height: '100vh', transition: 'background-color 0.5s' }} className="d-flex flex-column align-items-center justify-content-center">
      <h1 className="text-center fw-bolder">Change Background Color</h1>
      <div>
        <button className="btn btn-danger m-2" onClick={() => changeColor('red')}>Red</button>
        <button className="btn btn-primary m-2" onClick={() => changeColor('blue')}>Blue</button>
        <button className="btn btn-success m-2" onClick={() => changeColor('green')}>Green</button>
        <button className="btn btn-warning m-2" onClick={() => changeColor('yellow')}>Yellow</button>
      </div>
    </div>
  )
}

export default App;