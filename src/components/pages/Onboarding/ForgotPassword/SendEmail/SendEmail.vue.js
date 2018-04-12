import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SendEmail',

  data () {
    return {
      title: 'ForgotPassword',
      email: '',
      rules: {
        required: (value) => !!value || 'Required.',
        email: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  methods: {
    keyUp (event) {
      const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (pattern.test(this.email)) {
        this.eventHub.$emit('enabledNextButton')
      } else {
        this.eventHub.$emit('disabledNextButton')
      }
    },
    onEnter () {
      if (this.$refs.form.validate()) {
        this.eventHub.$emit('enabledNextButton')
        this.$router.replace('/forgotpassword/confirm')
      } else {
        this.eventHub.$emit('disabledNextButton')
      }
    }
  }
}
