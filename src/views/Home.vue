<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
</template>
  
<script>
   // @ is an alias to /src
  import HomeH from "@/components/HomeH.vue";

 export default {
    name: "Home",
    components: {
        Home,
    },
   };
  </script>
  