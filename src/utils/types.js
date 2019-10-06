const toStirng = Object.prototype.toString

export const isFunc = target => toString.call(target) === '[object Function]'

export const isArray = target => toString.call(target) === '[object Array]'

export const isBool = target => toString.call(target) === '[object Boolean]'

export default {
  isFunc,
  isArray,
  isBool
}