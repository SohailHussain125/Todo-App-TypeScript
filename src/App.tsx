import React from 'react';
import './App.css';
import  TodoContainer from './component/todoContainer/index';
const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <header className="App-header">
        Todo App Type Script
        <TodoContainer />
      </header>
    </div>
  );
}

export default App;
