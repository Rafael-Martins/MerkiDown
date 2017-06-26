import Vue from 'vue';
import editorBox from '../components/editorBox';

const mountComponent = () => {
  const component = new Vue(editorBox).$mount();
  return component;
};

describe('Editor Box', () => {
  let component
  beforeEach(() => {
    component = mountComponent()
  })
  it('should call markdown function', () => {

    const mockFn = jest.fn();
    component.markdown = mockFn;
    component.markdown()
    component.$el.querySelector('textarea').value = 'test'
    console.log(component.$el.querySelector('textarea').value)
    const evt = new Event('input');
    component.$el.querySelector('textarea').dispatchEvent(evt);

    expect(mockFn.mock.calls.length).toBe(1);
  });
});
