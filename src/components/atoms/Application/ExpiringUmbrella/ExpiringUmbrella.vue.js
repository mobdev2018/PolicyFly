export default {
  name: 'ExpiringUmbrella',
  data () {
    return {
      carrier: '',
      limitsProvided: '',
      annualPremium: '',
      editingIndex: 0,
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
    onAdd () {
      if (this.$refs.expiringUmbrellaForm.validate()) {
        this.values.push({
          'carrier': this.carrier,
          'limitsProvided': this.limitsProvided,
          'annualPremium': this.annualPremium
        })
        this.data.values = this.values
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)
        
        this.$refs.expiringUmbrellaForm.reset()
      }
    },
    onEdit (index) {
      this.editingIndex = index + 1
      const savedData = this.data.values[index]
      this.carrier = savedData.carrier
      this.limitsProvided = savedData.limitsProvided
      this.annualPremium = savedData.annualPremium
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
      if (this.$refs.expiringUmbrellaForm.validate()) {
        this.data.values[this.editingIndex-1] = {
          'carrier': this.carrier,
          'limitsProvided': this.limitsProvided,
          'annualPremium': this.annualPremium
        }
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.editingIndex = 0
        this.$refs.expiringUmbrellaForm.reset()
      }
    },
    onCancel () {
      this.editingIndex = 0
      this.$refs.expiringUmbrellaForm.reset()
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
