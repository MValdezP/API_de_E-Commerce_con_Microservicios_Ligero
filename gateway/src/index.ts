import { Hono } from 'hono';
import { logger } from 'hono/logger';
import { cors } from 'hono/cors';

const app = new Hono();

app.use('*', logger());
app.use('*', cors());

app.get('/health', (c) => {
  return c.json({ status: 'ok', service: 'gateway' });
});

// Mock proxy to core-api for example
app.all('/api/*', async (c) => {
  const url = new URL(c.req.url);
  const coreApiUrl = process.env.CORE_API_URL || 'http://localhost:3000';
  
  try {
    const response = await fetch(`${coreApiUrl}${url.pathname}${url.search}`, {
      method: c.req.method,
      headers: c.req.header(),
      body: c.req.method !== 'GET' && c.req.method !== 'HEAD' ? await c.req.blob() : undefined,
    });
    
    return new Response(response.body, {
      status: response.status,
      headers: response.headers,
    });
  } catch (error) {
    return c.json({ error: 'Core API Gateway Timeout/Error' }, 502);
  }
});

export default {
  port: process.env.PORT || 4000,
  fetch: app.fetch,
};
