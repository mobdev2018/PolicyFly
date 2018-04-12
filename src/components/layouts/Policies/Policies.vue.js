import Navbar from 'components/atoms/Common/Navbar/Navbar'
import NavbarHeader from 'components/atoms/Common/NavbarHeader/NavbarHeader'

export default {
  name: 'Policies',

  components: {
    Navbar,
    NavbarHeader
  },

  data () {
    return {
      policiesTabList: [
        {
          label: 'Active',
          title: 'Active',
          link: '/policies/active'
        },
        {
          label: 'Inactive',
          title: 'Inactive',
          link: '/policies/inactive'
        }
      ],
      title: 'Policies',
      isActionsButton: true
    }
  },

  mounted () {
  },

  watch: {
    '$route' () {

    }
  },

  methods: {
    showFAB () {
      this.eventHub.$emit('showPoliciesFAB');
    }
  }
}
