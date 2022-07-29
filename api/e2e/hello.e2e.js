const request = require('supertest');

const createApp = require('../src/app');

describe('Test for hello endpoint', () => {
  let app = null;
  let server = null;
  // Inicia la app antes de los tests
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  // Apaga el servidor después de todos los tests
  afterAll(() => {
    server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "Hello World!"', () => request(app)
      .get('/')
      .expect(200)
      .then((response) => {
        expect(response.text).toBe('Hello World!');
      }));
  });
});
