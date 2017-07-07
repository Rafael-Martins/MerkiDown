import { url } from '@/config';

export default class Document {
  constructor() {
    this.baseUrl = url;
    this.htmlValue = '';
    this.mdValue = '';
    this.publishKey = '';
    this.publishUrlShow = false;
    this.editKey = '';
  }

  publish() {
    const { htmlValue, mdValue } = this.document;
    const publishLinks = db.publishDocument(htmlValue, mdValue, this.$route.params.editId);

    this.isPublishUrlVisible = true;

    Object.assign(this.document, publishLinks);
  }

  get publishedUrl() {
    return `${this.baseUrl}/published/${this.publishKey}`;
  }

  get editUrl() {
    return `${this.baseUrl}/edit/${this.editKey}`;
  }
}
