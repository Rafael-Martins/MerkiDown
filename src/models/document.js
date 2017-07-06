import { url } from '@/config';

export default class Document {
  constructor() {
    this.baseUrl = url;
    this.htmlValue = '';
    this.publishKey = '';
    this.publishUrlShow = false;
    this.editKey = '';
    this.mdValue = '';
    this.saveId = '';
  }

  get publishedUrl() {
    return `${this.baseUrl}/published/${this.publishKey}`;
  }

  get editUrl() {
    return `${this.baseUrl}/edit/${this.editKey}`;
  }
}
