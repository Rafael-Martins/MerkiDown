<template>
  <div class="editorbox">
      <div class="form-group">
        <label for="comment">Enter MD code:</label>
        <textarea class="form-control" rows="25" @input="markdown" v-model="mdInputValue"></textarea>
      </div>
  </div>
</template>

<script>
export default {
  name: 'editorbox',
  data() {
    return {
      mdInputValue: '',
    };
  },
  methods: {
    markdown() {
      this.$emit('markdown', this.mdInputValue);
    },
  },
};
</script>

<style>

</style>
