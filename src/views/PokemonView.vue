<script lang="ts" setup>
import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import usePokemon from '@/composables/usePokemon'

const { pokemonNumber } = usePokemon()
const route = useRoute()

const pokemonStore = usePokemonStore()
const { pokemon } = storeToRefs(pokemonStore)

pokemonStore.getPokemon(String(route.params.id))

pokemonNumber(String(route.params.id))

watch(() => route.params.id, () => {
  pokemonNumber(String(route.params.id))
})
</script>

<template>
<img :src="`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonNumber(String(route.params.id))}.png`" alt="">

<pre>
{{ pokemon }}
</pre>
</template>

<style>

</style>
