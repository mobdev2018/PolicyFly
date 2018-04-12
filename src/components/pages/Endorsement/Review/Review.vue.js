import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Review',
  data () {
    return {
      openedMenu: false,
      isCommenting: false,
      isDecline: false,
      comment: '',
      currentIndex: 2,
      showDifference: true,
      dates: [
        '12/30/2017',
        '01/30/2018',
        '02/30/2018'
      ],
      createdDate: '12/30/2017'
    }
  },
  mounted () {
    this.eventHub.$on('showEndorsementReviewFAB', () => {
      this.openedMenu = !this.openedMenu
    })
  },

  beforeDestroy () {
    this.eventHub.$off('showEndorsementReviewFAB')
  },

  methods: {
    ...mapActions([
      'addEvent',
      'updateMessage'
    ]),
    onFabQuote () {
      this.openedMenu = false
      this.isCommenting = false
      this.$router.replace('/endorsement/submitquotes')
    },
    onEdit () {
      this.openedMenu = false
      this.isCommenting = false
    },
    onBackToDraft () {
      this.openedMenu = false
      this.isCommenting = false
    },
    onDecline () {
      this.isCommenting = true
      this.isDecline = true
      this.openedMenu = false
      setTimeout(() => {
        this.openedMenu = true
      })
    },
    onComment () {
      this.isCommenting = true
      this.isDecline = false
      this.openedMenu = false
      setTimeout(() => {
        this.openedMenu = true
      })
    },
    onTransferOwnership () {
      this.openedMenu = false
      this.isCommenting = false
    },
    submitWithComment () {
      this.openedMenu = false
      this.isCommenting = false

      var itemApplication = {
        type: 'application',
        action: 'submit',
        fname: 'Ian',
        lname: 'Sterling',
        time: '4:38pm'
      }
      if (this.isDecline) {
        itemApplication = {
          type: 'application',
          action: 'decline',
          fname: 'Ian',
          lname: 'Sterling',
          time: '4:38pm'
        }
        this.isDecline = false
      }
      this.addEvent(itemApplication)
      if (this.comment != '') {
        const itemComment = {
          type: 'comment',
          action: this.comment,
          fname: 'Ian',
          lname: 'Sterling',
          time: '4:38pm'
        }
        this.addEvent(itemComment)
      }
      this.comment = ''
      // this.$router.replace('/application/feed/quoted')
    }
  }
}
