<template>
  <div class="previewbox">
    <label>HTML Preview:</label>
    <div v-html="htmlValue"></div>
  </div>
</template>

<script>
export default {
  name: 'previewbox',
  props: {
    htmlValue: String,
  },
};
</script>
