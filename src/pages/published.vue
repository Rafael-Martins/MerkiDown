<template>
  <div class="preview-box__container">

    <navigation></navigation>

    <div class="container-fluid">

      <div class="row editor-content">

        <div class="col-md-10 col-md-offset-1">
          <preview-box :htmlValue="content"></preview-box>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import previewBox from '@/components/previewBox';
import navigation from '@/components/navigation';
import db from '@/services/db';

export default {
  name: 'index',
  data() {
    return {
      content: '',
    };
  },
  created() {
    db.findDocumentById(this.$route.params.noteId)
      .then((val) => { this.content = val; });
  },
  components: {
    previewBox,
    navigation,
  },
};
</script>

<style>
.editor-content {
  margin-top: 40px;
}
</style>
