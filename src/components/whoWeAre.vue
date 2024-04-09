<template>
  <div class="mainContainer">
    <div class="mainTitle">
      <span></span>
      <div>
        <h1>Quiénes</h1>
        <h4>Somos</h4>
      </div>
    </div>

    <div class="gallery-container">
      <div class="gallery">
        <div
          class="slide"
          :class="currentPhotoIndex == 0 ? 'Selected' : 'noSelected'"
          :style="{
            opacity: currentPhotoIndex == 0 ? 1 : 0.5,
            filter: currentPhotoIndex == 0 ? 'none' : 'grayscale(70%)'
          }"
        >
          <img src="../assets/vilma.png" alt="sociaDirectiva" />
        </div>
        <div
          class="slide"
          :class="currentPhotoIndex == 1 ? 'Selected' : 'noSelected'"
          :style="{
            opacity: currentPhotoIndex == 1 ? 1 : 0.5,
            filter: currentPhotoIndex == 1 ? 'none' : 'grayscale(70%)'
          }"
        >
          <img src="../assets/skarli.png" alt="sociaDirectiva" />
        </div>
        <div
          class="slide"
          :class="currentPhotoIndex == 2 ? 'Selected' : 'noSelected'"
          :style="{
            opacity: currentPhotoIndex == 2 ? 1 : 0.5,
            filter: currentPhotoIndex == 2 ? 'none' : 'grayscale(70%)'
          }"
        >
          <img src="../assets/duaglys.png" alt="sociaDirectiva" />
        </div>
        <button @click="changePhoto(-1)" class="arrow">◀</button>
        <button @click="changePhoto(1)" class="arrow">▶</button>
      </div>
      <div class="description">
        <div class="column" :class="{ active: currentPhotoIndex === 0 }">
          <div class="nameTitle" style="justify-content: flex-start">
            <div>
              <h1>Vilma Rodriguez Vivas</h1>
              <h4>Socia Directora</h4>
            </div>
          </div>
          <div class="gridDescription">
            <div>
              Socia Directora de STEP, cuenta con más de 30 años de experiencia en el Sector
              Bancario y Asegurador de Panamá, Venezuela, Florida y Rep. Dominicana y además se ha
              desempeñado en otras industrias tales de consumo masivo (Loreal de Paris, Mon reve ).
              <br />
              Durante los últimos 5 años ha ejercido como directora comercial de Juntas Directivas
              de Bancos y Aseguradoras. Además se ha desempeñado como CEO en empresas reconocidas
              del sector seguros en Panamá, logrando establecer cambios de alto impacto en el
              negocio.
            </div>
            <div>
              Ha liderado proyectos de: digitalización de la emisión de chequeras, implantación de
              la transformación digital de Tarjetas de créditos, canales alternos de distribución
              bancaria. Scoring de créditos masivos. <br />
              Posee una Maestría en Ingeniería Industrial y es Ingeniera de Materiales de la
              Universidad Simón Bolívar. Además cuenta con certificaciones de Programa avanzado de
              Gerencia (IESA), Transformación Digital (INCAE) , Business Analytics(University of
              Cambridge).
            </div>
          </div>
        </div>

        <div class="column" :class="{ active: currentPhotoIndex === 1 }">
          <div class="nameTitle" style="justify-content: center">
            <div>
              <h1>Eskarli Araque</h1>
              <h4>Socia Directora</h4>
            </div>
          </div>
          <div class="gridDescription">
            <div>
              Socia Directora de STEP, cuenta con más de 15 años de experiencia en el Sector
              Bancario y Asegurador de Panamá, Rep. Dominicana, Florida y Venezuela. <br />
              Se ha desempeñado en cargos de alto impacto y de nivel directivo, tales como: Gerente
              Ejecutivo de Procesos de Negocio, diseñando procesos estratégicos con un enfoque ágil
              centrado en el cliente, impulsando la optimización de recursos a través de la
              automatización y robotización e implementado sistemas de control y gestión.
            </div>
            <div>
              Ha liderado proyectos exitosos con impacto en eficiencia: transformación de cadena
              medular del negocio bancario, asegurador y fintech, transformación digital del call
              center, transformación de modelo de negocio comercial en banca y seguros,
              Implementación de sistemas de gestión de calidad, diseño de metodología ágiles
              corporativa. <br />
              Es Ingeniera Electrónica experta en gestión de la calidad, BPM, workflow, gestión por
              procesos ágiles y Automatización Robótica de Procesos (RPA).
            </div>
          </div>
        </div>
        <div class="column" :class="{ active: currentPhotoIndex === 2 }">
          <div class="nameTitle" style="justify-content: flex-end">
            <div>
              <h1>Duaglys Rojas</h1>
              <h4>Socia Directora</h4>
            </div>
          </div>
          <div class="gridDescription">
            <div>
              Socia Directora de STEP, Profesional con 22 años de experiencia, últimos 18 años en el
              Sector Financiero en el área de Innovación & Productos Tarjetas, Medios de Pagos y
              Canales trabajando con objetivos y metas de productividad orientados a los logros del
              plan estratégico del Banco. Experiencia en Gerencia de Proyecto de implementación de
              Tarjetas de Crédito y Débito con tecnología EMV para Mastercard, Visa y American
              Express. <br />
              Formé parte del equipo encargado del diseño, desarrollo y puesta en marcha del Área de
              Productos Financieros bajo la visión de Innovación.
            </div>
            <div>
              Igualmente me desempeñé en el área de Procesos de Negocios dirigiendo, coordinando y
              ejecutando proyectos de alto nivel para la organización, desde la fase de definición
              hasta la implantación, también desempeñe funciones de seguimiento y control en la
              oficina de proyectos. <br />
              Realizo consultoría en empaquetamiento de producto para empresa transnacional en Banca
              de Inversión y Family office, actualmente desarrollando productos y servicios para
              Banco Microfinanciero. Experiencia en fusiones de empresas e integración de equipos.
            </div>
          </div>
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
      selectedItem: 1,
      photos: [{ url: 'duaglys.png' }, { url: 'duaglys.png' }, { url: 'duaglys.png' }],
      currentPhotoIndex: 0
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
    },
    changePhoto(step) {
      this.currentPhotoIndex =
        (this.currentPhotoIndex + step + this.photos.length) % this.photos.length
    }
  }
}
</script>
<style scoped>
.mainContainer {
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
.gallery-container {
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.gallery {
  display: grid;
  grid-template-columns: 26% 26% 26%;
  gap: 0.5rem;
  margin-top: 4rem;
  justify-content: center;
  position: relative;
}

.slide {
  opacity: 0.5;
  transition: opacity 0.5s;
  filter: grayscale(70%);
}

.slide img {
  width: 100%;
  height: auto;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #529FA1;
}

.arrow:first-child {
  left: 10px;
}

.arrow:last-child {
  right: 10px;
}

.description {
  margin: 4rem 14vw;
}

.column {
  display: none;
  opacity: 0;
  transition: opacity 0.8s;
}

.column.active {
  display: block;
  opacity: 1;
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

@media screen and (max-width: 768px) {
  .mainTitle {
    text-align: center;
  }
  .slide {
    opacity: 1;
  }
  .noSelected{
    display: none;
  }
  .gridDescription {
    grid-template-columns: 100%;
  }
  .mainTitle {
    text-align: center;
  }
  .mainTitle div {
    flex-direction: column;
    width: 100%;
  }
  .mainTitle span {
    display: none;
  }
  .mainTitle h4 {
    margin-left: 0;
    font-size: 2.4rem;
  }
  .mainTitle h1 {
    font-size: 2.4rem;
  }
  .gallery {
    grid-template-columns: 60%;
    margin-top: 2rem;
  }
  .description{
    margin: 1rem 8vw;
  }
  .nameTitle h1, .nameTitle h4{
    font-size: 1.8rem;
    text-align: center;
  }
  .nameTitle{
    justify-content: center !important;
  }
}

@media screen and (min-width: 1920px) {
  .gallery {
    width: 72%;
    margin: 4rem auto 0 auto;
    grid-template-columns: 33% 33% 33%;
  }
}
</style>
