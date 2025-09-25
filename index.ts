const express = require('express');
const next = require('next');
const { collectDefaultMetrics, register } = require('prom-client');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Collect default metrics from the system (e.g., memory, CPU, etc.)
  collectDefaultMetrics();

  // Define the /metrics endpoint
  server.get('/metrics', async (req: any, res: any) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
  });

  // Handle other Next.js routes
  server.all('*', (req: any, res: any) => {
    return handle(req, res);
  });

  // Start the server on port 3000
  server.listen(3000, (err: any) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});

