import bigoMock from './../../global';

describe('test/app/controller/home.test.ts', () => {
  it('should GET /', async () => {
    const result = await bigoMock.app.httpRequest().get('/').expect(200);
    bigoMock.assert(result.text === 'hello world');
  });
});
