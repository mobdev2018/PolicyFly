export default {
  name: 'TotalRatableExposures',
  data () {
    return {
      grossReceipts: '',
      lessorsRiskExposures: false,
      occupant: '',
      sqft: '',
      autoExposure: false,
      editingIndex: 0,
      data: {},
      exposures: [],
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
    this.exposures = this.data.content[1].exposures
  },
  methods: {
    cardActivate () {
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
      if (this.data.content[1].exposures.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    onAdd () {
      if (this.lessorsRiskExposures === 'true' && this.grossReceipts != '' && this.occupant != '' && this.sqft != '') {
        this.exposures.push({
          'grossReceipts': this.grossReceipts,
          'occupant': this.occupant,
          'sqft': this.sqft,
          'lessorsRiskExposures': this.lessorsRiskExposures
        })
        this.data.content[1].exposures = this.exposures
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.$refs.questionForm.reset()
      }
    },
    onEdit (index) {
      this.editingIndex = index + 1
      const savedData = this.data.content[1].exposures[index]
      this.lessorsRiskExposures = 'true'
      this.grossReceipts = savedData.grossReceipts
      this.occupant = savedData.occupant
      this.sqft = savedData.sqft
    },
    onDelete (index) {
      this.exposures.splice(index, 1)
      this.data.content[1].exposures = this.exposures
      if (this.data.content[1].exposures.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
      this.editingIndex = 0
      this.$refs.questionForm.reset()
    },
    onCancel () {
      this.editingIndex = 0
      this.$refs.questionForm.reset()
    },
    onSave () {
      if (this.lessorsRiskExposures == 'true' && this.grossReceipts != '' && this.occupant != '' && this.sqft != '') {
        this.exposures[this.editingIndex-1] = {
          'grossReceipts': this.grossReceipts,
          'occupant': this.occupant,
          'sqft': this.sqft,
          'lessorsRiskExposures': this.lessorsRiskExposures
        }
        this.data.content[1].exposures = this.exposures
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)
        
        this.editingIndex = 0
        this.$refs.questionForm.reset()
      }
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
