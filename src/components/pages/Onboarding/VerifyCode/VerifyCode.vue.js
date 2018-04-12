import { mapGetters, mapActions } from 'vuex'
import CodeInput from 'components/atoms/Common/CodeInput/CodeInput'

export default {
  name: 'VerifyCode',

  components: {
    CodeInput
  },

  data () {
    return {
      disabledVerifyButton: false,
      isValid: false,
      from: '',
      second: false,
      method: '',
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },

  computed: {
    ...mapGetters([
      'authEmail',
      'authPassword'
    ])
  },

  mounted () {
    const email = this.authEmail
    const password = this.authPassword
    if (!(email && password)) this.$router.replace('/login')
    if (this.$route.query.from === 'register') {
      this.from = 'register'
    } else {
      this.from = 'login'
    }
    if (this.$route.query.second === 'true') {
      this.second = true
    } else {
      this.second = false
    }
    if (this.$route.query.method === 'app') {
      this.method = 'app'
    } else {
      this.method = ''
    }
  },

  methods: {
    ...mapActions([
      'updateSessionData',
      'updateAuthPassword'
    ]),
    onFill (isFill) {
      this.disabledVerifyButton = !isFill
    },
    onVerify () {
      if (this.$route.query.from === 'register') {
        this.$router.replace('/register/question')
      } else {
        // eslint-disable-next-line
        const otp_token = this.$refs.codeInput.code.join('')
        const email = this.authEmail
        const password = this.authPassword
        this.$http.post('/users/auth/', { email, password, otp_token })
        .then(res => {
          if (res.data.token_validated) {
            // add session info to the store
            const SPAToken = res.data.spa_token
            const expirationDate = new Date()
            expirationDate.setMinutes(expirationDate.getMinutes() + res.data.session_length / 60)
            this.updateSessionData({
              SPAToken,
              expirationDate
            })
            // Remove the user's password from the store after the session has been successfully established
            this.updateAuthPassword(null)
            this.$router.replace('/home')
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 403) {
            // placeholder to notify user of error
            alert('Invalid code. Please try again.')
            this.$refs.codeInput.code = []
          }
        })
      }
    }
  }
}
