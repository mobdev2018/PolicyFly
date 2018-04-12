import Vue from 'vue'
const eventHub = new Vue()

export default {
  computed: {
    eventHub () {
      return eventHub
    },
    token () {
      return this.store.getters.sessionData.SPAToken
    }
  },

  methods: {
    formatNumber (number) {
      const x = 3
      const n = 0
      const regExp = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')'
      return number.toString().replace(/[^0-9,]/g, '').replace(new RegExp(',', 'g'), '').replace(new RegExp(regExp, 'g'), '$&,')
    },
    customMask (number) {
      // const numLen = number ? number.length : 0
      var numLen = 0
      if (number != null) {
        var num = number
        while (num >= 1) {
          numLen += 1
          num = num / 10
        }
      }
      if (numLen <= 3) {
        return '####'
      }
      const pref = numLen % 3
      const groupLen = numLen / 3
      if (pref === 0) {
        return '###' + ',###'.repeat(groupLen - 1) + '#'
      }
      return '#'.repeat(pref) + ',###'.repeat(groupLen) + '#'
    },
    formatDate (date) {
      if (!date) {
        return null
      }
      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) {
        return null
      }
      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    }
  }
}
