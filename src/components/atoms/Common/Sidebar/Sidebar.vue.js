import { mapGetters, mapActions } from 'vuex'
import { SidebarList } from '../../../../data/sidebar.js'

export default {
  name: 'Sidebar',
  data () {
    return {
      isOpen: false
    }
  },

  computed: {
    SidebarList () {
      return SidebarList
    },
    ...mapGetters([
      'userData'
    ])
  },
  methods: {
    ...mapActions([
      'clearAuthData'
    ]),
    toggle () {
      this.isOpen = !this.isOpen
    },
    onSelectItem (item) {
      if (item.label === 'Home') {
        this.toggle()
        this.$router.replace({ path: '/home' })
      }
      if (item.label === 'Policies') {
        this.toggle()
        this.$router.replace({ path: '/policies' })
      }
      if (item.label === 'Users') {
        this.toggle()
        this.$router.replace({path: '/users'})
      }
      if (item.label === 'My Account') {
        this.toggle()
        this.$router.replace({ path: '/account' })
      }
      if (item.label === 'Logout') {
        this.toggle()
        this.clearAuthData()
        this.$router.replace({ path: '/login' })
      }
    }
  }
}
