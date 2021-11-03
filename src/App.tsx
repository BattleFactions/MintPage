import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Rarity from 'app/pages/Rarity';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <Rarity />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
