<template>
  <section class='c-search-group'>
    <my-search-item
      v-on="$listeners"
      v-for="(item, index) in list"
      :key='index + item.field'
      :type='item.type'
      :label="item.label"
      :props='item.field'
      :s-list='item.list'
      s-key='label'
      s-value='value'
      v-model='form[item.field]'>
        <span slot="button">custom button area</span>
    </my-search-item>
  </section>
</template>

<script>
 import MySearchItem from '../../search-item'
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
    },
    list: {
      type: Array,
      default: () => []
    }
  },
  watch: {},
  computed: {},
  data(){
    return {
    }
  },
  methods: {
  },
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