<template>
  <div class="hobbies">
    <div class="container">
      <div class="text-center">
        <h1 class="display-4 font-weight-bold" style="margin-left: 60px;">Os Meus Hobbies</h1>
        <hr class="my-4">
      </div>
      <ul class="hobbies-list">
        
        <li class="hobby-item">
          <img src="@/assets/maestro.png" alt="Hobby 2" class="img-fluid hobby-image">
          <p class="hobby-description">Apreciador Melómano de Música</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/film.png" alt="Hobby 1" class="img-fluid hobby-image">
          <p class="hobby-description">Crítico Amador de Cinema</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/filosofo.png" alt="Hobby 5" class="img-fluid hobby-image">
          <p class="hobby-description">Adepto de bancada de política e filosofia</p>
        </li>
      </ul>
      <ul class="hobbies-list">
        <li class="hobby-item">
          <img src="@/assets/beer.png" alt="Hobby 4" class="img-fluid hobby-image">
          <p class="hobby-description">Provador de Cervejas Indeciso</p>
        </li>
        <li class="hobby-item">
          <img src="@/assets/basket.png" alt="Hobby 3" class="img-fluid hobby-image">
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
  color: black;
}

</style>
