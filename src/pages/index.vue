<template>
  <h1>
    {{ title }}
    <test></test>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      title: 'Home'
    }
  }
})
</script>

<style scoped></style>