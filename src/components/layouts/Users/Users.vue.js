import { mapGetters } from 'vuex'
import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'

export default {
  name: 'UsersLayout',

  components: {
    Navbar,
    NavbarHeader
  },

  mounted () {
    this.setTitle()
  },

  computed: {
    ...mapGetters([
      'userlist'
    ])
  },

  watch: {
    '$route' () {
      this.setTitle()
    }
  },

  data () {
    return {
      title: 'Users',
      isBackButton: false,
      page: 'userslist',
      isActionButton: true
    }
  },

  methods: {
    setTitle () {
      this.isActionButton = true
      this.isBackButton = false
      const path = this.$route.path
      if (path === '/users/userslist') {
        this.title = 'Users'
        this.page = 'userslist'
      } else if (path === '/users/create') {
        this.title = 'User Management'
        this.page = 'create'
        this.isActionButton = false
      } else {
        if (this.$route.params != null) {
          const editIndex = this.$route.params.id
          const fullPath = this.$route.path
          if (editIndex) {
            const path = fullPath.slice(0, -(editIndex.length))
            if (path === '/users/'){
              this.isBackButton = true  
              const userInfo = this.userlist[editIndex]
              this.title = userInfo.fname + " " + userInfo.lname
            } else if (path === '/users/edit/'){
              const userInfo = this.userlist[editIndex]
              this.title = "Edit " + userInfo.fname + " " + userInfo.lname
            }            
          }
        }
      }
    },
    showFAB () {
      if (this.$route.path == '/users/userslist') {
        this.eventHub.$emit('showUserListFAB')
      } else {
        this.eventHub.$emit('showUserFAB')
      }
    },
    onBack() {
      this.isBackButton = false
      this.$router.replace('/users/userslist')
    }
  }
}
