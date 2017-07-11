import Vue from 'vue';
import PreviewBox from './PreviewBox';

const mountComponent = () => new Vue({ el: document.createElement('div'), render: (h) => h(PreviewBox) });

describe('Preview Box', () => {
  let component;

  beforeEach(() => component = mountComponent());

  it('should render htmlValue prop as raw html', () => {
    const htmlVal = '<h1>Test title</h1>'
    component.htmlValue = htmlVal;

    setTimeout(() => {
      const previewEl = component.$el.querySelector('.previewbox div');
      expect(previewEl.innerHTML).toBe(htmlVal);
    }, 1)
  });
});
