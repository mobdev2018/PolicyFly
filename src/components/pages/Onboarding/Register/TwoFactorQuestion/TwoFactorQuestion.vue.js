export default {
  name: 'TwoFactorQuestion',

  components: {

  },

  methods: {
    onYes () {
      this.$router.replace('/register/qrcode')
    },
    onNo () {
      this.$router.replace('/login')
    }
  }
}
