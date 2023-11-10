<template>
  <div class="hobbies">
    <div class="container">
      <div class="text-center">
        <h1 class="titulo font-weight-bold">Os Meus Hobbies</h1>
        <p class="subtitulo">(também estudo claro)</p>
      </div>
      <ul class="hobbies-list">
        <li class="hobby-item">
          <img src="@/assets/maestro.png" alt="Apreciador Musica" class="img-fluid hobby-image">
          <p class="hobby-description">Apreciador Melómano de Música</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/film.png" alt="Amante Cinema" class="img-fluid hobby-image">
          <p class="hobby-description">Crítico Amador de Cinema</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/filosofo.png" alt="politica e filosofia" class="img-fluid hobby-image">
          <p class="hobby-description">Adepto de bancada de política e filosofia</p>
        </li>
      </ul>
      <ul class="hobbies-list">
        <li class="hobby-item">
          <img src="@/assets/beer.png" alt="Provador de cervejas" class="img-fluid hobby-image">
          <p class="hobby-description">Provador de Cervejas Indeciso</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/basket.png" alt="basketball" class="img-fluid hobby-image">
          <p class="hobby-description">Jogador pouco nato de Basketball</p>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<style scoped>

.hobbies-list {
  background-color: mediumaquamarine;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.titulo {
  color: midnightblue;
  margin-left: 60px;
  margin-top: 0px;
}
.subtitulo{
  color: midnightblue;
  margin-left: 60px;
  margin-top: 0px;
}
.hobby-item {
  text-align: center;
}

.hobby-image {
  max-width: 100%;
  height: auto;
  max-height: 190px;
}

.hobby-description {
  margin-top: 10px;
  color: midnightblue;
}

</style>
