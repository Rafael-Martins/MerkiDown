<template>
  <div class="index">
    <navegation></navegation>

    <div class="container-fluid">

      <div class="row editor-content">

        <div class="col-md-5 col-md-offset-1">
          <editor-box @markdown="markdownConvert"></editor-box>
        </div>

        <div class="col-md-5">
          <preview-box :htmlValue="htmlValue"></preview-box>
        </div>

      </div>


      <div class="row">

        <div class="col-md-6 col-md-offset-3 text-center">
          <button @click="publish" type="button" class="btn btn-default btn-lg">Publish</button>
          <pre v-if="publishUrlShow" class="url-show-box"><a :href="publishUrl">{{ publishUrl }}</a></pre>
        </div>

      </div>

    </div>

  </div>

</template>

<script>
import { database } from '@/db';
import hash from '@/services/hash';
import { convertToHTML } from '@/services/markdown';
import editorBox from '@/components/editorBox';
import previewBox from '@/components/previewBox';
import navegation from '@/components/navegation';

export default {
  name: 'index',
  data() {
    return {
      htmlValue: '',
      publishUrl: '',
      publishUrlShow: false,
      editUrl: '',
    };
  },
  methods: {
    markdownConvert(mdCode) {
      this.htmlValue = convertToHTML(mdCode);
    },
    publish() {
      const filesRef = database.ref().child('files').push();
      const hashGenerated = hash();
      const hashRef = database.ref().child(`hash/${hashGenerated}`);

      filesRef.set({ content: this.htmlValue });
      hashRef.set(filesRef.key);

      this.publishUrl = `${window.location.href}published/${filesRef.key}`;
      this.editUrl = `${window.location.href}edit/${hashGenerated}`;
      this.publishUrlShow = true;
      // this.$router.go(this.editUrl);
    },
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
