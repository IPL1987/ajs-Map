import ErrorRepository from '../js/map';

test('class "ErrorRepository" exists', () => {
  expect(new ErrorRepository()).toBeDefined();
});

test('class "ErrorRepository" has the "errors" property with Map object', () => {
  expect(ErrorRepository.errors).toBeDefined();
  expect(ErrorRepository.errors instanceof Map).toBeTruthy();
});

ErrorRepository.errors.set(1, 'Описание ошибки с кодом 1');

test('class "ErrorRepository" throw errors', () => {
  expect(typeof ErrorRepository).toBe('function');

  let output = ErrorRepository(1);

  expect(output).toBe('Описание ошибки с кодом 1');

  output = ErrorRepository(2);

  expect(output).toBe('Unknown error');
});
