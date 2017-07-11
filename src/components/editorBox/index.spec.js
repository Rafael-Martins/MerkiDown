import Vue from 'vue';
import EditorBox from './EditorBox';

const mountComponent = () => new Vue(EditorBox).$mount();

describe('Editor Box', () => {
  let component;

  beforeEach(() => component = mountComponent());

  it('should call markdown function', () => {
    const mockFn = jest.fn();
    component.markdown = mockFn;
    component.markdown();
    component.$el.querySelector('textarea').value = 'test';

    const evt = new Event('input');
    component.$el.querySelector('textarea').dispatchEvent(evt);

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
