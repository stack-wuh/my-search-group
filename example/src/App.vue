<template>
  <div id="app">
    <img src="./assets/logo.png">
    <btn-groups key="1a"></btn-groups>
    <MySearchButtonGroup key="a2"></MySearchButtonGroup>
    <MySearchGroup :list="List" v-model="form" key='3c'></MySearchGroup>
     <el-table border stripe :data="data">
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="状态" prop="state">
        <template slot-scope="scope">
          <MySearchButtonGroup :list="JSON.parse(JSON.stringify(btnList))" :data="scope.row"></MySearchButtonGroup>
        </template>
      </el-table-column>
    </el-table>
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
const btnList = [
  {
    _id: 0,
    text: 'down',
    field: ['states', 'state'],
    rules: [1],
    loading: false
  },
  {
    _id: 1,
    text: 'up',
    field: ['states', 'state'],
    rules: [2],
    loading: false
  },
  {
    _id: 2,
    text: 'show',
    field: ['states', 'state'],
    rules: [1],
    loading: false
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
      btnList,
      form: {},
      msg: 'Welcome to Your Vue.js App',
      data: [
        {
          name: 'shadow',
          age: 21,
          state: 1,
          states: {
            state: 1
          }
        },
        {
          name: 'fielding',
          age: 20,
          state: 2,
          states: {
            state: 2
          }
        }
      ],
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
