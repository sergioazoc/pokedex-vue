<template>
  <div class="about">
    <h1>About</h1>
    <p>Hola! soy Sergio Azócar Frontend Developer</p>
    <p>Este Pokedex está realizado con:</p>
    <ul>
      <li>Vue.js</li>
      <li>Vuex</li>
      <li>Vue-Router</li>
      <li>PokeApi</li>
      <li>Css (no frameworks)</li>
    </ul>
    <p>Puedes ver el repositorio en mi <a href="https://github.com/sergioazoc/pokedex-vue" target="_blank">GitHub</a></p>
    <p>o pasa a saludar a mi <a href="https://twitter.com/sergioazoc" target="_blank">Twitter</a></p>
  </div>
</template>

<script>

export default {
  name: "About"
};
</script>

<style scoped>
.about{
  padding: 0 15px;
}
.about a{
  text-decoration: none;
  color: #e3350d;
}
</style>