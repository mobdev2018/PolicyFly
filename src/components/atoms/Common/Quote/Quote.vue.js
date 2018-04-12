export default {
  name: 'Quote',
  props: ['data', 'index', 'selectedIndex', 'onApproveQuote', 'onClose'],

  data () {
    return {
      isCustomer: false
    }
  },

  methods: {
    onViewDetails () {
      window.open('https://www.caddis.co/uploads/meetups/Why-VueJS.pdf')
    },
    sendToCustomer () {
      this.isCustomer = true
    },
    close() {
      if (this.isCustomer) {
        this.isCustomer = false
      } else {
        this.onClose()
      }
    },
    onDone () {
      console.log('=== Done =====')
      this.onClose()
    }
  }
}
