export default class Document {
  constructor() {
    this.htmlValue = '';
    this.publishKey = '';
    this.publishUrlShow = false;
    this.editKey = '';
    this.mdValue = '';
    this.saveId = '';
  }

  get publishedUrl() {
    return `http://${window.location.hostname}:${window.location.port}/#/published/${this.publishKey}`;
  }

  get editUrl() {
    return `http://${window.location.hostname}:${window.location.port}/#/edit/${this.editKey}`;
  }
}
