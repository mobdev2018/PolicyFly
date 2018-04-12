export default {
  name: 'LimitsRequested',
  data () {
    return {
      data: {},
      names: [],
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
    this.names = this.data.content[0].value
  },
  methods: {
    cardActivate (name) {
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
      
      const elements = this.data.content[0].elements
      this.data.valid = false
      for (var i = 0; i < elements.length; i++) {
        const element = elements[i]
        if (element.value === true) {
          this.data.valid = true
          break
        }
      }
      
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
