import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'
import { MyAccountList } from '../../../data/myaccount.js'

export default {
  name: 'MyAccountLayout',

  components: {
    Navbar,
    NavbarHeader
  },

  mounted () {
    
  },

  computed: {
    MyAccountList () {
      return MyAccountList
    }
  },

  data () {
    return {
      title: 'My Account',
      isFooterBar: true
    }
  },

  methods: {

  }
}
