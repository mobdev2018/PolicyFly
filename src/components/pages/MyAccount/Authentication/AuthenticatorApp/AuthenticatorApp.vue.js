
export default {
  name: 'AuthenticatorApp',

  components: {

  },

  methods: {
    onNext () {
			this.$router.replace('/account/authentication/qrcode')
		},
		onCancel () {
			this.$router.replace('/account/authentication/preferences')
		}
  }
}
