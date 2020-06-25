import Vue from 'vue'
import button from './button'
import Icon from './icon'
import buttonGroup from './button-group'
import { assert } from 'chai'

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: true
        }
    },
    components: {
        'g-button': button,
        'g-icon': Icon,
        'g-button-group': buttonGroup
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
const Constructor = Vue.extend(button)
{
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })

    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    console.log(useElement)
    expect(href).to.eq('#i-setting')
    vm.$el.remove()
    vm.$destroy()
}

{
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            loading: true
        }
    })

    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    console.log(useElement)
    expect(href).to.eq('#i-loading')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)

    expect(order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)

    expect(order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const vm = new Constructor({
        propsData: {
            icon: 'setting'
        }
    })
    vm.$mount(div)

    let spy = chai.spy(function () {

    })
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}