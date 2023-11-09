<template>
  <div id="app">
    <header class="navbar navbar-expand fixed-top navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand" style="margin-left: 20px;">
        <button class="btn btn-primary header-button">TAREFA 2.2 - Início</button>
      </router-link>
      <ul class="navbar-nav">
        <li>
          <router-link class="nav-link" to="/quemsou">
            <button class="btn btn-primary header-button">Quem sou eu?</button>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/oquefaco">
            <button class="btn btn-primary header-button">O que faço?</button>
          </router-link>
        </li>
        <li>
          <router-link class="nav-link" to="/hobbies">
            <button class="btn btn-primary header-button">Hobbies</button>
          </router-link>
        </li>
      </ul>
    </header>
    <router-view/>
    <footer>
      <div class="footer-icons">
        <a href="https://www.linkedin.com/in/andrepereira000/" target="_blank">
          <img src="@/assets/in.png" class="footer-icon">
        </a>
        <a href="https://www.facebook.com/andrepereira000/" target="_blank">
          <img src="@/assets/fb.png" class="footer-icon">
        </a>
        <a href="https://www.instagram.com/andrepereira000/" target="_blank">
          <img src="@/assets/ig.png" class="footer-icon">
        </a>
        <a href="https://twitter.com/Andre_Pereira00" target="_blank">
          <img src="@/assets/x.png" class="footer-icon">
        </a>
        <a href="https://github.com/Andre-Pereira01/" target="_blank">
          <img src="@/assets/gh.png" class="footer-icon">
        </a>
      </div>
    </footer>
  </div>
</template>


<style scoped>
/* Estilos dos vários componentes */
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: justify;
 background-color: mediumaquamarine ;/*#f9f9f9; */
  margin:auto;
  margin-bottom: 0px;
  max-width: auto;
  
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
   background-color:salmon; 
}
.header-button {
  height:100%; 
 
}

footer {
  clear: both;
  background-color:salmon;
  padding: 15px 20px;
  text-align: center;
  width: 99.9%;
  position: fixed;
  bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
}

.footer-icons {
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-icon {
  margin: 0 10px;
  width: 40px;
  height: 40px;
}

.navbar-nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-left: auto;
  list-style: none;
}

.nav-link {
  margin-right: 20px;
  color: #00CED1;
  border-radius: 4px;
  list-style: none;
}

.btn-primary {
  background-color: salmon;
  color: black;
  border: none;
}

.btn-primary:hover {
  background-color: tomato;
  color: black;

}
</style>
