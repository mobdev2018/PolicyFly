import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'

export default {
  name: 'ForgotPasswordLayout',

  components: {
    Navbar,
    NavbarHeader
  },

  data () {
    return {
      title: 'Forgot Password',
      disabledNextButton: true
    }
  },

  mounted () {    
    this.eventHub.$on('enabledNextButton', () => {
      this.disabledNextButton = false
    })
    this.eventHub.$on('disabledNextButton', () => {
      this.disabledNextButton = true
    })
  },
  
  beforeDestroy () {
    this.eventHub.$off('enabledNextButton')
    this.eventHub.$off('disabledNextButton')
  },

  methods: {
    next () {
      this.disabledNextButton = false

      switch (this.$route.fullPath) {
        case '/forgotpassword':
        case '/forgotpassword/':
          this.$router.replace('/forgotpassword/confirm')
          break
        case '/forgotpassword/confirm':
        case '/forgotpassword/confirm/':
          this.$router.replace('/forgotpassword/resetpassword')
          break
        case '/forgotpassword/resetpassword':
        case '/forgotpassword/resetpassword/':
          this.$router.replace('/login')
          break
      }
    },
    cancel () {
      this.$router.replace('/login')
    }
  }
}
