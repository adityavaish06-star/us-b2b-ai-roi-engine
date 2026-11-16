export default {
  async fetch(request, env) {
    return env.ASSETS.fetch(request);
  },
  async scheduled(event, env, ctx) {
    if (!env.GH_PAT) return;
    ctx.waitUntil(
      fetch("https://api.github.com/repos/adityavaish06-star/us-b2b-ai-roi-engine/actions/workflows/main.yml/dispatches", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${env.GH_PAT}`,
          "Accept": "application/vnd.github+json",
          "User-Agent": "Vaish-Immortal-Heartbeat"
        },
        body: JSON.stringify({ ref: "main" })
      })
    );
  }
};
