import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'User',

  computed: {
    ...mapGetters([
      'userlist'
    ])
  },

  mounted () {
    this.setData()
    this.eventHub.$on('showUserFAB', () => {
      this.openedMenu = !this.openedMenu
    })
  },
  
  beforeDestroy () {
    this.eventHub.$off('showUserFAB')
  },

  watch: {
    '$route' () {
      this.setData()
    }
  },
	
  data () {
    return {
      alert: false,
      openedMenu: false,
			editIndex: 0,
      userInfo: {
        fname: '',
        lname: '',
        email: ''
      },
      items: []      
    }
  },

  methods: {
    ...mapActions([
      'updateUserList'
    ]),
    setData () {
      this.items = this.userlist
      if (this.$route.params != null) {
        this.editIndex = this.$route.params.id
      }
      if (this.editIndex) {      
        this.userInfo = this.userlist[this.editIndex]
      }
    },
    onResetPassword () {
      if(window.confirm("Are you sure you want to reset this user's password?")) {
        this.alert = true
      }
    },
    onRemove () {
      if(window.confirm("Are you sure you want to remove this user from the program? This removal cannot be undone.")) {
        this.items.splice(this.editIndex, 1)
        this.updateUserList(this.items)
        this.$router.replace('/users/userslist')
      }
    }
  }
}
