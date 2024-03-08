<script>
// import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavBar'
}
</script>
<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <RouterLink class="navbar-item" to="/"><img src="../assets/logoColor.png" alt="Logo" /></RouterLink>
    </div>
    <ul class="navbar-items">
      <RouterLink class="navbar-item" to="/">Inicio</RouterLink>
      <RouterLink class="navbar-item" to="/Servicios">Servicios</RouterLink>
      <RouterLink class="navbar-item" to="/QuienesSomos">Quiénes somos</RouterLink>
      <RouterLink class="navbar-item" to="/Comunicate">Comunícate con nosotros</RouterLink>
      <RouterLink class="navbar-item" to="/blog">Blog</RouterLink>
    </ul>
  </nav>
  <RouterView />
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0px 3px 6px #00000029;
}
.navbar-logo{
  display: flex;
  justify-content: center;
  align-items: center;
}
.navbar-logo img {
  height: 1.2rem;
  cursor: pointer;
  margin-top: 0.2rem;
}

.navbar-items {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.navbar-item {
  margin: 0 1rem;
  cursor: pointer;
  font-weight: 200;
  text-decoration: none;
  color: #464646;
  font-family: "Outfit", sans-serif;
}
</style>
