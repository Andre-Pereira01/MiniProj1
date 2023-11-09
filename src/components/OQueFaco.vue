<template>
  <div class="oquefaco">
    <div class="container">
      <div class="row">
        <div class="col-md-4" style="margin-left: 60px;">
          <div class="text-center">
            <h1 class="display-4 font-weight-bold">O Que Faço?</h1>
            <hr class="my-4">
          </div>
        </div>
        <div class="col-md-8" style="display: flex; align-items: center;">
          <div class="col-md-4" style="margin-left: 60px;">
            <img src="@/assets/trompetista.jpg" alt="Trompetista" class="img-fluid rounded-circle">
          </div>
          <div class="col-md-8" style="text-align: justify;">
            <p class="lead" style="max-width: 600px; margin-left: 120px;">
              Sou um aluno deste mestrado. Além dos meus estudos, sou trompetista e participo em vários projetos musicais.
              Sou trompetista integrante na Banda Musical de Monção desde 2011. Sou fundador e trompetista integrante do
              grupo Monção Brass desde 2016. Também sou trompetista integrante da charanga Algazarra desde 2018.

              De ressaltar a gravação de dois álbuns musicais no grupo Monção Brass e gravação de dois álbuns na Banda
              Musical de Monção.
              Já colaborei com a Orquestra de Jazz do Douro e dezenas de bandas filarmónicas e grupos musicas em modo
              freelancer.
              Fui estudante da Licenciatura em Engenharia Informática na UTAD (2020-2023).
              Durante a minha passagem nessa academia ocupei os cargos simultâneos de 1º Secretário da Direção e Ensaiador
              da Tuna Académica 'Imperialis Serenatum Tunix (2021-2023) e fui ainda Colaborador do Departamento Recreativo
              no Núcleo de Estudantes de Engenharia Informática da UTAD (2021-2022).
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OQueFaco',
};
</script>

<style scoped>
.oquefaco {
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
}</style>
