<template>
  <div>
    <h1>Busca un Pokémon (nombre o número):</h1>
    <input v-model="pokemonToFind" @keyup.enter="findPokemon(pokemonToFind)" type="text">
    <button @click="findPokemon(pokemonToFind)">Buscar</button>
    <div v-if="pokemon && !error">
      <h2>N°{{pokemon.id}} {{pokemon.species.name.toUpperCase()}}</h2>
      <img :src="pokemon.sprites.front_default"/>
      <p>Tipo: <span class="type" :class="type.type.name" v-for="(type, index) in pokemon.types" :key="index">{{type.type.name}}</span></p>
    </div>
    <div class="error" v-else-if="error">{{error}}</div>
    <img v-if="loading" class="pokeball" src="/pokeball.svg" alt="">
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
      error: "",
      loading: false
    }
  },
  methods: {
    findPokemon: function(q){
      this.error = ""
      this.pokemon = null
      this.loading = true
      let query = q.toLowerCase()
      axios
        .get(this.url + query)
        .then(response => (this.pokemon = response.data, this.loading = false))
        .catch( () => (this.error = "Pokémon no encontrado 404", this.loading = false))
    }
  }
};
</script>

<style scoped>
.error{
  margin-top: 30px;
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