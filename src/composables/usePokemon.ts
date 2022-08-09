import { ref } from 'vue'

const usePokemon = () => {
  
  const pokemonNumber = (pokemonId: string) => {
    const number = ref()

    switch (pokemonId.length) {
      case 1:
        number.value = '00' + pokemonId
        break
      case 2:
        number.value = '0' + pokemonId
        break
      case 3:
        number.value = pokemonId
        break
    }

    return number.value
  }

  return {
    pokemonNumber
  }
}

export default usePokemon