<template>
  <div id="app">
    <div class="header">
      <h1>Pokedex Vue.js</h1>
    </div>
    <div class="content">
      <Finder/>
    </div>
    <div class="footer">
      <a class="coffee" target="_blank" href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V8N7RVKVZY37W&source=url">Me ayudas con un ☕?</a>
    </div>
  </div>
</template>

<script>
import Finder from "./components/Finder.vue";

export default {
  name: "App",
  components: {
    Finder,
    
  }
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
  align-content: space-between;
  flex-wrap: wrap;
}
.header{
  width: 100vw;
  padding: 10px;
  background-color: #e3350d;
  color: #ffffff;
  margin-bottom: 20px;
}
.header h1{
  font-size: 16px;
}
.content{
  width: 100vw;
  min-height: calc(100vh - 110px);
  text-align: center;
}
.footer{
  width: 100vw;
}
.footer{
  margin-bottom: 10px;
  text-align: center;
}
.coffee{
  text-decoration: none;
  margin-bottom: 5px;
  color: #e3350d;
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
