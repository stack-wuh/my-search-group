import MySearchItem from './search-item/index.js'
import MySearchGroup from './search-group/index.js'
import MySearchButton from './search-button/index.js'
import MySearchButtonGroup from './search-button-group/index.js'

const components = [
  MySearchItem,
  MySearchGroup,
  MySearchButton,
  MySearchButtonGroup
]

const install = function (Vue) {
  components.forEach(cm => {
    Vue.component(cm.name, cm)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '0.0.1',
  install,
  MySearchButtonGroup,
  MySearchButton,
  MySearchItem,
  MySearchGroup
}