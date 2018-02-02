import TouchFeedback from './feedback'
import objectAssign from 'object-assign'

let hashMap = []
let count = 0

export default {
    install(Vue, options = {}) {
        Vue.directive('feedback', {
            bind(el, binding) {
                hashMap[count] = new TouchFeedback(el, objectAssign({} ,options , binding.value ))
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