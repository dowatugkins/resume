import React, { useState } from 'react';

import { resumeList } from './config/constants';
import Headers from './components/Headers';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="App">
      <div className="display">
        <Headers list={resumeList} initialIndex={0} onIndexChange={(index) => setCurrentIndex(index)} />
        {/* timeline with currentIndex */}
        {/* more section for currentIndex */}
      </div>
    </div>
  );
}

export default App;
