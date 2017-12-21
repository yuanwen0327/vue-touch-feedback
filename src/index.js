import TouchFeedback from './feedback'
import defaults from 'lodash/defaults'

let hashMap = []
let count = 0

export default {
    install(Vue, options = {}) {
        Vue.directive('feedback', {
            bind(el, binding) {
                hashMap[count] = new TouchFeedback(el, defaults(binding.value, options))
                el.dataset.id = count
                count++
            },
            unbind(el) {
                hashMap[el.dataset.id].destory()
                delete hashMap[el.dataset.id]
            }
        })
    }
}