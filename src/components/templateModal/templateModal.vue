<template>
  <div class="modala">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">Use Template</h4>
      </div>
      <div class="modal-body">

        <div class="row form-group">

          <div class="col-lg-3 col-md-6">
              <label>Project Name</label>
              <input type="text" class="form-control" placeholder="Project Name">
          </div>

          <div class="col-lg-3 col-md-6">
              <label>Project Description</label>
              <textarea class="form-control" placeholder="One Paragraph of project description."></textarea>
          </div>

          <div class="col-lg-3 col-md-6">
              <label>Getting Started</label>
              <textarea class="form-control" placeholder="These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system."></textarea>
          </div>

          <div class="col-lg-3 col-md-6">
              <label>Prerequisites</label>
              <textarea class="form-control" placeholder="What things you need to install the software and how to install them"></textarea>
          </div>

        </div>

        <div class="row form-group">
          <div class="col-lg-3 col-md-6">
              <label>Installing</label>
              <textarea class="form-control" placeholder="A step by step series of examples that tell you have to get a development env running"></textarea>
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
