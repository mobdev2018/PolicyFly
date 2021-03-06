import VuePDFViewer from 'vue-instant-pdf-viewer/src/VuePDFViewer'

export default {
  name: 'PolicyDocs',

  components: {
    'vue-pdf-viewer': VuePDFViewer
  },

  data () {
    return {
      openedMenu: false,
      selectedIndex: 0,
      comments: '',
      isSubmitted: false,
      files: [
        { name: 'application.pdf' },
        { name: 'quote.pdf' }
      ],
      options: {
        acceptedFileTypes: [''],
        clickable: false,
        adapterOptions: {
          url: './upload.php'
        }
      },
      url: 'https://www.caddis.co/uploads/meetups/Why-VueJS.pdf'  // template url
    }
  },
  mounted () {
    this.eventHub.$on('showApplicationPolicyFAB', () => {
      this.openedMenu = !this.openedMenu
    })
  },

  beforeDestroy () {
    this.eventHub.$off('showApplicationPolicyFAB')
  },

  methods: {
    onFabQuote () {
      this.$router.replace('/application/quotes')
    },
    onTriggerBrowse () {
      this.$refs.attachmentUploader.triggerBrowseFiles()
    },
    onSelect(file, index) {
      this.selectedIndex = index
      if (this.url === 'https://www.caddis.co/uploads/meetups/Why-VueJS.pdf') {
        this.url = 'https://media.readthedocs.org/pdf/vuejs/latest/vuejs.pdf'
      } else {
        this.url = 'https://www.caddis.co/uploads/meetups/Why-VueJS.pdf'
      }
    },
    uploaded (file) {
      this.files.push({
        name: file.name
      })
    }
  }
}
