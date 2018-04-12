import { mapGetters, mapActions } from 'vuex'
import _ from 'lodash'

export default {
  name: 'Home',

  computed: {
    ...mapGetters([
      'applicationData'
    ])
  },

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
        // {
        //   name: 'Home Depot',
        //   lastUpdated: 'Ian Sterling - 15 days ago',
        //   term: '03/01/2018 - 03/01/2019',
        //   status: 'Draft'
        // }
      ]
    }
  },

  watch: {
    '$route' () {
      this.loadData()
    }
  },

  mounted () {
    this.eventHub.$on('showHomeFAB', () => {
      this.openedMenu = !this.openedMenu
    })
    this.loadData()
  },

  beforeDestroy () {
    this.eventHub.$off('showHomeFAB')
  },

  methods: {
    ...mapActions([
      'updateQuestions',
      'setApplicationId'
    ]),
    loadData () {
      this.items = []
      this.dataList = _.cloneDeep(this.applicationData)
      for (var i = 0; i < this.dataList.length; i++) {
        const data = this.dataList[i]
        const item = {
          name: data[0].content[0].content[0].value,
          lastUpdated: 'Ian Sterling - 2 days ago',
          term: '03/01/2018 - 03/01/2019',
          status: 'Draft'
        }
        this.items.push(item)
      }
    },
    onSelected (props) {
      if (this.selectedIndex === props.index) {
        this.selectedIndex = -1
      } else {
        this.selectedIndex = props.index
      }

      this.updateQuestions(this.dataList[props.index])
      this.setApplicationId(props.index)
      this.$router.replace({ path: '/home/form' })
    },
    onNewApplicant () {
      this.$router.replace('/home/start')
    }    
  }
}
