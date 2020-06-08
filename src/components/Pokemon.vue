<template>
  <div>
    <h1>Busca un Pokémon (nombre o número):</h1>

    <input class="input" v-model="pokemonToFind" @keyup.enter="findPokemon(pokemonToFind)" type="text">

    <button class="btn" @click="findPokemon(pokemonToFind)">Buscar</button>

    <div v-if="pokemon && !error">
      <h2>N°{{pokemon.id}} {{pokemon.species.name.toUpperCase()}}</h2>
      <img :src="pokemon.sprites.front_default"/>
      <p>
        <strong>Tipo:</strong> 
        <span class="type" :class="type.type.name" v-for="(type, index) in pokemon.types" :key="index">
          {{changeLangType(type.type.name)}}
        </span>
      </p>

      <div class="stats">
        <div class="stat" v-for="(stat, index) in pokemon.stats" :key="index">
          <div>
            {{changeLangStats(stat.stat.name)}}
          </div>
          <div class="bar_container">
            <div class="bar" :style= "'width:' + stat.base_stat +'px'">
              {{stat.base_stat}}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="error" v-else-if="error">
      <img class="not_found" src="../assets/404.png" alt="no encontrado" />
      <p v-if="vacio">Deberías escribir algo...</p>
      <p v-else>{{pokemonFail}} no encontrado...</p>
    </div>

    <img v-if="loading" class="pokeball" src="../assets/pokeball.svg" alt="cargando">

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
      pokemonFail: "",
      error: false,
      vacio: false,
      loading: false,
      types_api: [
        {en: "normal", es: "normal"},
        {en: "fighting", es: "lucha"},
        {en: "flying", es: "volador"},
        {en: "poison", es: "veneno"},
        {en: "ground", es: "tierra"},
        {en: "rock", es: "roca"},
        {en: "bug", es: "bicho"},
        {en: "ghost", es: "fantasma"},
        {en: "steel", es: "acero"},
        {en: "fire", es: "fuego"},
        {en: "water", es: "agua"},
        {en: "grass", es: "hierba"},
        {en: "electric", es: "eléctrico"},
        {en: "psychic", es: "psíquico"},
        {en: "ice", es: "hielo"},
        {en: "dragon", es: "dragón"},
        {en: "dark", es: "oscuridad"},
        {en: "fairy", es: "hada"}
      ],
      stats_api: [
        {en: "hp", es: "vida"},
        {en: "attack", es: "ataque"},
        {en: "defense", es: "defensa"},
        {en: "special-attack", es: "ataque especial"},
        {en: "special-defense", es: "defensa especial"},
        {en: "speed", es: "velocidad"}
      ]
    }
  },
  methods: {
    findPokemon: function(q){
      if(q == ""){
        this.error = true
        this.vacio = true
      }else{
        this.error = false
        this.pokemon = null
        this.loading = true
        let query = q.toLowerCase()
        axios
          .get(this.url + query)
          .then(response => (this.pokemon = response.data, this.loading = false))
          .catch( () => (this.error = true, this.loading = false, this.vacio = false, this.pokemonFail = this.pokemonToFind))
      }
    },
    changeLangType: function(type){
      for (let index = 0; index < this.types_api.length; index++) {
        if (type === this.types_api[index].en){
          return this.types_api[index].es
        }
      }
    },
    changeLangStats: function(stat){
      for (let index = 0; index < this.stats_api.length; index++) {
        if (stat === this.stats_api[index].en){
          return this.stats_api[index].es
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
.stats{
  text-align: left;
  margin: 30px auto;
  max-width: 360px;
  padding: 0 5px;
}
.stat{
  display: flex;
  margin: 5px 0;
  justify-content: space-between;
}

.bar_container {
position: relative;
width: 216px;
border: 1px solid #e3350d;
height: 26px;
}
.bar {
display: block;
position: relative;
background: #e3350d;
color: #ffffff;
padding: 4px 8px;
}
.grafico .barra span {
position: absolute; left: 1em;
}
</style>