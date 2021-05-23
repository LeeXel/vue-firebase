<template>
  <v-app>
    <v-app-bar
      app
      color='primary'
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"/>
      <site-title :title="site.title"></site-title>
      <v-spacer/>
      <site-sign></site-sign>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer">
      <site-menu :items="site.items"></site-menu>
    </v-navigation-drawer>
    <v-main>
      <router-view/>
    </v-main>
    <site-footer :footer="site.footer"></site-footer>
  </v-app>
</template>

<script>
import SiteTitle from '@/components/title'
import SiteFooter from '@/components/footer'
import SiteMenu from '@/components/menu'
import SiteSign from '@/components/sign'

export default {
  components: { SiteTitle, SiteFooter, SiteMenu, SiteSign },
  name: 'App',
  data () {
    return {
      drawer: false,
      site: {
        title: '메비서',
        footer: 'LeeXel',
        items: [
          {
            icon: 'mdi-home',
            title: '메인',
            to: '/'
          },
          {
            icon: 'mdi-view-dashboard',
            title: '커뮤니티',
            to: '/board'
          },
          {
            icon: 'mdi-bank',
            title: '샤레니안의 수로',
            to: '/sharaft'
          },
          {
            icon: 'mdi-flag',
            title: '플래그',
            to: '/flag'
          },
          {
            icon: 'mdi-wrench',
            title: '길드관리',
            to: 'admin'
          }
        ]
      }
    }
  }
}
</script>
