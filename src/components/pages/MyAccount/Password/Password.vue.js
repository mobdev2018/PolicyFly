
export default {
  name: 'Password',

  components: {

  },

  data () {
    return {
      isChanged: false,
      oldPassword: '',
      newPassword: '',
      repeatPassword: '',
      rules: {
        required: (value) => !!value || 'Required.',
        match: (value) => {
          return this.newPassword === value || 'The password does not match.'
        }
      },
      validation: {
        isMaxLen: false,
        containUpperCase: false,
        containLowerCase: false,
        containNumber: false,
        containSymbol: false
      },
      isValid: false,
      isEditable: false
    }
  },

  methods: {
    onEdit () {
      this.isEditable = true
    },
    onSubmit () {
      if (this.$refs.passwordForm.validate()) {
        this.isEditable = false
        this.$refs.passwordForm.reset()
        this.validation = {
          isMaxLen: false,
          containUpperCase: false,
          containLowerCase: false,
          containNumber: false,
          containSymbol: false
        }

        this.isChanged = true
      }
    },
    onCancel () {
      this.$refs.passwordForm.reset()
      this.isEditable = false
    },
    keyUp (event) {
      if (event.key !== 'Enter') {
        if (this.newPassword.length >= 8) {
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

      const password = this.newPassword.split('')

      password.forEach((letter, i) => {
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

      if (this.oldPassword !== '' && 
        this.newPassword === this.repeatPassword && 
        this.validation.isMaxLen && 
        this.validation.containUpperCase && 
        this.validation.containLowerCase && 
        this.validation.containNumber && 
        this.validation.containSymbol) {

          this.isValid = true
      } else {
        this.isValid = false
      }
    }
  }
}
