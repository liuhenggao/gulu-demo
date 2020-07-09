import Toast from './toast'
let current
export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, params) {
            if (current) {
                current.close()
            }
            current = createToast(Vue, message, params, () => {
                current = null
            })
        }
    }
}

function createToast(Vue, message, params, onClose) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({
        propsData: params
    })
    toast.$slots.default = [message]
    toast.$mount()
    toast.$on('close', onClose)
    document.body.appendChild(toast.$el)
    return toast
}
