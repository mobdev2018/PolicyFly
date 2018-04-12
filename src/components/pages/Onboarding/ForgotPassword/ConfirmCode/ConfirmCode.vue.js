import CodeInput from 'components/atoms/Common/CodeInput/CodeInput'

export default {
  name: 'ConfirmCode',

  components: {
    CodeInput
  },

  data () {
    return {
      title: 'Confirm'
    }
  },

  methods: {
    onFill (isFill) {
      if (isFill) {
        this.eventHub.$emit('enabledNextButton')
      } else {
        this.eventHub.$emit('disabledNextButton')
      }      
		}
  }
}
