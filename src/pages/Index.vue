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
          <pre v-if="document.publishUrlShow" class="url-show-box"><a :href="document.publishedUrl">{{ document.publishedUrl }}</a><br> <a :href="document.editUrl">{{ document.editUrl }}</a></pre>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import editorBox from '@/components/EditorBox';
import previewBox from '@/components/PreviewBox';
import navigation from '@/components/Navigation';
import db from '@/services/db';
import { convertToHTML } from '@/services/markdown';
import Document from '@/models/document';

export default {
  name: 'index',
  data() {
    return {
      document: new Document(),
    };
  },
  methods: {
    markdownConvert(mdCode) {
      this.document.mdValue = mdCode;
      this.document.htmlValue = convertToHTML(mdCode);
    },
    publish() {
      const publishLinks = db.publish(
        this.document.htmlValue,
        this.document.mdValue,
        this.$route.params.editId,
        );
      this.document.publishUrlShow = true;
      this.document.publishKey = publishLinks.publishKey;
      this.document.editKey = publishLinks.editHash;
    },
    save() {
      db.save(this.document.htmlValue, this.document.mdValue, this.document.saveId);
    },
  },
  created() {
    if (!this.$route.params.editId) {
      return;
    }
    db.getEditContent(this.$route.params.editId).then((val) => {
      this.document = val;
      this.document.publishUrlShow = true;
    });
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
