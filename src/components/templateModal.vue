<template>
  <div class="modala">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Use Template</h4>
      </div>
      <div class="modal-body">

        <div class="row">

          <div class="col-md-3">
            <div class="input-group">
              <label>Project Name</label>
              <input type="text" class="form-control" placeholder="Project Name">
            </div>
          </div>

          <div class="col-md-3">
            <div class="input-group">
              <label>Project Description</label>
              <textarea class="form-control" rows="3" placeholder="One Paragraph of project description."></textarea>
            </div>
          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'modal',
  data() {
    return {
      content: '',
    };
  },
};
</script>

<style>

</style>
