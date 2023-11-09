<template>
  <div class="home">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2"
          style="margin-left: 50px; margin-top: 60px; margin-left: 50px; margin-bottom: 0px;">
          <div class="text-center">
            <h1 class="display-4 font-weight-bold">Mestrado em Engenharia Informática e Tecnologia Web</h1>
            <p class="lead">Programação Web Avançada</p>
          </div>
          <hr class="my-4">
          <div class="text-justify">
            <p style="max-width: 850px;">
              MiniProj1 (Construção de uma SPA) : Uma SPA tem como intuito fornecer uma experiência semelhante à de uma aplicação nativa.
              A navegabilidade da página é feita através de links internos que direcionam o utilizador para outras seções da página ou janelas modais.
              Este mini projeto é uma SPA que corresponde ao meu currículo vitae. O site é composto pelas secções:
              - Quem Sou Eu?
              - O que faço?
              - Hobbies
               Existe também o  rodapé com a minha indentidade virtual (várias redes sociais, etc).
            </p>
          </div>
          <div class="text-center">
            <h2 class="display-5">André Pereira [2302569]</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeH',
};
</script>
  
<style scoped>
.home {
  background-color: mediumaquamarine ;
  padding-top: 50px;
  padding-bottom: 200px;
}
.display-4 {
  color: #333;
}
.lead {
  color: black;
}

.hr {
  border-top: 1px solid #999;
}
.display-5 {
  color: #333;
}</style>
