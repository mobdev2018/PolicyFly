export default {
  name: 'RepeatPassword',

  components: {

  },

  data () {
    return {
      password: '',
      isValid: false,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },

  methods: {
    onNext () {
      this.$router.replace('/register/phone')
    },
    keyUp () {
      if (this.password === '') {
        this.isValid = false
      } else {
        this.isValid = true
      }
    }
  }
}
