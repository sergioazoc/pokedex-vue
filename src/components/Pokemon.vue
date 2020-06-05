<template>
  <div>
    <h1>Busca un Pokémon (nombre o número):</h1>
    <input v-model="pokemonToFind" @keyup.enter="findPokemon(pokemonToFind)" type="text">
    <button @click="findPokemon(pokemonToFind)">Buscar</button>
    <div v-if="pokemon && !error">
      <h2>N°{{pokemon.id}} {{pokemon.species.name.toUpperCase()}}</h2>
      <img :src="pokemon.sprites.front_default"/>
      <p>Tipo: <span class="type" :class="type.type.name" v-for="(type, index) in pokemon.types" :key="index">{{changeLangType(type.type.name)}}</span></p>
    </div>
    <div class="error" v-else-if="error">
      <img class="not_found" src="/404.png" alt="no encontrado" />
      <p>Pokémon no encontrado...</p>
    </div>
    <img v-if="loading" class="pokeball" src="/pokeball.svg" alt="cargando">
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pokemon",
  data () {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: null,
      pokemonToFind: "",
      error: false,
      loading: false,
      types: [
        {english: "normal", spanish: "normal"},
        {english: "fighting", spanish: "lucha"},
        {english: "flying", spanish: "volador"},
        {english: "poison", spanish: "veneno"},
        {english: "ground", spanish: "tierra"},
        {english: "rock", spanish: "roca"},
        {english: "bug", spanish: "bicho"},
        {english: "ghost", spanish: "fantasma"},
        {english: "steel", spanish: "acero"},
        {english: "fire", spanish: "fuego"},
        {english: "water", spanish: "agua"},
        {english: "grass", spanish: "hierba"},
        {english: "electric", spanish: "eléctrico"},
        {english: "psychic", spanish: "psíquico"},
        {english: "ice", spanish: "hielo"},
        {english: "dragon", spanish: "dragón"},
        {english: "dark", spanish: "oscuridad"},
        {english: "fairy", spanish: "hada"}
      ]
    }
  },
  methods: {
    findPokemon: function(q){
      this.error = false
      this.pokemon = null
      this.loading = true
      let query = q.toLowerCase()
      axios
        .get(this.url + query)
        .then(response => (this.pokemon = response.data, this.loading = false))
        .catch( () => (this.error = true, this.loading = false))
    },
    changeLangType: function(type){
      for (let index = 0; index < this.types.length; index++) {
        if (type === this.types[index].english){
          return this.types[index].spanish
        }
      }
    }
  }
};
</script>

<style scoped>
.error{
  margin-top: 30px;
}

.not_found{
  display: block;
  margin: 0 auto;
  height: 150px;
  width: auto;
}

.pokeball{
  display: block;
  width: 60px;
  height: 60px;
  margin: 50px auto 0 auto;
  animation:movePokeball 1s linear infinite both;
}

@keyframes movePokeball{
  0%{
    transform:translateX(0) rotate(0)
  }
  15%{
    transform:translatex(-10px) rotate(-5deg)
  }
  30%{
    transform:translateX(10px) rotate(5deg)
  }
  45%{
    transform:translatex(0) rotate(0)
  }
}
</style>