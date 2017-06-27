import { markdown } from 'markdown';

export const convertToHTML = md => markdown.toHTML(md, 'Gruber');
