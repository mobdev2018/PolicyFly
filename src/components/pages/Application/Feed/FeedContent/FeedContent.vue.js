import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'FeedContent',
  props: ['stepIndex'],

  computed: {
    ...mapGetters([
      'events',
      'eventMessage'
    ])
  },

  data () {
    return {
      openedMenu: false,
      comments: '',
      isQuoteSubmitted: false,
      eventItems: [],
      isCommenting: false,
      comment: '',
      message: ''
    }
  },

  watch: {
    '$route' () {
      this.loadEvents()
    }
  },

  mounted () {
    this.eventHub.$on('showApplicationFeedFAB', () => {
      this.openedMenu = !this.openedMenu
    }),
    this.loadEvents()
  },

  beforeDestroy () {
    this.eventHub.$off('showApplicationFeedFAB')
  },

  methods: {
    ...mapActions([
      'addEvent',
      'updateMessage'
    ]),
    loadEvents () {
      if (this.eventItems.length < this.events.length) {
        this.isQuoteSubmitted = true
      }
      this.eventItems = _.cloneDeep(this.events)
      setTimeout(() => {
        this.message = _.cloneDeep(this.eventMessage)
      }, 1500)      
    },
    getDescription (item) {
      var description = ''
      if (item.type === 'comments') {
        description = item.action
      }
      description = item.fname + ' ' + item.lname
      if (item.type === 'application') {
        if (item.action === 'submit') {
          description += ' submitted an application.'
        }
        if (item.action === 'decline') {
          description += ' declined this application.'
        }
      }
      if (item.type === 'quote') {
        if (item.action === 'submit') {
          description += ' added a quote.'
        }
      }
      if (item.type === 'binder') {
        if (item.action === 'submit') {
          description += ' submitted a binder.'
        }
      }

      return description
    },
    truncate: function(fname, lname) {
      const shortName = fname.substring(0, 1).toUpperCase() + lname.substring(0, 1).toUpperCase()
    	return shortName
    },
    getStatus () {
      var applicationStatus = ''
      if (this.stepIndex == 3) {
        applicationStatus = 'QUOTED'
      }
      if (this.stepIndex == 4) {
        applicationStatus = 'PENDING BINDER'
      }
      if (this.stepIndex == 5) {
        applicationStatus = 'PENDING ISSUE'
      }
      return applicationStatus
    },
    onSubmit () {
      const item = {
        type: 'comment',
        action: this.comments,
        fname: 'Ian',
        lname: 'Sterling',
        time: '4:38pm'
      }
      this.eventItems.splice(0,0, item)
      this.addEvent(item)
      this.comments = ''
    },
    /******** Quoted ********/
    onEditQuote () {
      this.closeFabMenu()
    },
    onQuoteLost () {
      this.closeFabMenu()
    },
    onBackToDraft () {
      this.closeFabMenu()
    },
    /******** Pending Binder ********/
    onIssueBinder () {
      this.closeFabMenu()
      this.$router.replace('/application/issuebinder')
    },
    onEditPremium () {
      this.closeFabMenu()
    },
    onEndRestart () {
      this.closeFabMenu()
    },
    /******** Pending Issue ********/
    onIssuePolicy () {
      this.closeFabMenu()
    }, 
    onCreateEndorsement () {
      this.closeFabMenu()
    },
    onCancel () {
      this.closeFabMenu()
    },
    /******** Common  ********/
    onEdit () {
      this.closeFabMenu()
    },
    onComment () {
      this.isCommenting = true
      this.openedMenu = false
      setTimeout(() => {
        this.openedMenu = true
      })
    },
    onTransferOwnership () {
      this.closeFabMenu()
    },
    submitComment () {
      const item = {
        type: 'comment',
        action: this.comment,
        fname: 'Ian',
        lname: 'Sterling',
        time: '4:38pm'
      }
      this.eventItems.splice(0,0, item)
      this.addEvent(item)
      this.comment = ''
      this.openedMenu = false
      this.isCommenting = false
    },
    onCloseAlert () {
      this.message = ''
      this.updateMessage('')
    },
    closeFabMenu () {
      this.openedMenu = false
      this.isCommenting = false
    }
  }
}
