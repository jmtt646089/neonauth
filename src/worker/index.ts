import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));
app.post('/api/auth/sign-in/social', async (c) => {
  return c.json({ message: 'Success - sign in social' })
});


app.get('api/auth/get-session', async (c) => {
  return c.json({ message: 'Success - get session' })
});

export default app;
