import { Hono } from "hono";
const app = new Hono<{ Bindings: Env }>();

/*
app.get("/api", (c) => {
  console.log("success - api");
  c.json({ name: "Cloudflare" });
});
*/

app.post('/api/auth/sign-in/social', async (c) => {
  console.log("success sign in social");
  return c.json({ message: 'Success - sign in social' });
});


app.get('api/auth/get-session', async (c) => {
  console.log("success - get session");
  return c.json({ message: 'Success - get session' });
});

app.post('api/auth/sign-in/email', async (c) => {
  console.log("Success - email login");
  return c.json({ message: 'Success - email login' });
});


app.post('api/auth/sign-up/email', async (c) => {
  console.log("success sign up email");
  return c.json({ message: 'Success - sign up email' });
});


export default app;
