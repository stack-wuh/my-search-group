import MySearchGroup from './src/main'

MySearchGroup.install = function (Vue) {
  Vue.component(MySearchGroup.name, MySearchGroup)
}
export default MySearchGroup