import { focus } from 'vue-focus'

export default {
  name: 'CodeInput',
  directives: { focus: focus },
  props: ['themeColor', 'onFill'],

  data () {
    return {
      code: [],
      counter: 0,
      key: ''
    }
  },

  computed: {
    // Code () {
    //   return this.code.join('')
    // }
  },

  watch: {
    '$route' () {
      // this.counter = 0
      this.resetValue(0)
    }
  },

  methods: {
    keyDown (event) {
      if (event.key === 'e') {
        event.preventDefault()
      }
      if (event.key === 'Backspace') {
        this.counter -= 1
        if (this.counter < 0) {
          this.counter = 0
        }
        this.resetValue(this.counter)
      } else {
        const numberPattern = /[0-9]/
        if (numberPattern.test(event.key)) {
          this.counter += 1
        } else {
          this.code[this.counter] = ''
        }
        this.resetValue(this.counter)
        if (this.counter > 5) {
          this.onFill(true)
          // this.validateNextButton(true)
        } else {
          this.onFill(false)
          // this.validateNextButton(false)
        }
      }
    },
    resetValue (index) {
      this.counter = index
      this.code.forEach((item, i) => {
        if (i >= index) {
          this.code[i] = ''
        }
      })
      if (this.counter < 6) {
        this.onFill(false)
        // this.validateNextButton(false)
      }
    }
  }  
}
