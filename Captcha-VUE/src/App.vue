<template>
  <div id="app">
    <h2>Bake-off #2</h2>
    
    <router-view v-bind:selectData="selectData" v-on:subImage="getClickedImage" v-on:alertEverything="alertEverything"/>

    <!-- <router-link to="/1"><el-button type="success">Verify</el-button></router-link> | -->
      <!-- <router-link to="/1"><el-button type="success">Verify</el-button></router-link> -->


  </div>
</template>

<script>

import axios from "axios";
const baseURL = "http://localhost:3000/localJson";

export default {
  data(){
    return {
      selectData:[[],[],[],[],[],[]]
    }
  },
  methods:{
    getClickedImage(value, round){
      this.selectData[round] = value;
    },

    async alertEverything(correctness){
      console.log(JSON.stringify(this.selectData));
      axios.post(baseURL, {clickMat: this.selectData, correctness: correctness});
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
