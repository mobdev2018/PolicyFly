import {VMoney} from 'v-money'

export default {
  name: 'UnderlyingGeneralLiability',
  directives: {money: VMoney},

  data () {
    return {
      perLocationAggregate: 'false',
      hostLiquorIncluded: 'false',
      limitsProvided: '',
      namedInsured: '',
      carrier: '',
      annualPremium: '',
      startDate: null,
      endDate: null,
      editingIndex: 0,
      data: {},
      values: [],
      rules: {
        required: (value) => !!value || 'Required.'
      },
      money: {
        decimal: '.',
        thousands: ',',
        precision: 0,
        masked: false
      }
    }
  },
  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
  },
  methods: {
    test (event) {
      this.limitsProvided = this.formatNumber(this.limitsProvided)
    },
    cardActivate (name) { 
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
      if (this.questions[this.parentOrder].content[this.order].values.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
      this.onActiveCard([this.parentOrder, this.order])
    },
    onAdd () {      
      if (this.$refs.underlyingForm.validate()) {
        this.data.values.push({
          'perLocationAggregate': this.perLocationAggregate,
          'hostLiquorIncluded': this.hostLiquorIncluded,
          'limitsProvided': this.limitsProvided,
          'namedInsured': this.namedInsured,
          'carrier': this.carrier,
          'annualPremium': this.annualPremium,
          'startDate': this.startDate,
          'endDate': this.endDate
        })
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.$refs.underlyingForm.reset()
      }
    },
    onEdit (index) {
      this.editingIndex = index + 1
      const savedData = this.data.values[index]
      
      this.perLocationAggregate = savedData.perLocationAggregate
      this.hostLiquorIncluded = savedData.hostLiquorIncluded
      this.limitsProvided = savedData.limitsProvided
      this.namedInsured = savedData.namedInsured
      this.carrier = savedData.carrier
      this.annualPremium = savedData.annualPremium
      this.startDate = savedData.startDate
      this.endDate = savedData.endDate
    },
    onDelete (index) {
      this.data.values.splice(index, 1)
      this.data.values = this.data.values
      if (this.data.values.length > 0) {
        this.data.valid = true
      } else {
        this.data.valid = false
      }
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },
    onSave () {
      if (this.$refs.underlyingForm.validate()) {
        this.data.values[this.editingIndex-1] = {
          'perLocationAggregate': this.perLocationAggregate,
          'hostLiquorIncluded': this.hostLiquorIncluded,
          'limitsProvided': this.limitsProvided,
          'namedInsured': this.namedInsured,
          'carrier': this.carrier,
          'annualPremium': this.annualPremium,
          'startDate': this.startDate,
          'endDate': this.endDate
        }
        this.data.valid = true
        this.questions[this.parentOrder].content[this.order] = this.data
        this.updateQuestions(this.questions)

        this.editingIndex = 0
        this.$refs.underlyingForm.reset()
      }
    },
    onCancel () {
      this.editingIndex = 0
      this.$refs.underlyingForm.reset()
    }
  },
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions']
}
