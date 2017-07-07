import { url } from '@/config';
import { convertToHTML } from '@/services/markdown';
import db from '@/services/db';

export default class Document {
  constructor(dbService = db) {
    this.dbService = dbService;
    this.htmlValue = '';
    this.baseUrl = url;
    this.id = '';
    this.editKey = '';

    this.mdval = '';
  }

  publish(editKey) {
    const { htmlValue, mdValue } = this;
    const publishLinks = this.dbService.createDocument(htmlValue, mdValue, editKey);

    Object.assign(this, publishLinks);

    return this;
  }

  save() {
    const { htmlValue, mdValue, id } = this;

    this.dbService.updateDocument(htmlValue, mdValue, id);

    return this;
  }

  getByEditKey(editKey) {
    return this.dbService.findDocumentByEditKey(editKey);
  }

  get mdValue() {
    return this.mdval;
  }

  set mdValue(val) {
    this.mdval = val;
    this.htmlValue = convertToHTML(val);

    return this;
  }

  get publishedUrl() {
    return `${this.baseUrl}/published/${this.id}`;
  }

  get editUrl() {
    return `${this.baseUrl}/edit/${this.editKey}`;
  }
}
