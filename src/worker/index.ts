import { Hono } from "hono";
//import { neonAuth } from "@neondatabase/neon-js/auth/cloudflare";
//import { auth } from "@neondatabase/neon-js/worker";
//import { createAuthHandler } from "@neondatabase/neon-js";

const app = new Hono<{ Bindings: Env }>();

// Mount Neon Auth handlers - this is what's missing!
//app.route("/api/auth", neonAuth());
//app.route("/api/auth", auth());
//app.route("/api/auth", createAuthHandler());

/*
app.get("/api", (c) => {
  console.log("success - api");
  c.json({ name: "Cloudflare" });
});
*/

/*
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
*/

export default app;
