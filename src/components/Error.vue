<template>
  <div>
    <img class="not_found" src="../assets/404.png" alt="no encontrado" />
    <p>No encontramos datos de {{error}}...</p>
  </div>
</template>

<script>

export default {
  name: "Error",
  props: {
    error: String
  }
}
</script>

<style scoped>
.not_found{
  display: block;
  margin: 30px auto;
  height: 150px;
  width: auto;
}
</style>