/**
 * Fond animé du pitch : des molécules de CO2 dérivent dans l'air nocturne ; plus on avance
 * dans la présentation, plus elles sont « converties » en gouttes de carburant ambrées.
 * C'est l'histoire du produit racontée en arrière-plan.
 *
 * Choix non évidents :
 *  - Canvas 2D (pas WebGL) : assez pour une quarantaine de particules, sans risque sur un PC de salle.
 *  - La conversion est déterministe : chaque particule a un seuil fixe dans [0, 1] ; elle est
 *    carburant si progression >= seuil. Revenir en arrière « re-transforme » donc les mêmes particules.
 *
 * Invariants : ~30 images/s maximum, pause quand l'onglet est caché, image fixe si
 * prefers-reduced-motion, rien du tout en mode impression.
 *
 * API : BG.setProgress(0..1)
 */
(() => {
  const COUNT = 30;
  const FRAME_MS = 33;
  const canvas = document.getElementById("bg");
  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const printing = document.documentElement.classList.contains("print");
  let progress = 0;
  let w = 0;
  let h = 0;

  const rand = (a, b) => a + Math.random() * (b - a);
  const parts = Array.from({ length: COUNT }, (_, i) => ({
    x: Math.random(), y: Math.random(),
    r: rand(5, 11), speed: rand(0.00006, 0.00018), phase: rand(0, Math.PI * 2),
    spin: rand(-0.0006, 0.0006), angle: rand(0, Math.PI),
    threshold: (i + 0.5) / COUNT,
    mix: 0,
  }));

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function sky() {
    const g = ctx.createRadialGradient(w * 0.8, h * 0.1, 0, w * 0.8, h * 0.1, Math.max(w, h));
    g.addColorStop(0, "#0f3a44");
    g.addColorStop(0.55, "#06141c");
    g.addColorStop(1, "#040d12");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  }

  function co2(x, y, r, a, alpha) {
    ctx.globalAlpha = alpha;
    const dx = Math.cos(a) * r * 1.9;
    const dy = Math.sin(a) * r * 1.9;
    ctx.fillStyle = "#c95d52";
    ctx.beginPath(); ctx.arc(x - dx, y - dy, r * 0.75, 0, 7); ctx.arc(x + dx, y + dy, r * 0.75, 0, 7); ctx.fill();
    ctx.fillStyle = "#9aa7b8";
    ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  }

  function drop(x, y, r, alpha) {
    ctx.globalAlpha = alpha;
    ctx.fillStyle = "#f2b33d";
    ctx.beginPath();
    ctx.moveTo(x, y - r * 1.8);
    ctx.bezierCurveTo(x + r * 0.6, y - r * 0.8, x + r * 1.2, y - r * 0.2, x + r * 1.2, y + r * 0.4);
    ctx.arc(x, y + r * 0.4, r * 1.2, 0, Math.PI);
    ctx.bezierCurveTo(x - r * 1.2, y - r * 0.2, x - r * 0.6, y - r * 0.8, x, y - r * 1.8);
    ctx.fill();
  }

  function draw(t, dt) {
    sky();
    for (const p of parts) {
      p.x += p.speed * dt;
      if (p.x > 1.05) { p.x = -0.05; p.y = Math.random(); }
      p.angle += p.spin * dt;
      const target = progress >= p.threshold ? 1 : 0;
      p.mix += (target - p.mix) * Math.min(1, dt / 600);
      const x = p.x * w;
      const y = p.y * h + Math.sin(t / 2400 + p.phase) * 18;
      if (p.mix < 0.98) co2(x, y, p.r, p.angle, 0.18 * (1 - p.mix));
      if (p.mix > 0.02) drop(x, y, p.r, 0.24 * p.mix);
    }
    ctx.globalAlpha = 1;
  }

  let last = performance.now();
  let acc = 0;
  function loop(now) {
    requestAnimationFrame(loop);
    if (document.hidden) { last = now; return; }
    acc += now - last;
    if (acc < FRAME_MS) { last = now; return; }
    draw(now, acc);
    acc = 0;
    last = now;
  }

  window.BG = {
    setProgress(p) {
      progress = p;
      if (reduced) { parts.forEach((q) => { q.mix = p >= q.threshold ? 1 : 0; }); draw(0, 0); }
    },
  };

  if (printing) return;
  resize();
  addEventListener("resize", () => { resize(); if (reduced) draw(0, 0); });
  if (reduced) draw(0, 0);
  else requestAnimationFrame(loop);
})();
