import React from 'react';
import logo from './logo.svg';
import AddDomain from './components/AddDomain';
import DomainListProvider from './components/DomainListProvider';
import DomainList from './components/DomainList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Big Short
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DomainListProvider>
        <AddDomain />
        <DomainList />
      </DomainListProvider>
    </div>
  );
}

export default App;
