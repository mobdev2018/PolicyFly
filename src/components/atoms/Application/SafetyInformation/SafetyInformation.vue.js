export default {
  name: 'SafetyInformation',
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
      
      this.data.valid = true
      for (var i = 0; i < this.data.content.length; i++) {
        if (this.data.content[i].value === null || this.data.content[i].value === '') {
          this.data.valid = false
        }
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
