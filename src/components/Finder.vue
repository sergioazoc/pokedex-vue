<template>
  <div class="finder">
    <h1>Busca tu Pokémon!</h1>
    <form @submit.prevent="findPokemon(pokemonToFind)">
      <input
        class="input"
        v-model="pokemonToFind"
        type="search"
        placeholder="Nombre o Número"
        required
      />
      <input type="submit" class="btn" value="Buscar" />
    </form>
    <Loading v-if="loading" />
    <Pokemon />
    <Error v-if="queryError" :error="queryError" />
  </div>
</template>

<script>
import Pokemon from "./Pokemon.vue";
import Loading from "./Loading.vue";
import Error from "./Error.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Finder",
  data() {
    return {
      pokemonToFind: ""
    };
  },
  methods: {
    ...mapActions(["findPokemon"])
  },
  computed: {
    ...mapState(["loading", "queryError"])
  },
  components: {
    Pokemon,
    Loading,
    Error
  }
};
</script>

<style scoped>
.finder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}
</style>
