export default {
  name: 'RegisterPhone',

  components: {

  },

  data () {
    return {
      phoneNumber: '',
      isValid: false
    }
  },

  methods: {
    onNext () {
      this.$router.replace('/verifycode?from=register')
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
