import TouchFeedback from './feedback'
import defaults from 'lodash/defaults'
export default {
    install(Vue, options = {}) {
        Vue.directive('feedback', function (el,binding) {
            new TouchFeedback(el,defaults(binding.value,options))
        })
    }
}