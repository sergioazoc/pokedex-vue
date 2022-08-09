import { defineStore } from 'pinia'
import * as pokemonService from '@/services/pokemonService'
import type { Pokemon } from '@/interfaces/pokemonInterface'

interface State {
  pokemon: Pokemon,
  pokemonList: {
    name: string
  }[] | null
}

export const usePokemonStore = defineStore({
  id: 'pokemon',

  state: (): State => ({
    pokemon: {
      height: null,
      id: null,
      name: null,
      stats: null,
      types: null,
      weight: null
    },
    pokemonList: null
  }),

  getters: {
  
  },

  actions: {
    getPokemon(id: string) {
      pokemonService.getPokemon(id)
        .then(response => {
          this.pokemon.height = response.height
          this.pokemon.id = response.id
          this.pokemon.name = response.name
          this.pokemon.stats = response.stats
          this.pokemon.types = response.types
          this.pokemon.weight = response.weight
        })
    },

    getPokemonList() {
      pokemonService.getPokemonList()
        .then(response => {
          this.pokemonList = response.results
        })
    }
  }
})
