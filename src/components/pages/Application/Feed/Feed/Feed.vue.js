import { mapGetters } from 'vuex'
import _ from 'lodash'
import FeedContent from '../FeedContent/FeedContent'

export default {
  name: 'Feed',
  components: {
    FeedContent
  },
  data () {
    return {
      currentIndex: 3
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
      if (_.includes(this.$route.path, '/application/feed/quoted')) {
        this.currentIndex = 3
      }
      if (_.includes(this.$route.path, '/application/feed/pendingbinder')) {
        this.currentIndex = 4
      }
      if (_.includes(this.$route.path, '/application/feed/pendingissue')) {
        this.currentIndex = 5
      }
    }
  }
}
