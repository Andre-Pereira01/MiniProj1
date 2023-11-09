<template>
  <div class="quemsou">
    <div class="container">
      <div class="row">
        <div class="col-md-6" style="margin-left: 60px;">
          <div class="text-center">
            <h1 class="display-4 font-weight-bold">Quem Sou Eu?</h1>
            <hr class="my-4">
          </div>
        </div>
        <div class="col-md-6" style="display: flex; align-items: center;">
          <div class="col-md-4" style="margin-left: 60px;">
            <img src="@/assets/andre.jpg" alt="André Pereira" class="img-fluid rounded-circle">
          </div>
          <div class="col-md-8" style="text-align: justify; margin-left: 120px;">
            <p class="lead" style="max-width: 600px;">
              Olá, o meu nome é André Pereira. Tenho 22 anos e sou de Monção (Viana Do Castelo).
              Atualmente sou estudante de mestrado em Engenharia Informática e Tecnologia Web na Universidade Aberta(UAb).
              Sou licenciado em Engenharia Informática pela Universidade de Trás-os-Montes e Alto Douro (UTAD).
              O que mais me motiva é a constante aprendizagem, com espaço para melhorar as minhas competências e crescer
              profissionalmente.
              Estou confiante nas minhas capacidades para criar sempre um bom ambiente e desenvolver um bom trabalho.
            </p>
            <p class="lead">Entra em contato comigo: <a href="mailto:andre3699@gmail.com">andre3699@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'QuemSou',
};
</script>

<style scoped>
.quemsou {
  background-color: mediumaquamarine;
  padding-top: 60px;
  padding-bottom: 200px;
}


.display-4 {
  color: #333;
}

.img-fluid {
  max-width: 100%;
  height: auto;
  max-height: 300px;
}


.lead {
  color: black;
}

.lead a {
  color: #007bff;
  /* Cor do email */
}
</style>
