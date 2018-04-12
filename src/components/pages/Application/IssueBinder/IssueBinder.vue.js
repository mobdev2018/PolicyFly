import { mapGetters, mapActions } from 'vuex'
import {VMoney} from 'v-money'
import _ from 'lodash'

export default {
  name: 'IssueBinder',
  directives: {money: VMoney},

  data () {
    return {
      rules: {
        required: (value) => !!value || 'Required.'
      },
      effectiveDate: '01/01/2017',
      expirationDate: '01/01/2018',
      effectiveDateVal: '2017-01-01',
      expirationDateVal: '2018-01-01',
      exclusion: false,
      ny: false,
      leadCommission: 15,
      excessCommission: 10,
      policyId: '',
      quote: {},    
      money: {
        decimal: '.',
        thousands: ',',
        precision: 2,
        masked: false
      }
    }
  },

  created () {
    this.initData()
  },
  
  methods: {
    ...mapActions([
      'addEvent',
      'updateMessage'
    ]),
    initData () {
      this.effectiveDate = '01/01/2017'
      this.expirationDate = '01/01/2018'
      this.exclusion = false
      this.ny = false
      this.leadCommission = 15
      this.excessCommission = 10
      this.policyId = null
      this.quote = {
        annualItems: [
          {
            policyNumber: '',
            limit: '$25M',
            carrier: 'Great American',
            premium: 45554,
            taxes: 0.00,
            limitFees: [
              {
                limitFee: 'NY Surcharge',
                limitAmount: 10
              } 
            ],
            subTotal: 45564
          },
          {
            policyNumber: '',
            limit: '$25M xs $25M',
            carrier: 'Great American',
            premium: 11388,
            taxes: 0.00,
            limitFees: [
              {
                limitFee: 'NY Surcharge',
                limitAmount: 10
              } 
            ],
            subTotal: 11398
          },
          {
            policyNumber: '',
            limit: '$25M xs $50M',
            carrier: 'Fireman\'s Fund',
            premium: 5694,
            taxes: 0.00,
            limitFees: [
              {
                limitFee: 'NY Surcharge',
                limitAmount: 10
              } 
            ],
            subTotal: 5704
          }
        ],
        totalFeeAmount: [
          {
            totalFee: 'RPG Fee',
            amount: 11838
          }
        ],
        annualTotal: 74054
      }
    },
    onSubmit () {
      if (this.$refs.mainForm.validate()) {
        if(window.confirm("Are you sure you want to issue this binder? Any changes made after this point will require an endorsement.")) {
          this.addEvent({
            type: 'binder',
            action: 'submit',
            fname: 'Ian',
            lname: 'Sterling',
            time: '4:38pm'
          })
          this.updateMessage('Your binder has been submitted.')
          this.$router.replace('/application/feed/pendingissue')
        }
      }
    },
    onCancel () {
      this.$refs.mainForm.reset()
      this.initData()
      this.$router.replace({ path: '/application/feed/pendingbinder' })
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
