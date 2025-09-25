import client from 'prom-client';

// Create a singleton registry to store metrics
const register = new client.Registry();

// Collect default system metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics({ register });

// Example: Custom HTTP request counter (we'll use this later)
console.log("Initializing metrics");
const httpRequestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'route', 'status_code'],
});

// Register the custom metric
register.registerMetric(httpRequestCounter);

// Export for use in API routes
export { register, httpRequestCounter };

