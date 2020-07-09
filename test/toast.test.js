const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在', () => {
        expect(Toast).to.exist
    })

    describe('props', function () {
        it('接受autoClose', (done) => {
            let div = document.createElement('div')
            document.body.appendChild(div)
            let Constructor = Vue.extend(Toast)
            let vm = new Constructor({
                propsData: {
                    autoClose: false
                }
            })
            vm.$slots.default = ['jjjjj']
            vm.$mount(div)
            if (vm.autoClose === false) {
                setTimeout(() => {
                    expect(document.body.contains(vm.$el)).to.eq(true)
                    done()
                }, 1500)
            } else if (typeof vm.autoClose === 'number') {
                vm.$on('close', () => {
                    expect(document.body.contains(vm.$el)).to.eq(false)
                    done()
                })
            }

        })
        it('接受 closeButton', () => {
            const callback = sinon.fake();
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    autoClose: false,
                    closeButton: {
                        text: '关闭吧',
                        callback,
                    },
                }
            })
            vm.$slots.default = ['jjjjj']
            vm.$mount()
            let closeButton = vm.$el.querySelector('.icon-remove')
            expect(closeButton.textContent.trim()).to.eq('关闭吧')
            closeButton.click()
            expect(callback).to.have.been.called
        })
        it('接受position', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                propsData: {
                    position: 'center'
                }
            })
            vm.$slots.default = ['jjjjj']
            vm.$mount()
            expect(vm.$el.classList.contains('toast-center')).to.eq(true)
        })

    })
})

