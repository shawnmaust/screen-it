import React from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import './App.css';


function App() {

  return (
    <div className="container">
      <header>
        <h1>Screen It</h1>
      </header>
      <MovieForm /> 
      <MovieList /> 
    </div>
  );
}

export default App;
