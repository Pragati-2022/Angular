import { PrependNamePipe } from './prepend-name.pipe';

describe('PrependNamePipe', () => {
  it('create an instance', () => {
    const pipe = new PrependNamePipe();
    expect(pipe).toBeTruthy();
  });
});
