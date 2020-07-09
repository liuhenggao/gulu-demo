import Vue from 'vue'
import plugin from './plugin'
import button from './button'
import Icon from './icon'
import buttonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Content from './content'
import Footer from './footer'
import Sider from './sider'
import Toast from './toast'
import { assert } from 'chai'
Vue.use(plugin)

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: true,
            message: 'lixu是个人！'
        }
    },
    components: {
        'g-button': button,
        'g-icon': Icon,
        'g-button-group': buttonGroup,
        'g-input': Input,
        'g-row': Row,
        'g-col': Col,
        'g-layout': Layout,
        'g-header': Header,
        'g-content': Content,
        'g-footer': Footer,
        'g-sider': Sider,
        'g-toast': Toast
    },
    methods: {
        inputChange(e) {
            console.log(e)
        },
        input(e) {
            this.message = e
        },
        log() {
            console.log('lll');
        },
        toast() {
            this.$toast(`欢迎光临${parseInt(Math.random() * 100)}点点`, {
                autoClose: false,
                position: 'bottom',
                closeButton: {
                    text: '关闭'
                }
            })
        }
    },
})

// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect
// const Constructor = Vue.extend(button)
// {
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })

//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     console.log(useElement)
//     expect(href).to.eq('#i-setting')
//     vm.$el.remove()
//     vm.$destroy()
// }

// {
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             loading: true
//         }
//     })

//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     console.log(useElement)
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)

//     expect(order).to.eq('1')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)

//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'setting'
//         }
//     })
//     vm.$mount(div)

//     let spy = chai.spy(function () {

//     })
//     vm.$on('click', spy)
//     let button = vm.$el
//     button.click()
//     expect(spy).to.have.been.called()
// }