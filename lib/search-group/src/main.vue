<template>
  <section class='c-search-group'>
    <my-search-item
      v-for="(item, index) in List"
      :key='index + item.field'
      :type='item.type'
      :label="item.label"
      :props='item.field'
      :s-list='item.list'
      s-key='label'
      s-value='value'
      v-model='form[item.field]'>
    </my-search-item>
  </section>
</template>

<script>
 import MySearchItem from '../../search-item'
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
     type: 'button'
   }
 ]
 export default{
  name: 'MySearchGroup',
  model: {
    prop: 'form',
    event: 'change'
  },
  provide(){
    return {
      SearchGroup: this
    }
  },
  components: {
    MySearchItem
  },
  props: {
    form: { // 绑定的值, 只能是一个Object类型
      type: Object,
      default: () => {}
    }
  },
  watch: {},
  computed: {},
  data(){
    return {
      List
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-search-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  .c-search-item:not(:last-of-type) {
    margin-right: 15px;
  }
}
</style>