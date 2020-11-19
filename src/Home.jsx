import React from 'react';
import Pokedex from './Pokedex';

export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.props.pokemons} />
      </div>
    )
  }
}