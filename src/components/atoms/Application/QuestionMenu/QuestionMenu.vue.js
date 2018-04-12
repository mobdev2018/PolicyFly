export default {
  name: 'QuestionMenu',
  data () {
    return {
      // data: {}
    }
  },

  methods: {
    isActive (index) {
      this.completed()
      return this.activeRoute[0] === this.parentOrder && this.activeRoute[1] === index
    },
    activedIndex () {
      for (var i = 0; i < this.data.content.length; i++) {
        if (this.isActive(i)) {
          return i
        }
      }
    },
    completed () {
      this.data.valid = true
      for (var i = 0; i < this.data.content.length; i++) {
        var item = this.data.content[i]
        if (item.valid === false) {
          this.data.valid = false
          break
        }
      }
      this.questions[this.parentOrder] = this.data
      this.updateQuestions(this.questions)
    }
  },
  props: ['data', 'questions', 'activeRoute', 'parentOrder', 'updateQuestions']
}
