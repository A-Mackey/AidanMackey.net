import type { NextApiRequest, NextApiResponse } from 'next';
import client from 'prom-client';

// Create a registry for metrics
const register = new client.Registry();

// Collect default system metrics (CPU, memory, event loop, etc.)
client.collectDefaultMetrics({ register });

// Expose metrics in Prometheus format
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', register.contentType);
    res.status(200).send(await register.metrics());
}

