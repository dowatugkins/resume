import React, { useState } from 'react';

import { resumeList } from './config/constants';
import Headers from './components/Headers';
import InfoBox from './components/InfoBox';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [infoBoxOpen, setInfoBoxOpen] = useState('closed');

  const onOpenInfoBox = (e) => {
    e.stopPropagation();
    setInfoBoxOpen((prevOpen) => prevOpen === 'closed' ? 'open' : 'closed');
  };

  return (
    <div className="App">
      <div className="display">
        <Headers isOpen={infoBoxOpen} onOpenInfoBox={onOpenInfoBox} list={resumeList} initialIndex={0} onIndexChange={(index) => setCurrentIndex(index)} />
        <InfoBox item={resumeList[currentIndex]} isOpen={infoBoxOpen} list={resumeList} currentIndex={currentIndex}/>
      </div>
    </div>
  );
}

export default App;
