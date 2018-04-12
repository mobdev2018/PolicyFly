import { mapGetters, mapActions } from 'vuex'
import {VMoney} from 'v-money'
import { QuoteTemplate } from 'src/data/quoteTemplate.js'
import _ from 'lodash'

export default {
  name: 'SubmitQuotes',
  directives: {money: VMoney},

  computed: {
    QuoteTemplate () {
      return QuoteTemplate
    }
  },

  data () {
    return {
      effectiveDate: null,
      effectiveDateFormatted: null,
      expirationDate: null,
      expirationDateFormatted: null,
      exclusion: false,
      ny: false,
      leadCommission: 15,
      excessCommission: 10,
      limitsRequestedItems: [
        { title: '$25M' },
        { title: '$50M' },
        { title: '$75M' }
      ],
      carrierItems: [
        { title: 'Great American' },
        { title: 'Fireman\'s Fund' }
      ],
      quotes: [
        {
          limitsRequested: '$75M',
          annualItems: [
            {
              limit: '$25M',
              carrier: 'Great American',
              premium: 0.00,
              taxes: 0.00,
              limitFees: [
                {
                  limitFee: 'NJ Surcharge',
                  limitAmount: 0
                } 
              ],
              subTotal: 0
            },
            {
              limit: '$25M xs $25M',
              carrier: 'Great American',
              premium: 0.00,
              taxes: 0.00,
              limitFees: [
                {
                  limitFee: 'NJ Surcharge',
                  limitAmount: 0
                } 
              ],
              subTotal: 0
            },
            {
              limit: '$25M xs $50M',
              carrier: 'Fireman\'s Fund',
              premium: 0.00,
              taxes: 0.00,
              limitFees: [
                {
                  limitFee: 'NJ Surcharge',
                  limitAmount: 0
                } 
              ],
              subTotal: 0
            }
          ],
          totalFeeAmount: [
            {
              totalFee: 'RPG Fee',
              amount: 0
            }
          ],
          annualTotal: 0
        }
      ],      
      money: {
        decimal: '.',
        thousands: ',',
        precision: 2,
        masked: false
      }
    }
  },
  
  methods: {
    ...mapActions([
      'addEvent',
      'updateMessage'
    ]),
    onAddQuote () {
      this.quotes.push(_.cloneDeep(this.QuoteTemplate))
    },
    onDeleteQuote (quoteIndex) {
      if(window.confirm("Are you sure you want to delete this quote?")) {
        this.quotes.splice(quoteIndex, 1)
      }
    },
    selectLimit(quoteIndex, limit) {
      this.quotes[quoteIndex].limitsRequested = limit
    },
    checkLimit (annualItemIndex, limitsRequested) {
      if (limitsRequested === '$25M' && annualItemIndex == 0) {
        return true
      } else if (limitsRequested === '$50M' && annualItemIndex < 2) {
        return true
      } else if (limitsRequested === '$75M' && annualItemIndex < 3) {
        return true
      }
      return false
    },
    onSubmit () {
      this.addEvent({
        type: 'quote',
        action: 'submit',
        fname: 'Ian',
        lname: 'Sterling',
        time: '4:38pm'
      })
      this.updateMessage('Your quote(s) have been submitted.')
      this.$router.replace('/application/feed/quoted')
    },
    onCancel () {
      if(window.confirm("Are you sure you want to cancel this quote?")) {
        this.$router.replace({ path: '/application/feed' })
      }
    },
    addLimitFee (limitFees) {
      limitFees.push({
        limitFee: '',
        limitAmount: '0.00'
      })
    },
    removeLimitFee (limitFees, i) {
      limitFees.splice(i, 1)
    },
    addTotalFee (quoteIndex) {
      this.quotes[quoteIndex].totalFeeAmount.push({
        totalFee: '',
        amount: 0
      })
    },
    removeTotalFee (quoteIndex, i) {
      console.log(quoteIndex, i)
      console.log(this.quotes[quoteIndex].totalFeeAmount)
      this.quotes[quoteIndex].totalFeeAmount.splice(i, 1)
    },
    calcSubtotal (annualItem) {
      var limitAmount = 0
      for (var i = 0; i < annualItem.limitFees.length; i++) {
        const limitFee = annualItem.limitFees[i]
        limitAmount += this.formatDecimal(limitFee.limitAmount)
      }
      annualItem.subTotal = this.formatDecimal(annualItem.premium) + this.formatDecimal(annualItem.taxes) + limitAmount
      return this.formatPrice(annualItem.subTotal)
    },
    calcTotalAmount (quoteIndex) {
      this.quotes[quoteIndex].annualTotal = 0
      for (var i = 0; i < this.quotes[quoteIndex].annualItems.length; i++) {
        const annualItem = this.quotes[quoteIndex].annualItems[i]
        var limitAmount = 0
        for (var j = 0; j < annualItem.limitFees.length; j++) {
          const limitFee = annualItem.limitFees[j]
          limitAmount += this.formatDecimal(limitFee.limitAmount)
        }
        this.quotes[quoteIndex].annualItems[i].subTotal = this.formatDecimal(annualItem.premium) + this.formatDecimal(annualItem.taxes) + limitAmount
        this.quotes[quoteIndex].annualTotal += this.quotes[quoteIndex].annualItems[i].subTotal
      }
      
      for (var i = 0; i < this.quotes[quoteIndex].totalFeeAmount.length; i++) {
        this.quotes[quoteIndex].annualTotal += this.formatDecimal(this.quotes[quoteIndex].totalFeeAmount[i].amount)  
      }
    },    
    formatPrice(value) {
      let val = (value/1).toFixed(2).replace(',', '.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    },
    formatDecimal(value) {
      let val = value.toString().replace(/,/g, '')
      return parseFloat(val)      
    }    
  }
}
