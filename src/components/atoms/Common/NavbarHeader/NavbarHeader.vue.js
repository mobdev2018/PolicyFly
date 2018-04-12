import _ from 'lodash'

export default {
  name: 'NavbarHeader',
  props: ['title', 'isAutoTitle', 'tabList', 'isActions', 'actions'],
  data () {
    return {
      currentIndex: 0,
      pageTitle: this.title
    }
  },

  watch: {
    '$route' () {
      this.setTitle()
    },
    'tabList' () {
      this.setTitle()
    }
  },

  mounted () {
    this.setTitle()
  },

  created () {
    this.setTitle()
  },
  methods: {
    setTitle () {
      if (this.tabList) {
        this.currentIndex = this.tabList.findIndex(tab => _.includes(this.$route.path, tab.link))
        if (this.isAutoTitle) {
          this.pageTitle = this.tabList[this.currentIndex].title
        }
      }
    },
    onSelectTab (index) {
      this.currentIndex = index
      if (this.isAutoTitle) {
        this.pageTitle = this.tabList[this.currentIndex].title
      }
      if (this.tabList[index].link) {
        this.$router.replace({ path: this.tabList[index].link })
      }
    }
  }
}
