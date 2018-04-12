export default {
  name: 'ScheduleOfLocations',
  data () {
    return {
      address: '',
      address2: '',
      locationNotes: '',
      editingIndex: 0,
      enabledAddButton: false,
      data: {},
      values: [],
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
    this.values = this.data.values
  },

  methods: {
    cardActivate () {
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
      if (this.data.values.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    onKeyUp () {
      if (this.address !== '') {
        this.enabledAddButton = true
      } else {
        this.enabledAddButton = false
      }
    },
    onAdd () {
      if (this.address !== '') {
        this.values.push({
          'address': this.address,
          'address2': this.address2,
          'locationNotes': this.locationNotes
        })
        this.data.values = this.values
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.$refs.questionForm.reset()
        this.enabledAddButton = false
      }
    },
    onEdit (index) {
      this.editingIndex = index + 1
      this.address = this.data.values[index].address
      this.address2 = this.data.values[index].address2
      this.locationNotes = this.data.values[index].locationNotes
    },
    onDelete (index) {
      this.values.splice(index, 1)
      this.data.values = this.values
      if (this.data.values.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    onSave () {
      if (this.address !== '') {
        this.data.values[this.editingIndex-1] = {
          'address': this.address,
          'address2': this.address2,
          'locationNotes': this.locationNotes
        }
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)
        
        this.editingIndex = 0
        this.$refs.questionForm.reset()
        this.enabledAddButton = false
      }
    },
    onCancel () {
      this.editingIndex = 0
      this.$refs.questionForm.reset()
      this.enabledAddButton = false
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
