<template>
  <div class="index">
    <navigation></navigation>

    <div class="container-fluid">
      <div class="row editor-content">
        <div class="col-md-5 col-md-offset-1">
          <editor-box @markdown="markdownConvert" :mdValue="document.mdValue"></editor-box>
        </div>

        <div class="col-md-5">
          <preview-box :htmlValue="document.htmlValue"></preview-box>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 col-md-offset-3 text-center">
          <button @click="publish" type="button" class="btn btn-default btn-lg" v-if="!$route.params.editId">Publish</button>
          <button @click="save" type="button" class="btn btn-default btn-lg" v-if="$route.params.editId">Save</button>
          <pre v-if="isPublishUrlVisible" class="url-show-box"><a :href="document.publishedUrl">{{ document.publishedUrl }}</a><br> <a :href="document.editUrl">{{ document.editUrl }}</a></pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editorBox from '@/components/EditorBox';
import previewBox from '@/components/PreviewBox';
import navigation from '@/components/Navigation';
import Document from '@/models/document';

export default {
  name: 'index',
  data() {
    return {
      document: new Document(),
      isPublishUrlVisible: false,
    };
  },
  methods: {
    markdownConvert(mdVal) {
      this.document.mdValue = mdVal;
    },
    publish() {
      this.document.publish(this.$route.params.editId);
      this.isPublishUrlVisible = true;
    },
    save() {
      this.document.save();
    },
  },
  created() {
    if (!this.$route.params.editId) return;

    this.document.getByEditKey(this.$route.params.editId)
      .then(doc => (this.document = (new Document(), doc)));
  },
  components: { editorBox, previewBox, navigation },
};
</script>

<style>
.logo {
  width: 100px;
  height: 100px;
}

.titleLogo {
  font-size: 40px;
}

.editor-content {
  margin-top: 40px;
}

.url-show-box {
  margin-top: 13px;
}
</style>
