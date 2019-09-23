<template>
  <section 
    :style="[itemStyle, customStyle]"
    class='c-search-item'>
    <div class="b-prefix">
      <span class="b-prefix__label">{{label}}</span>
    </div>
    <div class="b-outer">
      <template v-if="['input', 'default', 'normal'].includes(type)">
        <div class="b-inner">
          <el-input v-model="SearchGroup.form[props]" placeholder="请编辑" size='small'></el-input>
        </div>
      </template>
      <template v-else-if="type === 'select'">
          <div class="b-inner" style="position: relative">
            <el-select v-model='SearchGroup.form[props]' placeholder="请选择" size='small'>
              <el-option 
                v-for="(oo, od) in sList"
                :key='od'
                :label='oo[sKey]'
                :value='oo[sValue]'>
              </el-option>
            </el-select>
          </div>
      </template>
      <template v-else-if="type === 'button'">
          <my-search-button-group :key="'btn1' + type" v-on="$listeners" v-if="Array.isArray(sList) && sList.length" :list='sList'></my-search-button-group>
          <my-search-button-group :key="'btn2' + type" v-on="$listeners" v-else></my-search-button-group>
      </template>
      <template v-else-if="type === 'button-custom'">
          <slot name='button'></slot>
      </template>
      <div class="b-suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
  </section>
</template>

<script>
 import MySearchButtonGroup from '../../search-button/src/group'
 export default{
  name: 'MySearchItem',
  components: {
    MySearchButtonGroup
  },
  inject: ['SearchGroup'],
  props: {
    width: [String, Number],
    customStyle: Object,
    type: {
      type: String
    },
    label: String,
    props: {
      type: String
    },
    sList: {
      type: Array,
      default: () => []
    },
    sKey: {
      type: String,
      default: 'label' 
    },
    sValue: {
      type: String,
      default: 'value'
    }
  },
  watch: {},
  computed: {
    itemStyle() {
      let style = {}
      style.width = typeof this.width === 'number' ? this.width + 'px' : this.width
      return style
    }
  },
  data(){
    return {
    }
  },
  methods: {},
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-search-item {
  display: flex;
  align-items: center;
  min-height: 40px;
  box-sizing: border-box;

  .b-outer {

  }

  .b-prefix {
    margin-right: 10px;
    &__label {
      font-size: 14px;
      color: #999;
      word-break: keep-all;
    }
  }
}
</style>