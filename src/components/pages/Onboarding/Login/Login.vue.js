import { mapActions } from 'vuex'

export default {
  name: 'Login',

  components: {
  },

  data () {
    return {
      email: '',
      password: '',
      rules: {
        requiredEmail: (value) => !!value || 'Please enter your email.',
        requiredPassword: (value) => !!value || 'Please enter your password.',
        correctCredential: (value) => !this.isSubmitted || 'Error: Email or password is incorrect.',
        validEmail: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email is invalid.'
        }
      },
      isSubmitted: false
    }
  },

  methods: {
    ...mapActions([
      'updateAuthEmail',
      'updateAuthPassword'
    ]),
    onChangeInput (e, type) {
      if (e.keyCode === 13) {
        if (type === 'email') {
          this.$refs.password.focus()
        } else {
          this.onLogin()
        }
      }
      this.isSubmitted = false
    },
    onLogin () {
      if (this.$refs.loginForm.validate()) {
        this.$http.post('/users/auth/', {
          email: this.email,
          password: this.password
        })
        .then(res => {
          if (res.data.password_validated) {
            this.$router.replace('/verifycode')
          }
          const { email, password } = this
          this.updateAuthEmail(email)
          this.updateAuthPassword(password)
        })
        .catch(err => {
          console.error('auth err:', err)
          if (err.response.status === 404) {
            this.isSubmitted = true
            this.$refs.loginForm.validate()
          }
        })
      }
    }
  }
}
