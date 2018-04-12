import { mapGetters } from 'vuex'
import ApplicationReview from '../ApplicationReview/ApplicationReview'

export default {
  name: 'Application',
  components: {
    ApplicationReview
  },
  data () {
    return {
      currentIndex: 2
    }
  },

  watch: {
    '$route' () {
      this.loadData()
    }
  },

  created () {
    this.loadData()
  },

  mounted () {
    this.loadData()
  },
  
  methods: {
    loadData () {
      if (this.$route.path === '/application/review') {
        this.currentIndex = 2
      }
    }
  }
}
