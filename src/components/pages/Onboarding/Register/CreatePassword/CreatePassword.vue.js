export default {
  name: 'CreatePassword',

  components: {

  },

  data () {
    return {
      password: '',
      isValid: false,
      validation: {
        isMaxLen: false,
        containUpperCase: false,
        containLowerCase: false,
        containNumber: false,
        containSymbol: false
      },
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },

  methods: {
    onNext () {
      this.$router.replace('/register/repeatpassword')
    },
    onEnterKey () {
      if (this.isValid) {
        this.onNext()
      }
    },
    keyUp (event) {
      if (event.key !== 'Enter') {
        if (this.password.length >= 8) {
          this.validation.isMaxLen = true
        } else {
          this.validation.isMaxLen = false
        }
      }

      this.validation.containUpperCase = false
      this.validation.containLowerCase = false
      this.validation.containNumber = false
      this.validation.containSymbol = false

      const upperPattern = /[A-Z]/
      const lowerPatttern = /[a-z]/
      const numberPattern = /[0-9]/
      const symbolPattern = /[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/

      const array = this.password.split('')

      array.forEach((letter, i) => {
        if (upperPattern.test(letter)) {
          this.validation.containUpperCase = true
        } else if (lowerPatttern.test(letter)) {
          this.validation.containLowerCase = true
        } else if (numberPattern.test(letter)) {
          this.validation.containNumber = true
        } else if (symbolPattern.test(letter)) {
          this.validation.containSymbol = true
        }
      })

      if (this.validation.isMaxLen && this.validation.containUpperCase && this.validation.containLowerCase && this.validation.containNumber && this.validation.containSymbol) {
        this.isValid = true
      } else {
        this.isValid = false
      }
    }
  }
}
