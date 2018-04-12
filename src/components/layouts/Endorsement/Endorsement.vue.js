import { mapGetters } from 'vuex'
import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'
import _ from 'lodash'

export default {
  name: 'Endorsement',

  components: {
    Navbar,
    NavbarHeader
  },

  data () {
    return {
      title: 'Apple Industrie\'s Endorsement',
      isAutoTitle: true,
      isActionsButton: false,
      isTabsList: false,
      isNavbarBanner: false,
      tabList: [
        {
          label: 'FEED',
          title: 'Feed',
          link: '/endorsement/feed'
        },
        {
          label: 'APPLICATION',
          title: 'Application',
          link: '/endorsement/review'
        },
        {
          label: 'ATTACHMENTS',
          title: 'Attachments',
          link: '/endorsement/attachments'
        },
        {
          label: 'POLICY DOCS',
          title: 'Policy',
          link: '/endorsement/policy'
        }
      ]
    }
  },

  mounted () {
    this.setNavHeader()
  },

  watch: {
    '$route' () {
      this.setNavHeader()
    }
  },

  methods: {
    setNavHeader () {
      this.isActionsButton = this.$route.meta.isActionsButton == false ? false : true
      this.isTabsList = this.$route.meta.isTabsList == false ? false : true
      if (this.$route.name) {
        this.title = this.$route.name
        this.isAutoTitle = false
      } else {
        this.isAutoTitle = true
      }
    },
    showFAB () {
      if (_.includes(this.$route.path, 'endorsement/review')) {
        this.eventHub.$emit('showEndorsementReviewFAB')
      }
    }
  }
}
