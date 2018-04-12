import { mapGetters, mapActions } from 'vuex'
import TextBox from 'components/atoms/Common/TextBox/TextBox'
import { ApplicationFormList } from 'src/data/applicationform.js'
import _ from 'lodash'

export default {
  name: 'NewApplicationStart',

  components: {
    TextBox
  },

  computed: {
    ApplicationFormList () {
      return ApplicationFormList
    }
  },

  data () {
    return {
      name: '',
      isValid: false,
      rules: {
        required: (value) => !!value || 'Required.',
        validEmail: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
      }
    }
  },

  methods: {
    ...mapActions([
      'initQuestions',
      'updatePrimaryName'
    ]),
    onStart () {
      if (this.name != '') {
        this.initQuestions(this.ApplicationFormList)
        this.updatePrimaryName(this.name)
        this.$router.replace({path: '/home/form'})
      }
    }
  }
}
