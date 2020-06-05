<template>
  <div>
    <h1>Busca un Pokémon (nombre o número):</h1>
    <input v-model="pokemonToFind" type="text">
    <button @click="findPokemon(pokemonToFind)">Buscar</button>
    <div v-if="pokemon">
      <h2>N°{{pokemon.id}} {{pokemon.species.name.toUpperCase()}}</h2>
      <img :src="pokemon.sprites.front_default"/>
      <p>Tipo <span class="type" :class="type.type.name" v-for="(type, index) of pokemon.types" :key="index">{{type.type.name}}</span></p>
    </div>
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
      pokemonToFind: ""
    }
  },
  methods: {
    findPokemon: function(q){
      axios.get("https://pokeapi.co/api/v2/pokemon/"+q)
        .then(response => (this.pokemon = response.data))
    }
  }
};
</script>

<style scoped>
.type{
  margin: 0 5px;
  padding: 6px 10px;
  color: #ffffff;
  border-radius: 10px;
}
.normal{
  background-color: #a4acaf;
}
.fighting{
  background-color: #d56723;
}
.flying{
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
.poison{
  background-color: #b97fc9;
}
.ground{
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
}
.rock{
  background-color: #a38c21;
}
.bug{
  background-color: #729f3f;
}
.ghost{
  background-color: #7b62a3;
}
.steel{
  background: linear-gradient(180deg, #9eb7b8 50%, #9eb7b8 50%);
}
.fire{
  background-color: #fd7d24;
}
.water{
  background-color: #4592c4;
}
.grass{
  background-color: #9bcc50;
}
.electric{
  background-color: #eed535;
}
.psychic{
  background-color: #f366b9;
}
.ice{
  background-color: #51c4e7;
}
.dragon{
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
}
.dark{
  background-color: #707070;
}
.fairy{
  background-color: #fdb9e9;
}
</style>