import AdditionalNamedInsured from '../AdditionalNamedInsured/AdditionalNamedInsured'
import LimitsRequested from '../LimitsRequested/LimitsRequested'
import UnderlyingGeneralLiability from '../UnderlyingGeneralLiability/UnderlyingGeneralLiability'
import OtherUnderlyingCoverages from '../OtherUnderlyingCoverages/OtherUnderlyingCoverages'
import ExpiringUmbrella from '../ExpiringUmbrella/ExpiringUmbrella'
import TotalRatableExposures from '../TotalRatableExposures/TotalRatableExposures'
import ScheduleOfLocations from '../ScheduleOfLocations/ScheduleOfLocations'
import RetailOperations from '../RetailOperations/RetailOperations'
import ApplicantOperations from '../ApplicantOperations/ApplicantOperations'
import SafetyInformation from '../SafetyInformation/SafetyInformation'
import AttachmentsView from '../Attachments/Attachments'

export default {
  name: 'QuestionView',
  props: ['questions', 'order', 'parentOrder', 'active', 'onActiveCard', 'updateQuestions'],

  components: {
    AdditionalNamedInsured,
    LimitsRequested,
    UnderlyingGeneralLiability,
    OtherUnderlyingCoverages,
    ExpiringUmbrella,
    TotalRatableExposures,
    RetailOperations,
    ScheduleOfLocations,
    ApplicantOperations,
    SafetyInformation,
    AttachmentsView
  },
  data () {
    return {
      data: {},
      rules: {
        required: (value) => !!value || 'Required.',
        validPhone: (value) => {
          const pattern = /^[+]?(1\-|1\s|1|\d{3}\-|\d{3}\s|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/g
          return pattern.test(value) || 'Invalid Phone Number.'
        }
      }
    }
  },

  mounted () {
    this.data = this.questions[this.parentOrder].content[this.order]
  },
  methods: {
    cardActivate (name) {
      if (!this.active) {
        this.onActiveCard([this.parentOrder, this.order])
      }
      // this.data.valid = this.$refs.questionForm.validate()
      this.questions[this.parentOrder].content[this.order] = this.data
      this.updateQuestions(this.questions)
    },

    onBrowse () {
      document.getElementById('file-open-button').click();
    },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      // this.createImage(files[0]);
    }
  },
  watch: {
    questions: {
      handler (newQuestions) {
        this.data = this.questions[this.parentOrder].content[this.order]
        this.questions = newQuestions
      },
      deep: true
    }
  }  
}
