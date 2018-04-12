import { mapGetters, mapActions } from 'vuex'
import PerfectScrollbar from 'perfect-scrollbar'
import QuestionMenu from 'components/atoms/Application/QuestionMenu/QuestionMenu'
import QuestionView from 'components/atoms/Application/QuestionView/QuestionView'
import TabView from 'components/atoms/Application/TabView/TabView'
import AttachmentsView from 'components/atoms/Application/Attachments/Attachments'
import _ from 'lodash'

export default {
  name: 'ApplicationForm',

  components: {
    QuestionMenu,
    QuestionView,
    TabView,
    AttachmentsView
  },

  data () {
    return {
      isAttachment: false,
      questionsData: [],
      data: {},
      ps: null,
      container: null,
      cardIndex: 0,
      currentIndex: 0,
      options: {
        acceptedFileTypes: [''],
        clickable: false,
        adapterOptions: {
          url: './upload.php'
        }
      },
      enableSubmit: false
    }
  },

  filters: {
    json(value) {
      return JSON.stringify(value, null, 2)
    }
  },

  computed: {
    ...mapGetters([
      'isCompleted',
      'applicationId',
      'questions',
      'tabs',
      'activeRoute'
    ])
  },

  watch: {
    '$route' () {
      if (this.$route.path === '/home/form') {
        this.loadData()
      }
    }
  },

  mounted () {
    this.loadData()
    
    setTimeout(() => {
      this.checkFiles()
      this.$refs.attachmentUploader.$on('added-file', () => {
        this.isAttachment = true
        this.checkFiles()
      })
      this.$refs.attachmentUploader.$on('removed-file', () => {
        this.checkFiles()        
      })
    })
  },

  destroyed () {
    this.container = null
    this.ps.destroy()
    this.ps = null
  },
  methods: {
    ...mapActions([
      'activeCard',
      'updateQuestions',
      'addApplicationForm',
      'updateApplicationForm',
      'deleteApplicationForm'
    ]),
    triggerBrowse() {
      this.$refs.attachmentUploader.triggerBrowseFiles()
    },
    removeFile(file) {
      this.$refs.attachmentUploader.removeFile(file)
    },
    checkFiles () {
      const len = this.$refs.attachmentUploader.files.length
      if (this.questionsData.length > 5) {
        if (len > 0) {        
          this.questionsData[5].content[0].valid = true
        } else {
          this.questionsData[5].content[0].valid = false
        }
        this.updateQuestions(this.questionsData)
      }
    },
    loadData () {
      this.$refs.attachmentUploader.removeAllFiles(true)
      this.questionsData = _.cloneDeep(this.questions)
      if (this.questionsData.length > 0) {
        this.data = this.questionsData[this.currentIndex]
      } else {
        this.$router.replace('/home')
      }

      this.setData()
    },

    setData () {
      this.container = document.querySelector('.question-content')
      this.ps = new PerfectScrollbar(this.container)
      this.container.scrollTop = 0
      this.container.scrollYMarginOffset = 100
      this.activeCard([0, 0])
      this.container.addEventListener('ps-scroll-up', () => {
        let offset = 0
        for (let i = 0; i < this.questionsData.length; i++) {
          let flag = 0
          let limit = this.questionsData[i].content.length
          for (let j = 0; j < limit; j++) {
            if (i == 5) {
              offset += this.$refs.attachmentUploader.$children[0].$el.clientHeight
            } else {
              offset += this.$refs[`question_${j}`][i].$el.clientHeight
            }
            if (this.container.scrollTop < offset) {
              this.cardIndex = j
              if (i !== this.currentIndex) {
                this.currentIndex = i
                this.data = this.questionsData[this.currentIndex]
              }
              flag = 1
              break
            }
            if (j === limit - 1) {
              offset += 100
            }
          }
          if (flag === 1) {
            this.activeCard([this.currentIndex, this.cardIndex])
            break
          }
        }
      })
      this.container.addEventListener('ps-scroll-down', () => {
        var offset = 0
        for (var i = 0; i < this.questionsData.length; i++) {
          var flag = 0
          var limit = this.questionsData[i].content.length
          for (var j = 0; j < limit; j++) {
            if (i == 5) {
              offset += this.$refs.attachmentUploader.$children[0].$el.clientHeight
            } else {
              offset += this.$refs[`question_${j}`][i].$el.clientHeight
            }
            if (this.container.scrollTop < offset) {
              this.cardIndex = j
              if (i !== this.currentIndex) {
                this.currentIndex = i
                this.data = this.questionsData[this.currentIndex]
              }
              flag = 1
              break
            }
            if (j === limit - 1) {
              offset += 100
            }
          }
          if (flag === 1) {
            this.activeCard([this.currentIndex, this.cardIndex])
            break
          }
        }
      })
    },
    
    isActive (parentIndex, index) {
      return this.activeRoute[0] === parentIndex && this.activeRoute[1] === index
    },
    cardUp () {
      if (this.cardIndex === 0) {
        if (this.currentIndex === 0) {
          return
        }
        if (this.currentIndex > 0) {
          this.currentIndex -= 1
          this.cardIndex = this.questionsData[this.currentIndex].content.length
          this.data = this.questionsData[this.currentIndex]
        }
      }
      var offset = 0
      for (var i = 0; i <= this.currentIndex; i++) {
        var j = 0
        var limit = this.questionsData[i].content.length
        for (j = 0; j < limit; j++) {
          if (i === this.currentIndex && j >= this.cardIndex - 1) {
            break
          }
          if (i == 5) {
            offset += this.$refs.attachmentUploader.$children[0].$el.clientHeight + 24
          } else {
            offset += this.$refs[`question_${j}`][i].$el.clientHeight + 24
          }
          if (j === limit - 1) {
            offset += 220
          }
        }
        if (i === this.currentIndex && j === this.cardIndex) {
          break
        }
      }
      this.container.scrollTop = offset
      this.activeCard([this.currentIndex, this.cardIndex - 1])
    },
    cardDown () {
      if (this.cardIndex === this.questionsData[this.currentIndex].content.length - 1) {
        if (this.currentIndex === this.questionsData.length - 1) {
          return
        }
        this.currentIndex += 1
        this.cardIndex = -1
        this.data = this.questionsData[this.currentIndex]
      }
      var offset = 0
      for (var i = 0; i <= this.currentIndex; i++) {
        var j = 0
        var limit = this.questionsData[i].content.length
        for (j = 0; j < limit; j++) {
          if (i === this.currentIndex && j > this.cardIndex) {
            break
          }
          if (i == 5) {
            offset += this.$refs.attachmentUploader.$children[0].$el.clientHeight + 24
          } else {
            offset += this.$refs[`question_${j}`][i].$el.clientHeight + 24
          }
          if (j === limit - 1) {
            offset += 100
          }
        }
        if (i === this.currentIndex && j === this.cardIndex) {
          break
        }
      }
      this.container.scrollTop = offset
      this.activeCard([this.currentIndex, this.cardIndex + 1])
    },
    cardActivate () {
      this.onActiveCard([this.parentOrder, this.order])
    },
    selectTab (index) {
      this.currentIndex = index
      this.data = this.questionsData[this.currentIndex]
      let offset = 0
      for (let i = 0; i < index; i++) {
        const element = document.getElementById(`ques_${i}`)
        offset += element.clientHeight + 24
      }
      this.container.scrollTop = offset
    },
    onDelete () {
      if(window.confirm("Are you sure you want to delete this application?")) {
        if (this.applicationId != null) {
          this.deleteApplicationForm(this.applicationId)
        }        
        this.$router.replace('/home')
      }
    },
    saveForLater () {
      if (this.applicationId == null) {
        this.addApplicationForm(this.questionsData)
      } else {
        this.updateApplicationForm({ 'applications': this.questionsData, 'applicationId': _.cloneDeep(this.applicationId) })
      }
      this.$router.replace('/home')
    },
    onSubmit () {
      this.$router.replace('/home/submitted')
    }
  }
}
