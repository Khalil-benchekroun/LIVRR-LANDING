import React, { useRef, useEffect } from "react";

export default function Scene3D({ style }) {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let t = 0;

    const W = (canvas.width = canvas.offsetWidth);
    const H = (canvas.height = canvas.offsetHeight);

    // Sample letter positions
    const offscreen = document.createElement("canvas");
    offscreen.width = W;
    offscreen.height = H;
    const octx = offscreen.getContext("2d");
    octx.fillStyle = "#fff";
    octx.font = `bold ${Math.floor(
      W * 0.18
    )}px 'Cormorant Garamond', Georgia, serif`;
    octx.letterSpacing = "12px";
    octx.textAlign = "center";
    octx.textBaseline = "middle";
    octx.fillText("LIVRR", W / 2, H / 2);

    const imgData = octx.getImageData(0, 0, W, H);
    const targets = [];
    const step = 4;
    for (let y = 0; y < H; y += step) {
      for (let x = 0; x < W; x += step) {
        if (imgData.data[(y * W + x) * 4 + 3] > 128) {
          targets.push({ x, y });
        }
      }
    }

    // Shuffle targets
    for (let i = targets.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [targets[i], targets[j]] = [targets[j], targets[i]];
    }

    const COUNT = Math.min(targets.length, 600);
    const particles = Array.from({ length: COUNT }, (_, i) => ({
      x: Math.random() * W,
      y: Math.random() * H,
      tx: targets[i % targets.length].x,
      ty: targets[i % targets.length].y,
      size: Math.random() * 1.8 + 0.6,
      alpha: Math.random() * 0.5 + 0.5,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.02 + 0.005,
      driftAmp: Math.random() * 1.2 + 0.3,
    }));

    // Ambient particles (background sparkles)
    const ambient = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      size: Math.random() * 1.2 + 0.3,
      alpha: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.3 + 0.1,
    }));

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function draw() {
      ctx.fillStyle = "rgba(10,10,15,0.18)";
      ctx.fillRect(0, 0, W, H);

      // Formation speed — done in ~2.5s at 60fps = ~150 frames
      const formProgress = Math.min(t / 150, 1);
      const ease = easeOut(formProgress);

      // Ambient sparkles
      ambient.forEach((p) => {
        p.y -= p.speed * 0.3;
        if (p.y < 0) {
          p.y = H;
          p.x = Math.random() * W;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201,169,110,${p.alpha * (0.3 + ease * 0.4)})`;
        ctx.fill();
      });

      // Main particles
      particles.forEach((p) => {
        // Move toward target with easing
        const lerpSpeed = 0.06 + ease * 0.04;
        p.x += (p.tx - p.x) * lerpSpeed;
        p.y += (p.ty - p.y) * lerpSpeed;

        // Once formed, add subtle drift
        if (formProgress > 0.85) {
          const driftStrength = (formProgress - 0.85) / 0.15;
          p.drift += p.driftSpeed;
          const dx = Math.cos(p.drift) * p.driftAmp * driftStrength;
          const dy = Math.sin(p.drift) * p.driftAmp * driftStrength;

          ctx.beginPath();
          ctx.arc(p.tx + dx, p.ty + dy, p.size, 0, Math.PI * 2);
        } else {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        }

        // Shimmer effect once formed
        const shimmer =
          formProgress > 0.7 ? 0.5 + Math.sin(t * 0.05 + p.drift) * 0.3 : ease;

        ctx.fillStyle = `rgba(201,169,110,${p.alpha * shimmer})`;
        ctx.fill();
      });

      // Gold glow behind the text once formed
      if (formProgress > 0.6) {
        const glowAlpha = ((formProgress - 0.6) / 0.4) * 0.08;
        const grd = ctx.createRadialGradient(
          W / 2,
          H / 2,
          0,
          W / 2,
          H / 2,
          W * 0.35
        );
        grd.addColorStop(0, `rgba(201,169,110,${glowAlpha})`);
        grd.addColorStop(1, "rgba(201,169,110,0)");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, W, H);
      }

      t++;
      animId = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        ...style,
        width: "100%",
        height: "100%",
        display: "block",
      }}
    />
  );
}
