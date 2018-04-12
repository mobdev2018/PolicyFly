import Sidebar from '../Sidebar/Sidebar.vue'

export default {
  name: 'Navbar',

  props: ['title', 'role', 'isBackButton', 'onBack'],
  components: {
    Sidebar
  },
  methods: {
    toggleSidebar () {
      this.$refs.sidebar.toggle()
    }
  }
}
