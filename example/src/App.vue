<template>
  <div id="app">
    <img src="./assets/logo.png">
    <btn-groups key="1a"></btn-groups>
    <MySearchButtonGroup key="a2"></MySearchButtonGroup>
    <MySearchGroup :list="List" v-model="form" key='3c'></MySearchGroup>
  </div>
</template>

<script>
const List = [
  {
    label: '姓名',
    field: 'name',
    type: 'normal'
  },
  {
    label: '年纪',
    field: 'age',
    type: 'normal'
  },
  {
    label: '性别',
    field: 'sex',
    type: 'select',
    list: [
      {
        label: '男',
        value: 1
      },
      {
        label: '女',
        value: 0
      }
    ]
  },
  {
    label: '邮箱',
    field: 'address',
    type: 'normal'
  },
  {
    type: 'button',
    list: [
      {
        text: '搜索',
        ref: 'search'
      },
      {
        text: '重置',
        ref: 'reset'
      }
    ]
  }
]
import mySearch from 'wh-search-group'
export default {
  name: 'app',
  components: {
    btnGroups: mySearch.MySearchButtonGroup
  },
  data () {
    return {
      List,
      form: {},
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
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
