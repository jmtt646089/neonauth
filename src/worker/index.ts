import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.post('/api/auth/sign-in/social', async (c) => {
  return c.json({ message: 'Success' })
})

export default app;
