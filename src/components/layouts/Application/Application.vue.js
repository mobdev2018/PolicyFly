import { mapGetters } from 'vuex'
import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'
import NavbarBanner from 'components/atoms/Common/NavbarBanner/NavbarBanner'
import { ApplicationTabList } from '../../../data/application.js'
import _ from 'lodash'

export default {
  name: 'ApplicationLayout',

  components: {
    Navbar,
    NavbarHeader,
    NavbarBanner
  },

  data () {
    return {
      title: 'Acme Inc.\'s Application',
      isActionsButton: true,
      isTabsList: true,
      isNavbarBanner: false,
      date: '11/20/2017',
      primaryName: 'Acme, Inc.',
      coveragePeriod: '12/01/2017 - 12/01/2018'
    }
  },

  computed: {
    ApplicationTabList () {
      return ApplicationTabList
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
      this.isNavbarBanner = this.$route.meta.isNavbarBanner == true ? true : false
      this.title = this.$route.name

      if (this.$route.path === '/application/review') {
        this.title = 'Acme Inc.'
      }
      if (_.includes(this.$route.path, 'application/feed')) {
        this.title = 'Feed'
      }
    },
    showFAB () {
      if (_.includes(this.$route.path, 'application/feed')) {
        this.eventHub.$emit('showApplicationFeedFAB')
      }
      if (_.includes(this.$route.path, 'application/review')) {
        this.eventHub.$emit('showApplicationReviewFAB')
      }
      if (_.includes(this.$route.path, 'application/attachments')) {
        this.eventHub.$emit('showApplicationAttachmentsFAB')
      }
      if (_.includes(this.$route.path, 'application/policy')) {
        this.eventHub.$emit('showApplicationPolicyFAB')
      }
      if (_.includes(this.$route.path, 'application/quotes')) {
        this.eventHub.$emit('showApplicationQuotesFAB')
      }
    }
  }
}
