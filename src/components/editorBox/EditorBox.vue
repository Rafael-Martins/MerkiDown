<template>
  <div class="editorbox">
      <div class="form-group">
        <label for="comment">Enter MD code:</label>
        <textarea class="form-control" rows="25" @input="markdown" :value="mdValue"></textarea>
      </div>
  </div>
</template>

<script>
export default {
  name: 'editorbox',
  props: {
    mdValue: String,
  },
  methods: {
    markdown(evt) {
      this.$emit('markdown', evt.target.value);
    },
  },
};
</script>
