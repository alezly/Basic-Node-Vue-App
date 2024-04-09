<script setup></script>
<template>
  <div class="grid-container">
    <div class="imgFocus">
      <img width="85%" src="../assets/groupOfPersons.png" />
    </div>
    <div class="mainTitle">
      <h1>Nuestro</h1>
      <h4>enfoque</h4>
      <span></span>
    </div>
    <div class="items">
      <div class="box">
        <h1>1.</h1>
        <h2>Diseño Conjunto</h2>
        <p>
          Formamos equipo de trabajo contigo, donde se combina tu conocimiento profundo de la
          organización con nuestra experticia y enfoque metodológico.
        </p>
      </div>
      <div class="box">
        <h1>2.</h1>
        <h2>Experiencia y reputación</h2>
        <p>
          Aportamos estructuras para la solución de problemas derivados de conceptos en el estado
          del arte de la práctica gerencial y de negocios.
        </p>
      </div>
      <div class="box">
        <h1>3.</h1>
        <h2>Soluciones a la medida</h2>
        <p>
          Junto a ti vemos el momento en que estas y buscamos soluciones oportunas y posibles de
          lograr en corto plazo.
        </p>
      </div>
      <div class="box">
        <h1>4.</h1>
        <h2>Foco en creación de valor</h2>
        <p>
          Asumimos retos donde tenemos confianza de generar soluciones de alto impacto al cliente.
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: 40% 18% 42%;
}
.imgFocus {
  display: flex;
  justify-content: flex-end;
}
.mainTitle {
  padding: 4vw 1vw 2vw 1vw;
  display: flex;
  flex-direction: column;
}
.mainTitle h1 {
  font-size: 3.5rem;
  font-weight: 400;
}
.mainTitle h4 {
  font-size: 3.5rem;
  font-weight: 100;
  line-height: 30px;
}
.mainTitle span {
  border-right: 3px solid rgb(112 112 112 / 19%);
  width: 47%;
  height: 100%;
  margin-top: 2rem;
}
.items {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  height: 90%;
  align-content: space-around;
  margin-top: auto;
}
.box {
  width: 45%;
  padding: 1rem;
  text-align: center;
}
.box h1 {
  color: #5ca5a6;
  font-size: 4rem;
}
.box h2 {
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1rem;
}
.box p {
  font-weight: 200;
  text-align: left;
}
@media screen and (max-width: 768px) {
  .grid-container {
    grid-template-columns: 100%;
  }
  .box {
    width: 100%;
  }
  .box h2 {
    text-align: center;
  }
  .box p {
    text-align: center;
  }
  .items {
    height: 100%;
  }
  .mainTitle {
    text-align: center;
  }
  .mainTitle h1, .mainTitle h4{
    font-size: 2.4rem;
  }
  .imgFocus {
    justify-content: center;
  }
}
@media screen and (min-width: 1920px) {
  .box h2 {
    font-size: 1.4rem;
  }
}
</style>
