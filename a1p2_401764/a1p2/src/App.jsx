// src/App.jsx

import React from 'react';
import Greeting1 from './components/Greeting1';
import ConditionalMessage1 from './components/ConditionalMessage1';
import ItemList1 from './components/ItemList1';
import ButtonClick1 from './components/ButtonClick1';
import Welcome from './components/Welcome';
import LoginMessage from './components/LoginMessage';
import FruitList from './components/FruitList';
import ToggleButton from './components/ToggleButton';
import Greeting from './components/Greeting';
import ProfileCard from './components/ProfileCard';
import Container from './components/Container';
import ProductList from './components/ProductList';
import HighlightTaskList from './components/HighlightTaskList';
import NestedTaskList from './components/NestedTaskList';

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <Greeting1 />
      <ConditionalMessage1 isLoggedIn={true} />
      <ItemList1 />
      <ButtonClick1 />
      <Welcome />
      <LoginMessage isLoggedIn={true} />
      <FruitList />
      <ToggleButton />
      <Greeting message="Good Morning!" />
      <ProfileCard name="John Doe" age={30} location="New York" />
      <Container>
        <p>This is inside the container</p>
      </Container>
      <ProductList />
      <HighlightTaskList />
      <NestedTaskList />
    </div>
  );
}

export default App;
