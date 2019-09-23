import SearchButton from './src/main'

SearchButton.install = function (Vue) {
  Vue.component(SearchButton.name, SearchButton)
}

export default SearchButton