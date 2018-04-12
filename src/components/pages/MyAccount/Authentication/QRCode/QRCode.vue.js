import { mapActions } from 'vuex'
import Qrcode from 'v-qrcode'
import CodeInput from 'components/atoms/Common/CodeInput/CodeInput'

export default {
  name: 'QRCode',

  components: {
		qrcode: Qrcode,
    CodeInput
	},
	
	data () {
    return {
      isValid: false
    }
  },

  methods: {
		...mapActions([
			'updateAuthenticatorApp',
			'modifyUserAuthentication'
    ]),
    onSubmit () {
			this.updateAuthenticatorApp(true)
			this.modifyUserAuthentication(true)
			this.$router.replace('/account/authentication/preferences')			
		},
		onCancel () {
			this.$router.replace('/account/authentication/authenticatorapp')
		},
		onFill (isFill) {
			this.isValid = !isFill
		}
  }
}
