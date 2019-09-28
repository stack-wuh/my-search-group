const toStirng = Object.prototype.toString

export const isFunc = target => toString.call(target) === '[object Function]'

export const isArray = target => toString.call(target) === '[object Array]'

export default {
  isFunc,
  isArray
}