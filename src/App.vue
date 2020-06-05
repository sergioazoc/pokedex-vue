<template>
  <div id="app">
    <Pokemon />
  </div>
</template>

<script>
import Pokemon from "./components/Pokemon.vue";

export default {
  name: "App",
  components: {
    Pokemon
  }
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.input{
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: .25rem 0 0 .25rem;
}
.btn{
  display: inline-block;
  padding: .375rem .75rem;
  font-size: 1rem;
  border-radius: 0 .25rem .25rem 0;
  background-color: #e3350d;
  border-color: #e3350d;
  color: #ffffff;
}

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
