import _ from 'lodash'

export default {
  name: 'PoliciesTable',

  data () {
    return {
      dataList: [],
      openedMenu: false,
      max25chars: (v) => v.length <= 25 || 'Input too long!',
      tmp: '',
      search: '',
      pagination: {},
      headers: [
        { text: 'Name', value: 'name', align: 'left', sortable: false },
        { text: 'Last Updated By', value: 'lastUpdated', align: 'left', sortable: false },
        { text: 'Term', value: 'term', align: 'left', sortable: false },
        { text: 'Status', value: 'status', align: 'left', sortable: false }
      ],
      selectedIndex: -1,
      items: [
        {
          name: 'Apple Industries',
          lastUpdated: 'John Crosland - 2 hours ago',
          term: '12/01/2017 - 12/01/2018',
          status: 'Active'
        },
        {
          name: 'MusicPro Insurance',
          lastUpdated: 'Ian Sterling - 2 days ago',
          term: '06/15/2017 - 06/15/2018',
          status: 'Active'
        },
        {
          name: 'The Party Store',
          lastUpdated: 'Ian Sterling - 15 days ago',
          term: '01/01/2017 - 01/01/2018',
          status: 'Active (Ready for Renewal)'
        }
      ]
    }
  },

  watch: {
    '$route' () {
      this.loadData()
    }
  },

  mounted () {
    this.eventHub.$on('showPoliciesFAB', () => {
      this.openedMenu = !this.openedMenu
    })
    this.loadData()
  },

  beforeDestroy () {
    this.eventHub.$off('showPoliciesFAB')
  },

  methods: {
    loadData () {
      
    },
    onSelected (props) {
      if (this.selectedIndex === props.index) {
        this.selectedIndex = -1
      } else {
        this.selectedIndex = props.index
      }
    }
  }
}
