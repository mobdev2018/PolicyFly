import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Preferences',

  computed: {
    ...mapGetters([
      'isAuthenticatorApp',
      'modifiedUserAuthentication',
      'twoFactorSMSInfo'
    ])
  },

  data () {
    return {
      alert: false,
      phoneNumber: ''
    }
  },

  watch: {
    '$route' () {
      this.initData()
    }
  },

  mounted () {
    this.initData()
  },

  methods: {
    ...mapActions([
      'updateAuthenticatorApp',
      'modifyUserAuthentication'
    ]),
    initData () {
      if (this.phoneNumber != '' && this.phoneNumber != this.twoFactorSMSInfo.phone) {
        setTimeout(() => this.alert = true, 500)        
      }
      if (this.modifiedUserAuthentication) {
        setTimeout(() => this.alert = true, 500)
        this.modifyUserAuthentication(false)
      }
      this.phoneNumber = _.cloneDeep(this.twoFactorSMSInfo.phone)
      
    },
    modifySMS () {
      this.$router.replace('/account/authentication/configuresms')
    },
    addAuthenticatorApp () {
      this.$router.replace('/account/authentication/authenticatorapp')
    },
    deleteAuthenticatorApp () {
      this.updateAuthenticatorApp(false)
    }
  }
}
