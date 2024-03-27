<template>
  <div class="container">
    <div class="mainTitle">
      <span></span>
      <div>
        <h1>Quiénes</h1>
        <h4>Somos</h4>
      </div>
    </div>
    <div class="gridContainer">
      <div class="left">
        <h1 @click="left">L</h1>
      </div>
      <div class="vilma">
        <img
          width="100%"
          src="../assets/vilma.png"
          :class="selectedItem == 1 ? 'selected' : 'imgGray'"
        />
      </div>
      <div class="eskarli">
        <img
          width="100%"
          src="../assets/skarli.png"
          :class="selectedItem == 2 ? 'selected' : 'imgGray'"
        />
      </div>
      <div class="duaglys">
        <img
          width="100%"
          src="../assets/duaglys.png"
          :class="selectedItem == 3 ? 'selected' : 'imgGray'"
        />
      </div>
      <div class="right">
        <h1 @click="right">R</h1>
      </div>
    </div>
    <div v-if="selectedItem == 1" class="description">
      <div class="nameTitle" style="justify-content: flex-start;">
        <div>
          <h1>Vilma Rodriguez Vivas</h1>
          <h4>Socia Directora</h4>
        </div>
      </div>
      <div class="gridDescription">
        <div>
          Socia Directora de STEP, cuenta con más de 30 años de experiencia en el Sector Bancario y
          Asegurador de Panamá, Venezuela, Florida y Rep. Dominicana y además se ha desempeñado en
          otras industrias tales de consumo masivo (Loreal de Paris, Mon reve ). <br />
          Durante los últimos 5 años ha ejercido como directora comercial de Juntas Directivas de
          Bancos y Aseguradoras. Además se ha desempeñado como CEO en empresas reconocidas del
          sector seguros en Panamá, logrando establecer cambios de alto impacto en el negocio.
        </div>
        <div>
          Ha liderado proyectos de: digitalización de la emisión de chequeras, implantación de la
          transformación digital de Tarjetas de créditos, canales alternos de distribución bancaria.
          Scoring de créditos masivos. <br />
          Posee una Maestría en Ingeniería Industrial y es Ingeniera de Materiales de la Universidad
          Simón Bolívar. Además cuenta con certificaciones de Programa avanzado de Gerencia (IESA),
          Transformación Digital (INCAE) , Business Analytics(University of Cambridge).
        </div>
      </div>
    </div>
    <div v-if="selectedItem == 2" class="description">
      <div class="nameTitle" style="justify-content: center;">
        <div>
          <h1>Eskarli Araque</h1>
          <h4>Socia Directora</h4>
        </div>
      </div>
      <div class="gridDescription">
        <div>
          Socia Directora de STEP, cuenta con más de 15 años de experiencia en el Sector Bancario y
          Asegurador de Panamá, Rep. Dominicana, Florida y Venezuela. <br />
          Se ha desempeñado en cargos de alto impacto y de nivel directivo, tales como: Gerente
          Ejecutivo de Procesos de Negocio, diseñando procesos estratégicos con un enfoque ágil
          centrado en el cliente, impulsando la optimización de recursos a través de la
          automatización y robotización e implementado sistemas de control y gestión.
        </div>
        <div>
          Ha liderado proyectos exitosos con impacto en eficiencia: transformación de cadena medular
          del negocio bancario, asegurador y fintech, transformación digital del call center,
          transformación de modelo de negocio comercial en banca y seguros, Implementación de
          sistemas de gestión de calidad, diseño de metodología ágiles corporativa. <br />
          Es Ingeniera Electrónica experta en gestión de la calidad, BPM, workflow, gestión por
          procesos ágiles y Automatización Robótica de Procesos (RPA).
        </div>
      </div>
    </div>
    <div v-if="selectedItem == 3" class="description">
      <div class="nameTitle" style="justify-content: flex-end;">
        <div>
          <h1>Duaglys Rojas</h1>
          <h4>Socia Directora</h4>
        </div>
      </div>
      <div class="gridDescription">
        <div>
          Socia Directora de STEP, Profesional con 22 años de experiencia, últimos 18 años en el
          Sector Financiero en el área de Innovación & Productos Tarjetas, Medios de Pagos y Canales
          trabajando con objetivos y metas de productividad orientados a los logros del plan
          estratégico del Banco. Experiencia en Gerencia de Proyecto de implementación de Tarjetas
          de Crédito y Débito con tecnología EMV para Mastercard, Visa y American Express. <br> Formé
          parte del equipo encargado del diseño, desarrollo y puesta en marcha del Área de Productos
          Financieros bajo la visión de Innovación.
        </div>
        <div>
          Igualmente me desempeñé en el área de Procesos de Negocios dirigiendo, coordinando y
          ejecutando proyectos de alto nivel para la organización, desde la fase de definición hasta
          la implantación, también desempeñe funciones de seguimiento y control en la oficina de
          proyectos. <br> Realizo consultoría en empaquetamiento de producto para empresa transnacional
          en Banca de Inversión y Family office, actualmente desarrollando productos y servicios
          para Banco Microfinanciero. Experiencia en fusiones de empresas e integración de equipos.
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'whoWeAre',
  data() {
    return {
      selectedItem: 1
    }
  },
  methods: {
    right() {
      if (this.selectedItem < 3) {
        this.selectedItem = +this.selectedItem + 1
      } else {
        this.selectedItem = 1
      }
      console.log(this.selectedItem)
    },
    left() {
      this.selectedItem = +this.selectedItem - 1
      if (this.selectedItem == 0) {
        this.selectedItem = 3
      }
    }
  }
}
</script>
<style scoped>
.gridContainer {
  display: grid;
  grid-template-columns: 14% 24% 24% 24% 14%;
  gap: 0.5rem;
  margin-top: 4rem;
}
.description {
  margin: 4rem 14vw;
}
.gridDescription {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 0.5rem;
  margin-top: 2rem;
}
.gridDescription div {
  font-weight: 200;
}
.container {
  width: 100%;
  margin-top: 10vh;
}
.mainTitle {
  display: flex;
  align-items: center;
}
.mainTitle div {
  display: flex;
  align-items: center;
}
.mainTitle h1 {
  font-size: 3.6rem;
  font-weight: 400;
}
.mainTitle h4 {
  font-size: 3.6rem;
  font-weight: 100;
  line-height: 30px;
  margin-left: 1rem;
}
.mainTitle span {
  border-top: 3px solid rgb(112 112 112 / 19%);
  width: 10vw;
  height: 1rem;
  margin-right: 2rem;
}
.nameTitle {
  display: flex;
  align-items: center;
}
.nameTitle h1 {
  font-size: 2.5rem;
  font-weight: 400;
}
.nameTitle h4 {
  font-size: 2rem;
  font-weight: 100;
  line-height: 30px;
  margin-left: 1rem;
}
.left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.left h1 {
  color: #529fa1;
  cursor: pointer;
}
.right {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.right h1 {
  color: #529fa1;
  cursor: pointer;
}
.imgGray {
  filter: grayscale(70%);
  opacity: 0.6;
}
.selected {
  filter: none;
}
@media screen and (max-width: 768px) {
  .mainTitle {
    text-align: center;
  }
  .gridContainer {
    grid-template-columns: 100%;
  }
}
</style>
