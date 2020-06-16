<template>
  <div id="app">
    <nav class="header">
      <p><strong>Pokedex Vue.js</strong></p>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body{
  margin: 0;
}
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
.header{
  height: 60px;
  width: 100vw;
  padding: 0 10px;
  background-color: #e3350d;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header .links a{
  text-decoration: none;
  padding-left: 10px;
  padding-right: 10px;
  color: #ffe4e4dc;
  height: 100%;
}
.header .links a:last-child{
  padding-right: 0;
}
.header .links a:hover{
  color: #ffffff;
}
.header .links .router-link-exact-active{
  color: #ffffff;
}
.content{
  width: 100vw;
  min-height: calc(100vh - 60px);
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
