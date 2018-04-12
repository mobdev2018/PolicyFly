import Quote from 'components/atoms/Broker/Quote/Quote'

export default {
  name: 'Quotes',
  components: {
    Quote
  },
  data () {
    return {
      quoteList: null
    }
  },
  created () {
    this.quoteList = [
      {
        title: '$75M Limit',
        total: '$74,054.00',
        quoteList: [
          {
            limit: '$25,000,000 ($10,000 SIR)',
            premium: '$45,554.00'
          },
          {
            limit: '$25,000,000 xs $25,000,000',
            premium: '$11,388.00'
          },
          {
            limit: '$25,000,000 xs $50,000,000',
            premium: '$5,694.00'
          }
        ],
        allTaxes: '$0.00',
        allFees: '$11,418.00'
      },
      {
        title: '$100M Limit',
        total: '$75,312.00',
        quoteList: [
          {
            limit: '$25,000,000 ($10,000 SIR)',
            premium: '$45,554.00'
          },
          {
            limit: '$25,000,000 xs $25,000,000',
            premium: '$11,388.00'
          },
          {
            limit: '$25,000,000 xs $50,000,000',
            premium: '$5,694.00'
          },
          {
            limit: '$25,000,000 xs $75,000,000',
            premium: '$1,258.00'
          }
        ],
        allTaxes: '$0.00',
        allFees: '$11,418.00'
      }
    ]
  }
}
