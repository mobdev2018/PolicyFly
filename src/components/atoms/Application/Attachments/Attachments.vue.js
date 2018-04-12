export default {
	name: 'Attachments',
	props: ['questions', 'active', 'onActiveCard', 'updateQuestions', 'triggerBrowse', 'props', 'removeFile'],

  data () {
    return {
      enableDropdown: false,      
      options: {
        acceptedFileTypes: [''],
        clickable: false,
        adapterOptions: {
          url: './upload.php'
        }
      },
      data: {},
      values: []
    }
  },
  mounted () {
    // console.log(this.questions[5])
    // this.data = this.questions[5].content[0]
    // this.values = this.data.values

    // setTimeout(() => {
    //   this.checkFiles()
    //   this.$refs.attachmentUploader.$on('added-file', () => {
    //     this.checkFiles()        
    //   })
    //   this.$refs.attachmentUploader.$on('removed-file', () => {
    //     this.checkFiles()        
    //   })
    // })
  },

  filters: {
    json(value) {
      return JSON.stringify(value, null, 2)
    }
  },

  methods: {
    // triggerBrowse() {
    //   this.$refs.attachmentUploader.triggerBrowseFiles()
    // },
    onTriggerBrowse () {
      this.triggerBrowse()
    },
		onRemoveFile (file) {
      this.removeFile(file)
      // this.$refs.attachmentUploader.removeFile(file)
    },
    // checkFiles () {
    //   const len = this.$refs.attachmentUploader.files.length
    //   if (len > 0) {
    //     this.data.valid = true
    //   } else {
    //     this.data.valid = false
    //   }
    //   console.log(this.questions[5])
    //   this.questions[5].content[0] = this.data
    //   this.updateQuestions(this.questions)
    // },
    cardActivate (name) {
      if (!this.active) {
        this.onActiveCard([5, 0])
      }      
    }
  },

  watch: {
    'active' () {
      if (this.active) {
        this.enableDropdown = true
      } else {
        this.enableDropdown = false
      }
    }
  }

}
