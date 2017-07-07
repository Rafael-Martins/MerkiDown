<template>
  <div class="previewbox">
    <label for="comment">HTML Preview:</label>
    <div v-html="htmlValue"></div>
  </div>
</template>

<script>
export default {
  name: 'previewbox',
  data() {
    return {
    };
  },
  props: {
    htmlValue: String,
  },
};
</script>

<style>

</style>
