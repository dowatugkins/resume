import React, { useState } from 'react';

import { resumeList } from './config/constants';
import ResumeContainer from './components/ResumeContainer';
import './App.css';

function App() {
  const [infoBoxOpen, setInfoBoxOpen] = useState(false);

  const onOpenInfoBox = (event: Event) => {
    event?.stopPropagation();
    setInfoBoxOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="App">
      <ResumeContainer
        isOpen={infoBoxOpen}
        onOpenInfoBox={onOpenInfoBox}
        list={resumeList}
        initialIndex={0}
      />
    </div>
  );
}

export default App;
