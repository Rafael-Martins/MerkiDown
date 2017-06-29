<template>
  <div class="preview-box__container">

    <navegation></navegation>

    <div class="container-fluid">

      <div class="row editor-content">

        <div class="col-md-5 col-md-offset-1">
          <preview-box :htmlValue="content"></preview-box>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { database } from '@/db';
import previewBox from '@/components/previewBox';
import navegation from '@/components/navegation';

export default {
  name: 'index',
  data() {
    return {
      content: '',
    };
  },
  created() {
    const ref = database.ref(`files/${this.$route.params.noteId}`);

    ref.once('value', snapshot => (this.content = snapshot.val().contentHtml));
  },
  components: {
    previewBox, navegation,
  },
};
</script>

<style>

</style>
