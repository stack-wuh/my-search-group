# my-search-group

> ui component for vue base elementui

## Preview
```bash
#  clone
git clone git@github.com:stack-wuh/my-search-group.git

cd example

npm install 

npm run dev

```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).


## 使用

```javascript
import mySearch from 'wh-search-group'

Vue.use(mySearch)
```

```html
<div class="b-wrap">
  <MySearchGroup></MySearchGroup>
</div>
```

## SearchGroup
### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| v-model | 绑定一个表单对象 | Object | none |
| list | 迭代SearchItem的数组 | Array | [] |            

### List          
| 参数 | 说明 | 默认值 |       
| :-- | :-- | :-- |
| label | 展示Item的label文本 |  none |
| type | 说渲染的Item的类型 | normal, input |
| field | 绑定表单的字段名 | none |
| list | 若type为select, 则是Select下拉框的列表; 若type为button, 则为button列表 | none |


## SearchItem
### Props
| 参数 | 说明 | 类型 | 默认值 |
| :-- | :-- | :-- | :-- |
| type | 元素的类型值 | String | input, normal, default |
| label | 元素的标题 | String | none |
| props | 下级表单元素对应绑定的key值 | String | none |
| s-list | 如果下级子元素的type为select时所迭代的列表 | Array | [] |
| s-key | 自定义列表的key值 | String | label |
| s-value | 自定义列表的value值 | String | value |
| v-model | 绑定一个表单对象 | Object | none |

### type
| name | 说明 |
| :-- | :-- |
| input, nromal, default | type的默认值, 默认展示input输入框 |
| select | 类型设置为select下拉框 |

#### event       

| name | type | 传递事件名 |
| :-- | :-- | :-- | 
| search | 确认搜索 | search |
| reset | 重置事件 | reset |

### slot
| name | 说明 |
| :-- | :-- |
| button | 自定义的button区域 |

### type == select
#### Props
| 参数 | 说明 | 默认值 |
| :-- | :-- | :-- |
| label | option的label属性 | label, 可通过sKey属性自定义 |
| value | option的value属性 | value, 可通过sValueu属性自定义 |

## SearchButtonGroup
> 可搭配使用, 也可以单独使用

### Props
| 参数 | 说明 | 类型 | 默认值 |
|:-- | :-- | :-- | :-- |
| list | button迭代的数组 | Array | [{text: 'search', ref: 'search' }, { text: 'reset', ref: 'reset' }] |
| _id | 按钮的隐藏Id | Number, String | none |
| text | 按钮的Text文本 | String | none |
| color | 按钮的色彩 | String | default |
| backgroundColor | 按钮的背景色 | default |
| align | 按钮在flex布局下主轴的对齐 | String | left |
| options | Element中Button组件的属性 | Object | default |

#### Options
高度定制的ButtonGroup组件可以在任何地方使用, 在表格中需要多条件使用的情景可以使用Options中的validator, 例如:
{
  text: 'down',
  ref: 'down',
  validator: Function(b: Boolean), Boolean
}

### Event
| 参数 | 说明 | 类型 |  事件名 |
| :-- | :-- | :-- | :-- |
| search | $emit传递的事件 | Function | search |
| any | -- | Function | any |

### Slots
> slot === button

插槽 自定义的ButtonArea