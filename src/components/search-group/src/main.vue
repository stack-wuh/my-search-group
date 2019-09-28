<template>
  <section class='c-search-group'>
    <div class="b-search__item">
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
    </div>
    <div class="b-search__button">
      <my-button-group v-if="!$slots.button" :list="BtnList"></my-button-group>
      <slot v-else name="button"></slot>
    </div>
  </section>
</template>

<script>
 import MySearchItem from '../../search-item'
 import MyButtonGroup from '../../search-button-group'
 
 const BtnList = [
   {
     text: '搜索',
     ref: 'search',
     options: {
        type: 'primary',
        icon: 'el-icon-search',
        isLoading: true
     }
   },
   {
     text: '重置',
     ref: 'reset',
     options: {
       icon: 'el-icon-refresh',
       type: 'danger',
       isLoading: false
     }
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
    MySearchItem,
    MyButtonGroup
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
      BtnList
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
  .b-search__item {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-right: 15px;
  }
  .b-search__button {
    width: auto;
    height: 100%;
  }
}
</style>