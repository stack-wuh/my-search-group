<template>
  <section class='c-search-button-group'>
    <div class="b-outer">
      <div class="b-inner">
        <div class="b-button"
          v-for="(item, index) in List"
          :key=" 'btn'+ index">
            <el-button
              :loading='item.loading' 
              @click="handleBtnClick(item, index)" 
              size="small">{{item.text}}
            </el-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
 const List = [
   {
     text: 'Search',
     ref: 'submit'
   },
   {
     text: 'Reset',
     ref: 'reset'
   },
   {
     text: 'Export',
     ref: 'export'
   },
   {
     text: 'Import',
     ref: 'import'
   }
 ]
 export default{
  name: 'MySearchButtonGroup',
  components: {},
  props: {},
  watch: {},
  computed: {},
  data(){
    return {
      List
    }
  },
  methods: {
    handleBtnClick(item, index) {
      let { ref } = item
      this.$set(List[index], 'loading', true)
      this.$emit(item.ref)
      if (item.tid) clearTimeout(item.tid)
      item.tid = setTimeout(() => {
        this.$set(List[index], 'loading', false)
      }, 800)
    }
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