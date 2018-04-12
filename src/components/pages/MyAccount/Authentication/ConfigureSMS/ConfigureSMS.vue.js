import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ConfigureSMS',

	computed: {
    ...mapGetters([
      'twoFactorSMSInfo'
    ])
  },
	
	data () {
    return {
			isValid: false,
			phoneNumber: ''
    }
  },

  watch: {
    '$route' () {
      this.phoneNumber = ''
      this.isValid = false
    }
  },

  mounted () {
    this.phoneNumber = ''
    this.isValid = false
  },

  methods: {
		...mapActions([
      'updateTwoFactorSMSInfo'
    ]),
    onNext () {
      const updatedData = {
        phone: this.twoFactorSMSInfo.phone,
        tempPhone: this.phoneNumber
      }
      this.updateTwoFactorSMSInfo(updatedData);
			this.$router.replace('/account/authentication/sms')			
		},
		onCancel () {
			this.$router.replace('/account/authentication/preferences')
		},
		keyUp (event) {
      if (event.key === 'Enter' && this.isValid === true) {
        this.onNext()
      }

      if (this.phoneNumber === '') {
        this.isValid = false
      } else {
        const patternPhone = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
        if (patternPhone.test(this.phoneNumber)) {
          this.isValid = true
        } else {
          this.isValid = false
        }
      }
    }
  }
}
