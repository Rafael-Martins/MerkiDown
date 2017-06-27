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
    </div>
  </div>

</template>

<script>
import { markdown } from 'markdown';
import editorBox from '@/components/editorBox';
import previewBox from '@/components/previewBox';
import navegation from '@/components/navegation';

export default {
  name: 'index',
  data() {
    return {
      htmlValue: '',
    };
  },
  methods: {
    markdownConvert(mdCode) {
      this.htmlValue = markdown.toHTML(mdCode, 'Gruber');
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
