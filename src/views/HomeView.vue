<script setup>
import imgHeader from '../components/imgHeader.vue'
import infoHeader from '../components/infoHeader.vue'
import ourFocus from '../components/ourFocus.vue'
import ourServices from '../components/ourServices.vue'
import homeFooter from '../components/homeFooter.vue'

</script>
<template>
  <main class="main">
    <imgHeader />
    <infoHeader />
    <span></span>
    <ourFocus />
    <ourServices/>
    <homeFooter/>
  </main>
</template>

<style scoped>
.main {
  padding: 0 2rem;
}
span {
  border-top: 3px solid rgb(112 112 112 / 19%);
  display: block;
  height: 1rem;
  width: 45%;
  margin-top: 4rem;
  margin-bottom:2rem;
}
@media screen and (max-width: 768px) {
  .main {
    padding: 0;
  }
}
</style>
