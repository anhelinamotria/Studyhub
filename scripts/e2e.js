// Запуск e2e-тестів: піднімає dev-сервер Vite, проганяє Cypress і зупиняє сервер.
// Замінює пакет start-server-and-test, який на Windows 11 падає через відсутній wmic.exe.
import { createServer } from 'vite';
import cypress from 'cypress';

const server = await createServer({ server: { port: 5173, strictPort: true } });
await server.listen();
console.log('Dev-сервер запущено на http://localhost:5173');

try {
  const result = await cypress.run({ testingType: 'e2e' });
  if (result.status === 'failed') {
    console.error(result.message);
    process.exitCode = 1;
  } else {
    process.exitCode = result.totalFailed > 0 ? 1 : 0;
  }
} finally {
  await server.close();
}
