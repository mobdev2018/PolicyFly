import { mapGetters, mapActions } from 'vuex'
import CodeInput from 'components/atoms/Common/CodeInput/CodeInput'

export default {
  name: 'SMSCode',

  components: {
    CodeInput
	},
	
	computed: {
    ...mapGetters([
      'twoFactorSMSInfo'
    ])
	},
	
	data () {
    return {
			isValid: false,
			alert: false
    }
  },

  methods: {
		...mapActions([
			'updateTwoFactorSMSInfo'
    ]),
    onSubmit () {
			const completedData = {
				phone: this.twoFactorSMSInfo.tempPhone,
        tempPhone: ''
			}
			this.updateTwoFactorSMSInfo(completedData)
			this.$router.replace('/account/authentication/preferences')			
		},
		onCancel () {
			this.$router.replace('/account/authentication/configuresms')
		},
		resendCode () {
			this.alert = true
		},
		onFill (isFill) {
			this.isValid = !isFill
		}
  }
}
