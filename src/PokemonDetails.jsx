import React from 'react';
import pokemons from './data';

export default class PokemonDetails extends React.Component {
  render() {
    const getPokemon = pokemons.find((pokemon) => pokemon.id === parseInt(this.props.match.params.id));

    if(!getPokemon) return <div className="pokemon">Ops, Pokemon não encontrado!</div>

    const { name, type, averageWeight, image } = getPokemon;
    return (
      <div className="pokemon">
        <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight: {`${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </div>
        <img src={image} alt={`${name} sprite`} />
      </div>
    )
  }
}