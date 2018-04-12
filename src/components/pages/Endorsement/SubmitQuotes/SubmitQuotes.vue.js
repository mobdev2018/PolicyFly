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
      premiumBearingEndorsement: true,
      effectiveDate: null,
      effectiveDateFormatted: null,
      expirationDate: null,
      expirationDateFormatted: null,
      exclusion: false,
      ny: false,
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
              deltaPremium: 0.00,
              premium: 0.00,
              deltaTaxes: 0.00,
              prTaxes: 0.00,
              limitFees: {
                limitFee: 'NY Surcharge',
                deltaAmount: 0,
                prAmount: 0
              },
              deltaSubTotal: 0
            },
            {
              limit: '$25M xs $25M',
              deltaPremium: 0.00,
              prPremium: 0.00,
              deltaTaxes: 0.00,
              prTaxes: 0.00,
              limitFees: {
                limitFee: 'NY Surcharge',
                deltaAmount: 0,
                prAmount: 0
              },
              deltaSubTotal: 0
            },
            {
              limit: '$25M xs $50M',
              deltaPremium: 0.00,
              prPremium: 0.00,
              deltaTaxes: 0.00,
              prTaxes: 0.00,
              limitFees: {
                limitFee: 'NY Surcharge',
                deltaAmount: 0,
                prAmount: 0
              },
              deltaSubTotal: 0
            }
          ],
          totalFeeAmount: {
            totalFee: 'RPG Fee',
            deltaAmount: 0,
            prAmount: 0
          },
          annualTotal: 0,
          deltaTotal: 0,
          proratedTotal: 0
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
    selectLimit(quoteIndex, limit) {
      this.quotes[quoteIndex].limitsRequested = limit
      this.calcTotalAmount(quoteIndex)
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
    calcTotalAmount (quoteIndex) {
      this.quotes[quoteIndex].annualTotal = 0
      this.quotes[quoteIndex].deltaTotal = 0
      this.quotes[quoteIndex].proratedTotal = 0
      var itemLength = 0
      if (this.quotes[quoteIndex].limitsRequested === '$25M') {
        itemLength = 1
      } else if (this.quotes[quoteIndex].limitsRequested === '$50M') {
        itemLength = 2
      } else if (this.quotes[quoteIndex].limitsRequested === '$75M') {
        itemLength = 3
      }
      
      for (var i = 0; i < itemLength; i++) {
        const annualItem = this.quotes[quoteIndex].annualItems[i]
        this.quotes[quoteIndex].annualItems[i].deltaSubTotal = this.formatDecimal(annualItem.deltaPremium) + this.formatDecimal(annualItem.deltaTaxes) + this.formatDecimal(annualItem.limitFees.deltaAmount)
        this.quotes[quoteIndex].deltaTotal += this.quotes[quoteIndex].annualItems[i].deltaSubTotal

        this.quotes[quoteIndex].proratedTotal += this.formatDecimal(annualItem.prPremium) + this.formatDecimal(annualItem.prTaxes) + this.formatDecimal(annualItem.limitFees.prAmount)
      }
      
      this.quotes[quoteIndex].deltaTotal += this.formatDecimal(this.quotes[quoteIndex].totalFeeAmount.deltaAmount)
      this.quotes[quoteIndex].proratedTotal += this.formatDecimal(this.quotes[quoteIndex].totalFeeAmount.prAmount)
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
