<template>
  <img class="pokeball" src="../assets/pokeball.svg" alt="cargando">
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.pokeball{
  display: block;
  width: 60px;
  height: 60px;
  margin: 50px auto 0 auto;
  animation:movePokeball 1s linear infinite both;
}
@keyframes movePokeball{
  0%{
    transform:translateX(0) rotate(0);
  }
  15%{
    transform:translatex(-10px) rotate(-5deg);
  }
  30%{
    transform:translateX(10px) rotate(5deg);
  }
  45%{
    transform:translatex(0) rotate(0);
  }
}
</style>