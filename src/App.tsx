import React from 'react';
import './App.css';
import  TodoContainer from './component/todoContainer/index';
const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo App Type Script</h2>
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
