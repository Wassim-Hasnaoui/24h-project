import React from 'react';
import Users from './components/users';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Users List</h1>
      </header>
      <main>
        <Users />
      </main>
      <footer>
        {/* Add footer content here */}
      </footer>
    </div>
  );
}

export default App;
