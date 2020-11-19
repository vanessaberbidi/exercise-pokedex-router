import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import PokemonDetails from './PokemonDetails';
import Nav from './Nav';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Route exact path="/" render={() => <Home pokemons={pokemons}/>} />
      <Route path="/pokemon/:id" render={(props) => <PokemonDetails {...props} pokemon={pokemons[1]}/>} />
    </BrowserRouter>
  );
}

export default App;