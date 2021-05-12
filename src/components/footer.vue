<template>
  <v-footer app color="primary" absolute :footer="footer">
    <v-col
      class="text-center"
      cols="12"
    >
    {{ new Date().getFullYear() + ' ' + footer }} — <strong>Vuetify</strong>
    </v-col>
  </v-footer>
</template>

<script>
export default {
  props: ['footer']
}
</script>
