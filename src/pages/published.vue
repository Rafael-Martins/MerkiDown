<template>
  <preview-box :htmlValue="content"></preview-box>
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

    ref.once('value', snapshot => (this.content = snapshot.val()));
  },
  components: {
    previewBox,
  },
};
</script>

<style>
</style>
