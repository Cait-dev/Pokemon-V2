import { useNavigate, useParams } from "react-router-dom"
import PokeballImg from "../assets/pokeball.png"
import { Footer } from "../components/Footer"
import styles from './pokemon.module.css'
import { useState, useEffect } from 'react';
import { PokemonDetails } from "../types/types"
import { fetchPokemon } from "../api/fetchPokemon"
import { LoadingScreen } from "../components/LoadingScreen"
import { waitFor } from "../utils/utils";

export const Pokemon = () => {
  const [isloading, setIsLoading] = useState(false);
  const [pokemon, setPokemon] = useState<PokemonDetails>()
    const { name } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
      async function getPokemon() {
        setIsLoading(true)
        await waitFor(1000)
        const fetchedPokemon = await fetchPokemon(name as string)
        setPokemon(fetchedPokemon)
        setIsLoading(false)
      }
      getPokemon();
    }, [name]);

    if(isloading || !pokemon) {
      return <LoadingScreen />;
    }

  return <>
  <button className={styles.pokeballButton} onClick={() => navigate(-1)}>
    <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" /> Go back
  </button>
  <div className={styles.pokemon}>
    <main className={styles.pokemonInfo}>
      <div className={styles.pokemonTitle}>{pokemon?.name?.toUpperCase()}</div>
      <div>Nr. {pokemon?.id}</div>
      <div>
        <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt="{pokemon?.name}" />
      </div>
      <div>HP: {pokemon?.hp}</div>
      <div>ATK: {pokemon?.attack}</div>
      <div>DEF: {pokemon?.defense}</div>
    </main>
  </div>
  <Footer />

  </>
}

