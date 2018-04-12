import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'
import NavbarBanner from 'components/atoms/Common/NavbarBanner/NavbarBanner'
import { BrokerTabList } from '../../../data/broker.js'

export default {
  name: 'BrokerLayout',

  components: {
    Navbar,
    NavbarHeader,
    NavbarBanner
  },

  data () {
    return {
      date: '11/20/2017',
      primaryName: 'Acme, Inc.',
      coveragePeriod: '12/01/2017 - 12/01/2018'
    }
  },

  computed: {
    BrokerTabList () {
      return BrokerTabList
    }
  }
}
