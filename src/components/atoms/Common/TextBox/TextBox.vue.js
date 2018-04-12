export default {
  name: 'TextBox',
  props: ['type', 'icon', 'maxlength', 'bgcolor', 'submit'],
  data () {
    return {
      text: ''
    }
  },
  watch: {
    text (newText) {
      this.$emit('input', newText)
    },
    '$route' () {
      this.text = ''
    }    
  },
  methods: {
    /* when pressing Enter key */
    onSubmit () {
      this.submit(this.text)
    }
  }
}
