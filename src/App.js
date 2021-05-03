import React from 'react';
import Card from './components/Cards';
import Navbar from './components/Navbar';
import OD from './components/OD';
import WB from './components/WB';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Card />
      {/* <OD />
      <WB /> */}
    </div>
  );
}

export default App;