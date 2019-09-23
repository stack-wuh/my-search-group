<template>
  <div id="app">
    <my-search-group 
      @search="handleSearch"
      v-model="form" 
      :list='List'>
    </my-search-group>
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
import MySearchButtonGroup from './components/search-button-group'
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
        text: 'add',
        ref: 'search',
        loading: false
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
export default {
  name: 'app',
  components: {
    MySearchButtonGroup
  },
  data () {
    return {
      List,
      btnList,
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
      form: {}
    }
  },
  methods: {
    handleSearch (e) {
      if (Object.values(this.form).every(s => s.toString()[0])) {
          this.data.push(this.form)
          this.form = {}
      }
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
