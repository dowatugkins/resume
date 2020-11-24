import React, { useState } from 'react';

import { resumeList } from './config/constants';
import Headers from './components/Headers';
import './App.css';

function App() {
  const [infoBoxOpen, setInfoBoxOpen] = useState('closed');

  const onOpenInfoBox = (e) => {
    e.stopPropagation();
    setInfoBoxOpen((prevOpen) => prevOpen === 'closed' ? 'open' : 'closed');
  };

  return (
    <div className="App">
      <div className="display">
        <Headers isOpen={infoBoxOpen} onOpenInfoBox={onOpenInfoBox} list={resumeList} initialIndex={0} />
      </div>
    </div>
  );
}

export default App;
