import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;