<template>
<v-progress-circular indeterminate v-if="loading"></v-progress-circular>
  <v-menu offset-y v-else-if="!$store.state.fireUser">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on"><v-icon>mdi-account</v-icon></v-btn>
    </template>
    <v-card>
      <v-card-title>로그인</v-card-title>
      <v-divider/>
      <v-card-actions>
        <v-btn @click="signInWithGoogle" block><v-icon left>mdi-google</v-icon>구글로 로그인</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
  <v-menu offset-y v-else>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-avatar size="32">
          <v-img :src="$store.state.fireUser.photoURL"></v-img>
        </v-avatar>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>정보</v-card-title>
      <v-divider/>
      <v-card-actions>
        <v-btn @click="signOut" dark block>로그아웃</v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  methods: {
    async signInWithGoogle () {
      const provider = new this.$firebase.default.auth.GoogleAuthProvider()
      this.$firebase.default.auth().languageCode = 'ko'
      this.laoding = true
      try {
        const sn = await this.$firebase.default.auth().signInWithPopup(provider)
        this.$store.commit('setFireUser', sn.user)
      } catch (e) {
        console.log(e.message)
      } finally {
        this.loading = false
      }
    },
    signOut () {
      this.$firebase.default.auth().signOut()
    }
  }
}
</script>
