import Vue from 'vue'
import Button from './button'
import Icon from './icon'

new Vue({
    el: '#app',
    data() {
        return {
            loading1: true,
            loading2: true
        }
    },
    components: {
        'g-button': Button,
        'g-icon': Icon
    }
})