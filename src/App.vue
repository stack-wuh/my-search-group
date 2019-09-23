<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-search-group v-model="form"></my-search-group>
    <my-search-button-group></my-search-button-group>
  </div>
</template>

<script>
// import MySearchGroup from './components/search-group'
// import MySearch from './components'
export default {
  name: 'app',
  components: {
    // MySearchGroup
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      form: {}
    }
  }
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
