<template>
  <div class="preview-box__container">
    <preview-box :htmlValue="content"></preview-box>
  </div>
</template>

<script>
import { database } from '@/db';
import previewBox from '@/components/previewBox';

export default {
  name: 'index',
  data() {
    return {
      content: '',
    };
  },
  created() {
    const ref = database.ref(`files/${this.$route.params.noteId}`);

    ref.once('value', snapshot => (this.content = snapshot.val().content));
  },
  components: {
    previewBox,
  },
};
</script>

<style>
.preview-box__container {
  width: 70%;
  margin: auto;
  margin-top: 10%;
}
</style>
