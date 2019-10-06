<template>
  <div id="app">
    <img src="./assets/logo.png" alt="">
    <my-search-group 
      @search="handleSearch"
      v-model="form" 
      :list='List'>
    </my-search-group>

    <my-search-button-group
      :list="btnList">
    </my-search-button-group>
    <el-table :data="[{}, {}]">
      <el-table-column label="操作">
        <template scope="{$index}">
            <my-search-button-group :key="$index" :list="JSON.parse(JSON.stringify(btnList))"></my-search-button-group>
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
    field: 'name',
    options: {
      clearable: true
    }
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
    type: 'date',
    field: 'date',
    options: {
      type: 'date'
    }
  }
]
const btnList = [
  {
    _id: 0,
    text: 'down',
    ref: 'down',
    backgroundColor: '#fcc',
    options: {
      type: 'primary',
      isLoading: true
    },
    validator: (data) => {
      console.log(data)
      return true
    }
  },
  {
    _id: 1,
    text: 'up',
    ref: 'up',
    options: {
      type: 'text',
      isLoading: false
    },
    validator: true
  },
  {
    _id: 2,
    text: 'show',
    options: {
      type: 'default',
      isLoading: true
    }
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
    handleBtnClick(e){
      console.log(e)
    },
    handleUp(e){
      console.log('is clicked up', e)
    },
    handleDown(e){
      console.log('is clicked down', e)
    },
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
