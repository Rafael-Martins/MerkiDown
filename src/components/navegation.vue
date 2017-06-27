<template>
  <div class="navigation">
  <div class="row">


    <div class="col-md-3 logo-name">
      <img src="https://cdn2.iconfinder.com/data/icons/file-types-7/32/md-markdown-filetype-document-file-filetype-document-file-512.png" height="40px" width="40px">
      MarkiDown
    </div>

    <div class="col-md-5">

      <ul class="nav nav-pills nav-justified">
        <li role="presentation" class="active"><a href="#">Home</a></li>
        <li role="presentation"><a href="#">Import MD</a></li>

        <li role="presentation" :class="['dropdown', dropdownVisible ? 'open' : '']" @click="toggle">
          <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Use Template <span class="caret"></span>
          </a>
          <ul class="dropdown-menu">
            <li class=""><a href="#">Docs</a></li>
          </ul>
        </li>
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
      dropdownVisible: null,
    };
  },
  methods: {
    toggle() {
      this.dropdownVisible = !this.dropdownVisible;
    },
  },
};
</script>

<style>
.logo-name {
  font-size: 24px;
};
</style>
