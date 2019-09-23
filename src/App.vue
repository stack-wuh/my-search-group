<template>
  <div id="app">
    <img src="./assets/logo.png">
    <my-search-group v-model="form" :list='List'></my-search-group>
    <!-- <my-search-button-group ></my-search-button-group> -->
  </div>
</template>

<script>
 const List = [
   {
     label: '姓名',
     type: 'normal',
     field: 'name'
   },
   {
     label: '年龄',
     type: 'normal',
     field: 'age'
   },
   {
     type: 'select',
     field: 'state',
     list: [
       {
         label: 'AAAA',
         value: 1
       },
       {
         label: 'BBBB',
         value: 2
       }
     ]
   },
   {
     type: 'button',
     list: [
       {
         text: 'search',
         ref: 'search'
       }
     ]
   }
 ]
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
      List,
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
