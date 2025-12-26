import client from 'prom-client';

// Use a global variable to ensure singleton pattern in development
// This prevents re-registration errors during hot reloading
declare global {
  var metricsRegistry: client.Registry | undefined;
  var metricsHttpRequestCounter: client.Counter | undefined;
  var metricsInitialized: boolean | undefined;
}

// Create or reuse the registry
const register = global.metricsRegistry || new client.Registry();
global.metricsRegistry = register;

// Collect default system metrics only once
if (!global.metricsInitialized) {
  client.collectDefaultMetrics({ register });
  global.metricsInitialized = true;
}

// Create or reuse the HTTP request counter
let httpRequestCounter = global.metricsHttpRequestCounter;

if (!httpRequestCounter) {
  httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
    registers: [register],
  });
  global.metricsHttpRequestCounter = httpRequestCounter;
}

// Export for use in API routes
export { register, httpRequestCounter };
