<template>
  <h1>
    {{ title }}
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      title: 'Hello World'
    }
  }
})
</script>

<style scoped></style>