<template>
  <div id="app">
    <img src="./assets/logo.png">
    <btn-groups key="1a"></btn-groups>
    <MySearchButtonGroup key="a2"></MySearchButtonGroup>
    <MySearchGroup v-model="form" key='3c'></MySearchGroup>
    <!-- <MySearchGroupOne></MySearchGroupOne> -->
  </div>
</template>

<script>
import mySearch from 'wh-search-group'
export default {
  name: 'app',
  components: {
    btnGroups: mySearch.MySearchButtonGroup
  },
  data () {
    return {
      form: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
