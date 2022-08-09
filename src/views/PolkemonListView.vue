<script lang="ts" setup>
import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'
import { RouterLink } from 'vue-router'
import usePokemon from '@/composables/usePokemon'

const { pokemonNumber } = usePokemon()
const pokemonStore = usePokemonStore()
const { pokemonList } = storeToRefs(pokemonStore)

pokemonStore.getPokemonList()

</script>

<template>
  <div class="row row-cols-3">
    <div v-for="(pokemon, index) in pokemonList" :key="pokemon.name" class="col">
      <RouterLink :to="{ name: 'pokemon', params: { id: index+1 } }">
        <img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonNumber(String(index+1))}.png`" alt="">
      </RouterLink>
      {{ pokemon.name }}
    </div>
  </div>
</template>
