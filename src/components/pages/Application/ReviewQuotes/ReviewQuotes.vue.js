import Quote from 'components/atoms/Common/Quote/Quote'

export default {
  name: 'ReviewQuotes',
  components: {
    Quote
  },
  data () {
    return {
      openedMenu: false,
      quoteList: null,
      selectedIndex: 0
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
  },

  watch: {
    '$route' () {
      this.setData()
    }
  },

  mounted () {
    this.setData()
    this.eventHub.$on('showApplicationQuotesFAB', () => {
      this.openedMenu = !this.openedMenu
    })
  },

  beforeDestroy () {
    this.eventHub.$off('showApplicationQuotesFAB')
  },

  methods: {
    setData () {
      console.log(this.$route.path)
      if (this.$route.path === '/application/quotes/single') {
        this.quoteList = [
          {
            title: '$50M Limit',
            total: '$10,455.00',
            totalAnnualPremium: '$100,000.00',
            quoteList: [
              {
                limit: '$25,000,000 ($10,000 SIR)',
                premium: '$0.00'
              },
              {
                limit: '$25,000,000 xs $25,000,000',
                premium: '$9,975.00'
              }
            ],
            allTaxes: '$0.00',
            allFees: '$480.02'
          }
        ]
      } else {
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
    },
    onApproveQuote(index) {
      this.selectedIndex = index + 1
    },
    onClose() {
      this.selectedIndex = 0
    }
  }
}
