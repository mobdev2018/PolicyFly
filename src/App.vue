<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="stylus">
@import './stylus/colors.styl'
</style>
