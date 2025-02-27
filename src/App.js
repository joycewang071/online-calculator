import React from 'react';
import Calculator from './components/Calculator';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>在线计算器</h1>
      </header>
      <main>
        <Calculator />
      </main>
      <footer>
        <p>© 2024 在线计算器</p>
      </footer>
    </div>
  );
}

export default App; 