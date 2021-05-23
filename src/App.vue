<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <site-title :title="site.title"></site-title>
      <v-spacer/>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu :items="site.items"></site-menu>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <site-footer :footer="site.footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/components/title'
import SiteFooter from '@/components/footer'
import SiteMenu from '@/components/menu'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {}
    }
  },
  created () {
    this.subscript()
  },
  methods: {
    subscript () {
      this.$firebase.default.database().ref().child('site').on('value', (sn) => {
        this.site = sn.val()
      })
    }
  }
}
</script>
