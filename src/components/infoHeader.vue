<script setup></script>
<template>
  <div class="container">
    <div class="title">
      <h4>Soluciones Transformacionales de estrategia y procesos</h4>
      <span></span>
    </div>
    <p class="description">
      Aportamos toda nuestra experiencia y conocimiento para superar y optimizar la gestión de su
      negocio, de sus procesos empresariales, comerciales y la visión cliente céntrica necesaria
      para diferenciarse del mercado.
    </p>
  </div>
</template>
<style scoped>
.container {
  margin-top: 4vh;
  padding-left: 7vw;
}
.description {
  margin-top: 4vh;
  font-weight: 200;
  width: 45%;
  text-align: justify;
}
.title{
  display: flex;
  align-items: center;
}
.title h4 {
  font-weight: 300;
  font-size: clamp(27px, 8vw, 24px);
  width: 100%;
}
.title span{
  border-top: 3px solid rgb(112 112 112 / 19%);
  width: 90%;
}
@media screen and (max-width: 768px) {
  .description{
    width: 95%;
  }
}
</style>
