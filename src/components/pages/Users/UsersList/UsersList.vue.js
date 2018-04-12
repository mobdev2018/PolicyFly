import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'UsersList',

  components: {

  },

  computed: {
    ...mapGetters([
      'userlist'
    ])
  },

  watch: {
    '$route' () {
      this.setData()
    }
  },

  mounted () {
    this.setData()    
  },

  beforeDestroy () {
    this.eventHub.$off('showUserListFAB')
  },

  data () {
    return {
      removedAlert: false,
      createdAlert: false,
      openedMenu: false,
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        { text: 'First Name', value: 'fname', align: 'left', sortable: false },
        { text: 'Last Name', value: 'lname', align: 'left', sortable: false },
        { text: 'Email', value: 'email', align: 'left', sortable: false },
        { text: 'User Type', value: 'role', align: 'left', sortable: false },
        { text: '', value: '', align: 'right', sortable: false },
        { text: '', value: '', align: 'right', sortable: false }
      ],
      selectedIndex: -1,
      items: []
    }
  },

  methods: {
    ...mapActions([
      'updateUserList'
    ]),
    setData () {
      if (this.items.length > this.userlist.length) {
        this.removedAlert = true
      }
      if (this.items.length > 0 && this.items.length < this.userlist.length) {
        this.createdAlert = true
      }
      this.items = _.cloneDeep(this.userlist)
      this.eventHub.$on('showUserListFAB', () => {
        this.openedMenu = !this.openedMenu
      })
    },
    onSelected (props) {
      if (this.selectedIndex === props.index) {
        this.selectedIndex = -1
      } else {
        this.selectedIndex = props.index
      }
      this.$router.replace('/users/' + props.index)
    },
    onCreateUser () {
      this.$router.replace('/users/create')
    },
    onEdit (index) {
      this.$router.replace({ path: '/users/edit/' + index })
    },
    onDelete (index) {
      this.items.splice(index, 1)
      this.updateUserList(this.items)
    }
  }
}
