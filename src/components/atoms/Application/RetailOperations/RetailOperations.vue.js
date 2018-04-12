export default {
  name: 'RetailOperations',
  data () {
    return {
      data: {},
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
  },
  methods: {
    cardActivate (name) {
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
    },
    onChange () {
      this.data.valid = false
      for (var i in this.data.content[0].elements) {
        const element = this.data.content[0].elements[i]
        if (element.value) {
          this.data.valid = true
          break
        }
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    }
    // keyPress (event) {
    //   const pattern = /[0-9]/
    //   if (!pattern.test(event.key)) {
    //     event.preventDefault()
    //   }
    // }
  },
  watch: {
    'active' (val) {
      if (val) {
        const keys = Object.keys(this.$refs)
        if (keys.length > 0) {
          // try {
          //   this.$refs.questionForm.$children['0'].focus()
          // } catch (e) {}
        }
      }
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
