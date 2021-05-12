<template>
  <v-toolbar-title :title="title">
    {{ title }}
  </v-toolbar-title>
</template>

<script>
export default {
  props: ['title']
}
</script>
