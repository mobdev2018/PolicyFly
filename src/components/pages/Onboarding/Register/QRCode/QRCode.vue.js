import Qrcode from 'v-qrcode'
import { mapGetters, mapActions } from 'vuex'
import CodeInput from 'components/atoms/Common/CodeInput/CodeInput'

export default {
  name: 'QRScan',

  components: {
    qrcode: Qrcode,
    CodeInput
  },

  data () {
    return {
      isValid: false,
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },

  computed: {
  },

  methods: {
    onFill (isFill) {
			this.isValid = !isFill
		},
    onNext () {
      this.$router.replace('/register/completed')
    }
  }
}
