<template>
  <div class="index">

    <navegation></navegation>

    <div class="container-fluid">

      <div class="row editor-content">

        <div class="col-md-5 col-md-offset-1">
          <editor-box @markdown="markdownConvert" :mdValue="mdValue"></editor-box>
        </div>

        <div class="col-md-5">
          <preview-box :htmlValue="htmlValue"></preview-box>
        </div>

      </div>

      <div class="row">

        <div class="col-md-6 col-md-offset-3 text-center">
          <button @click="publish" type="button" class="btn btn-default btn-lg" v-if="!$route.params.editId">Publish</button>
          <button @click="save" type="button" class="btn btn-default btn-lg" v-if="$route.params.editId">Save</button>
          <pre v-if="publishUrlShow" class="url-show-box"><a :href="publishUrl">{{ publishUrl }}</a><br> <a :href="editUrl">{{ editUrl }}</a></pre>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import editorBox from '@/components/editorBox';
import previewBox from '@/components/previewBox';
import navegation from '@/components/navegation';
import db from '@/services/db';
import { convertToHTML } from '@/services/markdown';

export default {
  name: 'index',
  data() {
    return {
      htmlValue: '',
      publishUrl: '',
      publishUrlShow: false,
      editUrl: '',
      mdValue: '',
      saveId: '',
    };
  },
  methods: {
    markdownConvert(mdCode) {
      this.mdValue = mdCode;
      this.htmlValue = convertToHTML(mdCode);
    },
    publish() {
      db.publish(this.htmlValue, this.mdValue, this.$route.params.editId);
      this.publishUrlShow = true;
    },
    save() {
      db.save(this.htmlValue, this.mdValue, this.saveId);
    },
  },
  created() {
    if (this.$route.params.editId) {
      this.publishUrlShow = true;
    }
    const content = db.getEditContent(this.$route.params.editId);
    this.htmlValue = content.htmlValue;
    this.mdValue = content.mdValue;
    this.publishUrl = content.publishUrl;
    this.saveId = content.saveId;
    this.editUrl = content.editUrl;
  },
  components: { editorBox, previewBox, navegation },
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
