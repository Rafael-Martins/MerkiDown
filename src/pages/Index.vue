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
          <pre>{{ publishUrl }}</pre>
        </div>

        <div class="col-md-2 ">
          <button @click="publish" type="button" class="btn btn-default">Publish</button>
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
      editUrl: '',
    };
  },
  methods: {
    markdownConvert(mdCode) {
      this.htmlValue = convertToHTML(mdCode);
    },
    publish() {
      const ref = database.ref().child('files').push();
      const hashGenerated = hash();

      ref.set({ content: this.htmlValue, privateKey: hashGenerated });

      this.publishUrl = window.location.href + ref.key;
      this.editUrl = `${window.location.href}edit/${hashGenerated}`;
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
</style>
