const request = require('supertest');

const mockGetAll = jest.fn();

const createApp = require('../src/app');
const { generateManyBook } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books', () => {
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

  describe('test for [GET] /api/v1/books', () => {
    test('should return books', () => {
      // Arrange
      const fakeBooks = generateManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      return request(app)
        .get('/api/v1/books')
        .expect(200)
        .then(({ body }) => {
          expect(body.length).toEqual(20);
        });
    });
  });
});
