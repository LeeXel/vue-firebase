<template>
<div>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title class="title">
        <v-icon>mdi-mushroom</v-icon> 메비서
      </v-list-item-title>
      <v-list-item-subtitle>
        메이플스토리 길드 관리 페이지
      </v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
  <v-divider></v-divider>
  <v-list
  dense
  nav
  >
    <v-list-item
    v-for="item in items"
    :key="item.title"
    :to='item.to'
    >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</div>
</template>
<script>
export default {
  props: ['items']
}
</script>
