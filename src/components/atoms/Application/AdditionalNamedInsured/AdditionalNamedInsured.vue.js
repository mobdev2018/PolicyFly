export default {
  name: 'AdditionalNamedInsured',
  data () {
    return {
      namedInsured: '',
      newName: '',
      editableIndex: 0,
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
      if (this.data.content[0].value.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    onAdd () {
      if (this.$refs.questionForm.validate()) {
        this.data.content[0].value.push(this.namedInsured)
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)
        this.$refs.questionForm.reset()        
      }
    },
    onEdit (index) {
      this.data.content[0].value[index] = this.$refs.newName[0].value
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
      this.editableIndex = 0
    },
    onDelete (index) {
      this.data.content[0].value.splice(index, 1)
      if (this.data.content[0].value.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
