<script>
// import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'NavBar',
  data() {
    return {
      showNavbar: false
    }
  },
  methods: {
    toggleNavbar() {
      this.showNavbar = !this.showNavbar
    },
    hideNavbar() {
      this.showNavbar = false
    }
  }
}
</script>
<template>
  <button class="navbar-toggle" @click="toggleNavbar">
    <div class="bar1" :class="{ showNav: showNavbar }"></div>
    <div class="bar2" :class="{ showNav: showNavbar }"></div>
    <div class="bar3" :class="{ showNav: showNavbar }"></div>
  </button>
  <nav class="navbar" :class="{ show: showNavbar }">
    <div class="navbar-logo">
      <RouterLink class="navbar-item" to="/"
        ><img src="../assets/logoColor.png" alt="Logo"
      /></RouterLink>
    </div>
    <ul class="navbar-items" @click="hideNavbar">
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
.navbar-logo {
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
  font-family: 'Outfit', sans-serif;
}
.navbar-toggle {
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  display: none;
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 2;
}
.bar1,
.bar2,
.bar3 {
  width: 2rem;
  height: 3px;
  background-color: #333;
  margin: 6px 0;
  transition: 0.4s;
}

@media screen and (max-width: 768px) {
  .navbar {
    justify-content: space-between;
    align-items: flex-start;
    padding: 1rem 1rem;
    flex-direction: column;
    height: auto;
    transform: translateY(-100%);
    transition: transform 0.3s ease;
  }
  .navbar.show{
    transform: translateY(0);
  }
  .navbar-logo {
    display: none;
  }
  .navbar-toggle {
    display: inline-block;
  }
  .bar1.showNav {
    transform: translate(0, 12px) rotate(-45deg);
  }

  .bar2.showNav {
    opacity: 0;
  }

  .bar3.showNav {
    transform: translate(0, -6px) rotate(45deg);
  }
  .navbar-items {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-end;
    padding: 4rem 0;
    font-size: 1.5rem;
  }
  .navbar-items li {
    padding: 10px 0;
    text-align: center;
    border-top: 1px solid #ccc;
  }
}
</style>
