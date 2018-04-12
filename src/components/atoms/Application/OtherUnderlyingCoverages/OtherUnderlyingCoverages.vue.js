export default {
  name: 'OtherUnderlyingCoverages',
  data () {
    return {
      coverageType: '',
      coverageName: '',
      limitProvided: '',
      namedInsured: '',
      carrier: '',
      annualPremium: '',
      startDate: null,
      endDate: null,
      editingIndex: 0,
      data: {},
      item: {},
      values: [],
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
    this.item = this.data.content[0]
    this.values = this.data.values
  },
  methods: {
    cardActivate (name) {
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
    onAdd () {      
      if (this.$refs.otherUnderlyingForm.validate()) {
        if (this.coverageType != 'Other Liability') {
          this.coverageName = this.coverageType
        }
        this.values.push({
          'coverageType': this.coverageType,
          'coverageName': this.coverageName,
          'limitProvided': this.limitProvided,
          'namedInsured': this.namedInsured,
          'carrier': this.carrier,
          'annualPremium': this.annualPremium,
          'startDate': this.startDate,
          'endDate': this.endDate
        })
        this.data.values = this.values
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.$refs.otherUnderlyingForm.reset()
        this.coverageType = ''
      }
    },
    onEdit (index) {
      this.editingIndex = index + 1
      const savedData = this.data.values[index]
      this.coverageType = savedData.coverageType
      this.coverageName = savedData.coverageName
      this.limitProvided = savedData.limitProvided
      this.namedInsured = savedData.namedInsured
      this.carrier = savedData.carrier
      this.annualPremium = savedData.annualPremium
      this.startDate = savedData.startDate
      this.endDate = savedData.endDate
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
      this.onCancel()
    },
    addCoverageType (type) {
      this.coverageType = type
    },
    onSave () {
      if (this.$refs.otherUnderlyingForm.validate()) {
        if (this.coverageType != 'Other Liability') {
          this.coverageName = this.coverageType
        }
        this.data.values[this.editingIndex-1] = {
          'coverageType': this.coverageType,
          'coverageName': this.coverageName,
          'limitProvided': this.limitProvided,
          'namedInsured': this.namedInsured,
          'carrier': this.carrier,
          'annualPremium': this.annualPremium,
          'startDate': this.startDate,
          'endDate': this.endDate
        }
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.$refs.otherUnderlyingForm.reset()
        this.coverageType = ''
      }
    },
    onCancel () {
      this.editingIndex = 0
      this.$refs.otherUnderlyingForm.reset()
      this.coverageType = ''
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
