import TouchFeedback from './feedback'
export default {
    install(Vue, options = {}) {
        Vue.directive('touch', function (el) {
            new TouchFeedback(el)
        })
    }
}