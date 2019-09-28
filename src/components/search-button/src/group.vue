<template>
  <section 
    :style="[justifyWrap]"
    class='c-search-button-group'>
    <div class="b-outer">
      <div class="b-inner">
        <div class="b-button"
          v-for="(item, index) in selfList"
          :key=" 'btn'+ index">
            <el-button
              v-bind="item.options"
              :style="[{ color: item.color, backgroundColor: item.backgroundColor }]"
              :disabled="item.rules ? (Array.isArray(item.rules) ? item.rules.indexOf(deepget(data, item.field)) !== -1 : item.rules == deepget(data, item.field)) : false"
              @click="handleBtnClick({ ...item }, index)"
              size="small">
              {{item.text}}
            </el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 export default{
  name: 'MySearchButtonGroup',
  components: {},
  props: {
    list: {
      type: Array,
      default: () => [
        {
          text: 'search',
          ref: 'search'
        },
        {
          text: 'reset',
          ref: 'reset'
        }
      ],
      validator: (val) => {
        return Array.isArray(val) && val.length
      }
    },
    data: {
      type: Object,
      default: () => {}
    },
    align: {
      type: String,
      default: 'left'
    },
    scope: Object
  },
  watch: {},
  computed: {
    justifyWrap() {
      var style = {}
      var transfer = {
        'left': 'flex-start',
        'center': 'center',
        'right': 'flex-end'
      }
      style.justifyContent = transfer[this.align]
      return style
    }
  },
  data(){
    return {
      selfList: this.list
    }
  },
  methods: {
    deepget(from, selector){
      return Array.isArray(selector) && selector.reduce((acc, val) => (acc && acc[val] ? acc[val] : null), from)
    },
    /**
     * 按钮的点击事件
     * 向上上传 ref 事件名
     */
    handleBtnClick(item, index) {
      let { ref, options: { isLoading } } = item
      if (isLoading) {
        this.$set(this.selfList[index].options, 'loading', true)
      }
      this.$set(this.selfList[index], 'loading', true)
      item.ref && this.$emit(item.ref, { scope: this.scope })
      if (item.tid) clearTimeout(item.tid)
      item.tid = setTimeout(() => {
        if (isLoading) {
          this.$set(this.selfList[index].options, 'loading', false)
        }
        this.$set(this.selfList[index], 'loading', false)
      }, 800)
    },
  },
  created(){},
  mixins: []
 }
</script>

<style scoped lang='scss'>
.c-search-button-group {
  display: flex;
  align-items: center;
  .b-outer {
    display: flex;
  }
  .b-inner {
    display: flex;
    align-items: center;

    .b-button:not(:last-of-type) {
      margin-right: 15px;
    }
  }
}
</style>