import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'

export default {
  name: 'HomeLayout',

  components: {
    Navbar,
    NavbarHeader
  },

  data () {
    return {
      title: 'Home',
      isNavBar: false,
      isNavHeader: false,
      isActionsButton: false      
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
      this.isActionsButton = false
      if (this.$route.path === '/home/submitted') {
        this.isNavBar = true
        this.isNavHeader = false
      } else if (this.$route.path === '/home/start') {
        this.isNavBar = false
        this.isNavHeader = false
      } else if (this.$route.path === '/home' || this.$route.path === '/home/') {
        this.title = 'Home'
        this.isNavBar = true
        this.isNavHeader = true
        this.isActionsButton = true
      } else if (this.$route.path === '/home/form') {
        this.title = 'Acme, Inc.\'s Application'
        this.isNavBar = true
        this.isNavHeader = true
      }
    },
    onDelete () {
      this.$router.replace('/home')
    },
    showFAB () {
      this.eventHub.$emit('showHomeFAB');
      // this.eventHub.$emit('showApplicationFAB');
    }
  }
}
