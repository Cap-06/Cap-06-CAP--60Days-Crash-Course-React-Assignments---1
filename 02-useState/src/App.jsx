// src/App.jsx

import React from 'react';
import Counter1 from './components/Counter1';
import ScoreKeeper from './components/ScoreKeeper';
import TextInput1 from './components/TextInput1';
import UsernameInput from './components/UsernameInput';
import ToggleMessage1 from './components/ToggleMessage1';
import ShowHideText from './components/ShowHideText';
import UserInfo1 from './components/UserInfo1';
import ProfileUpdater from './components/ProfileUpdater';
import ItemList1 from './components/ItemList1';
import TaskManager from './components/TaskManager';

function App() {
  return (
    <div>
      <h1>React useState Hook Examples</h1>
      <h2>Counter1</h2>
      <Counter1 />
      
      <h2>ScoreKeeper</h2>
      <ScoreKeeper />
      
      <h2>TextInput1</h2>
      <TextInput1 />
      
      <h2>UsernameInput</h2>
      <UsernameInput />
      
      <h2>ToggleMessage1</h2>
      <ToggleMessage1 />
      
      <h2>ShowHideText</h2>
      <ShowHideText />
      
      <h2>UserInfo1</h2>
      <UserInfo1 />
      
      <h2>ProfileUpdater</h2>
      <ProfileUpdater />
      
      <h2>ItemList1</h2>
      <ItemList1 />
      
      <h2>TaskManager</h2>
      <TaskManager />
    </div>
  );
}

export default App;
