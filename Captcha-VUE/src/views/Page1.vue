<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Select the images which define rabbits</h1>

    <h2>List 2</h2>
	<div class="selectable">
    <table>
    <tr>
      <li><input type="checkbox" id="cb0" v-model="chosen" value=0 />
        <label for="cb0"><img :src="imageList[0]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb1" v-model="chosen" value=1 />
        <label for="cb1"><img :src="imageList[1]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb2" v-model="chosen" value=2 />
        <label for="cb2"><img :src="imageList[2]" style="width:100px;height:100px;"/></label>
      </li>
    </tr>
    <tr>
      <li><input type="checkbox" id="cb3" v-model="chosen" value=3 />
        <label for="cb3"><img :src="imageList[3]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb4" v-model="chosen" value=4 />
        <label for="cb4"><img :src="imageList[4]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb5" v-model="chosen" value=5 />
        <label for="cb5"><img :src="imageList[5]" style="width:100px;height:100px;"/></label>
      </li>
    </tr>
    <tr>
      <li><input type="checkbox" id="cb6" v-model="chosen" value=6 />
        <label for="cb6"><img :src="imageList[6]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb7" v-model="chosen" value=7 />
        <label for="cb7"><img :src="imageList[7]" style="width:100px;height:100px;"/></label>
      </li>
      <li><input type="checkbox" id="cb8" v-model="chosen" value=8 />
        <label for="cb8"><img :src="imageList[8]" style="width:100px;height:100px;"/></label>
      </li>
    </tr>
    </table>


    </div>
    <p class="selected-items">You have selected the following images: {{chosen}}</p>

    <router-link to="/2"><el-button type="success" @click="getCurrent()">Verify</el-button></router-link>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Page1',
  components: {
  },
  props: ["imageList"],
  data:function() {return{chosen:[]}},
  methods: {
    getCurrent(){
      this.$emit('subImage', this.chosen, 1);
      console.log(this.chosen);
    }
  }
}
</script>

<style>
ul {
  list-style-type: none;
}

li {
  display: inline-block;
}

input[type="checkbox"][id^="cb"] {
  display: none;
}

label {
  border: 1px solid #fff;
  padding: 10px;
  display: block;
  position: relative;
  margin: 10px;
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

label::before {
  background-color: white;
  color: white;
  content: " ";
  display: block;
  border-radius: 50%;
  border: 1px solid grey;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 25px;
  height: 25px;
  text-align: center;
  line-height: 28px;
  transition-duration: 0.4s;
  transform: scale(0);
}

label img {
  height: 100px;
  width: 100px;
  transition-duration: 0.2s;
  transform-origin: 50% 50%;
}

:checked+label {
  border-color: #ddd;
}

:checked+label::before {
  content: "✓";
  background-color: grey;
  transform: scale(1);
}

:checked+label img {
  transform: scale(0.9);
  box-shadow: 0 0 5px #333;
  z-index: -1;
}
</style>
