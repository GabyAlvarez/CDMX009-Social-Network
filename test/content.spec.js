import { renderContent } from '../src/content.js';

describe('inicio de  contenido', () => {
  it('debería ser una función', () => {
    expect(typeof renderContent).toBe('function');
  });
});
