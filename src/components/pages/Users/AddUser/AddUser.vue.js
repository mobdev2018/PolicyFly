import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AddUser',

  computed: {
    ...mapGetters([
      'userlist'
    ])
  },

  watch: {
    '$route' () {
      this.loadData()
    }
  },

  mounted () {
    this.loadData() 
  },

  data () {
    return {
      isActived: false,
      editIndex: undefined,
      userInfo: {
        fname: '',
        lname: '',
        email: '',
        role: ''
      },
      roles: ['Broker', 'Program Admin'],
      rules: {
        required: (value) => !!value || 'Required.',    
        validEmail: (value) => {
          const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Email is incorrect.'
        }
      }
    }
  },

  setRules: function (field) {
    return (!this.errors.first(field)) ? [true] : [this.errors.first(field)]
  },

  methods: {
    ...mapActions([
      'updateUserList'
    ]),
    loadData () {
      if (this.$route.params != null) {
        this.editIndex = this.$route.params.id
      }
      console.log('----', this.editIndex)
      if (this.editIndex) {
        
        const userInfo = this.userlist[this.editIndex]
        this.userInfo.fname = userInfo.fname
        this.userInfo.lname = userInfo.lname
        this.userInfo.email = userInfo.email
        this.userInfo.role = userInfo.role
        this.isActived = true
      } else {
        console.log('-', this.editIndex)
        this.isActived = false
        this.userInfo.role = ''
      }  
    },
    onSubmit () {
      if (this.$refs.inputForm.validate()) {
        if (this.editIndex) {
          this.userlist[this.editIndex] = this.userInfo
        } else {
          this.userlist.push(this.userInfo)
        }
        this.updateUserList(this.userlist)
        
        this.userInfo = {
          fname: '',
          lname: '',
          email: '',
          role: null
        }
        this.$refs.inputForm.reset()
        this.$router.replace('/users/userslist')
      }
    },
    onCancel () {
      this.userInfo = {
        fname: '',
        lname: '',
        email: '',
        role: ''
      }
      this.$refs.inputForm.reset()
      this.$router.replace('/users/userslist')
    },
    keyUp (event) {
      console.log('======', this.userInfo.role)
      const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (this.userInfo.fname != '' && this.userInfo.lname != ''
          && emailPattern.test(this.userInfo.email) && this.userInfo.role != '') {
        this.isActived = true
      } else {
        this.isActived = false
      }
    }    
  }
}
