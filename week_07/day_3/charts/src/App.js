import React from 'react';
import ChartsContainer from './containers/ChartsContainer';

function App() {
  return (
    <div className="wrapper">
      <h1 class="header">{"<<"} Top 20 Charts {">>"}</h1>
      <ChartsContainer />
    </div>
  );
}

export default App;