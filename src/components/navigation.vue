<template>
  <div class="navigation">
  <div class="row">
    <div class="col-md-3 logo-name">
      <img src="https://cdn2.iconfinder.com/data/icons/file-types-7/32/md-markdown-filetype-document-file-filetype-document-file-512.png" height="40px" width="40px">
      MarkiDown
    </div>

    <div class="col-md-5">

      <ul class="nav nav-pills nav-justified">
        <li role="presentation" class=""><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Use Template</a></li>
        <li role="presentation"><a href="#">About</a></li>
      </ul>

    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'navigation',
  data() {
    return {
    };
  },
};
</script>

<style>
.logo-name {
  font-size: 24px;
};
</style>
