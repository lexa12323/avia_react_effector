import React from 'react';
import { FilterContainer } from 'container/FilterContainer'
import { SortContainer } from 'container/SortContainer'
import { TicketsContainer } from 'container/TicketsContainer'
import './App.sass';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{display:'flex'}}>
        <div>
          <FilterContainer />
        </div>
        <div>
          <SortContainer />
          <TicketsContainer />
        </div>
        
      </header>
    </div>
  );
}

export default App;
