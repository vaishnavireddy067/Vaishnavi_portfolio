"use client";

import { useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  x: number; y: number; vx: number; vy: number;
  size: number; opacity: number; symbol: string;
  color: string; rotation: number; rotationSpeed: number;
  pulsePhase: number;
}

interface Node {
  x: number; y: number; r: number;
  vx: number; vy: number; color: string;
  pulsePhase: number;
}

interface CircuitTrace {
  points: { x: number; y: number }[];
  progress: number; speed: number;
  color: string; alpha: number;
}

interface HexCell {
  cx: number; cy: number;
  r: number; phase: number;
  color: string;
}

interface ScanLine {
  y: number; speed: number; alpha: number;
}

// ─── Constants ────────────────────────────────────────────────────────────────
const TECH_SYMBOLS = [
  "</>", "{}", "()", "=>", "[]", "&&", "||",
  "!=", "==", "++", "fn()", "AI", "ML", ":::",
  ">>>", "***", "∑", "∇", "∂", "∫", "λ", "π",
  "σ", "θ", "#!/", "npm", "git", "API", "RAG",
  "LLM", "def", "async",
];

const COLORS_DARK = [
  "rgba(59,130,246,VAL)",
  "rgba(139,92,246,VAL)",
  "rgba(99,102,241,VAL)",
  "rgba(34,211,238,VAL)",
  "rgba(168,85,247,VAL)",
  "rgba(52,211,153,VAL)",
];

const COLORS_LIGHT = [
  "rgba(37,99,235,VAL)",
  "rgba(109,40,217,VAL)",
  "rgba(79,70,229,VAL)",
  "rgba(6,182,212,VAL)",
  "rgba(124,58,237,VAL)",
  "rgba(5,150,105,VAL)",
];

function randomBetween(a: number, b: number) { return a + Math.random() * (b - a); }
function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

function makeParticle(w: number, h: number, isDark: boolean): Particle {
  const color = pick(isDark ? COLORS_DARK : COLORS_LIGHT);
  return {
    x: Math.random() * w, y: Math.random() * h,
    vx: randomBetween(-0.18, 0.18), vy: randomBetween(-0.22, -0.06),
    size: randomBetween(12, 22), opacity: randomBetween(0.18, 0.42),
    symbol: pick(TECH_SYMBOLS), color,
    rotation: Math.random() * 360, rotationSpeed: randomBetween(-0.3, 0.3),
    pulsePhase: Math.random() * Math.PI * 2,
  };
}

function makeNode(w: number, h: number, isDark: boolean): Node {
  return {
    x: Math.random() * w, y: Math.random() * h,
    r: randomBetween(2.5, 4.5),
    vx: randomBetween(-0.12, 0.12), vy: randomBetween(-0.12, 0.12),
    color: pick(isDark ? COLORS_DARK : COLORS_LIGHT),
    pulsePhase: Math.random() * Math.PI * 2,
  };
}

function makeCircuitTrace(w: number, h: number, isDark: boolean): CircuitTrace {
  const color = pick(isDark ? COLORS_DARK : COLORS_LIGHT);
  const startX = Math.floor(Math.random() * (w / 60)) * 60;
  const startY = Math.floor(Math.random() * (h / 60)) * 60;
  const points: { x: number; y: number }[] = [{ x: startX, y: startY }];
  let cx = startX; let cy = startY;
  const steps = Math.floor(randomBetween(4, 10));
  for (let i = 0; i < steps; i++) {
    if (Math.random() > 0.5) {
      cx += (Math.random() > 0.5 ? 1 : -1) * 60 * Math.floor(randomBetween(1, 4));
    } else {
      cy += (Math.random() > 0.5 ? 1 : -1) * 60 * Math.floor(randomBetween(1, 4));
    }
    cx = Math.max(0, Math.min(w, cx));
    cy = Math.max(0, Math.min(h, cy));
    points.push({ x: cx, y: cy });
  }
  return { points, progress: 0, speed: randomBetween(0.003, 0.009), color, alpha: randomBetween(0.14, 0.32) };
}

function makeHexCell(w: number, h: number, isDark: boolean): HexCell {
  const size = 34;
  const col = Math.floor(Math.random() * (w / (size * 1.8)));
  const row = Math.floor(Math.random() * (h / (size * 1.6)));
  const cx = col * size * 1.8 + (row % 2 === 0 ? 0 : size * 0.9) + size;
  const cy = row * size * 1.55 + size;
  return {
    cx, cy, r: size,
    phase: Math.random() * Math.PI * 2,
    color: pick(isDark ? COLORS_DARK : COLORS_LIGHT),
  };
}

function makeScanLine(h: number): ScanLine {
  return { y: randomBetween(0, h), speed: randomBetween(0.15, 0.4), alpha: randomBetween(0.015, 0.045) };
}

// ─── Component ────────────────────────────────────────────────────────────────
const PARTICLE_COUNT = 55;
const NODE_COUNT = 16;
const CIRCUIT_COUNT = 12;
const HEX_COUNT = 24;
const SCAN_LINE_COUNT = 3;

export default function TechBackground({ isDark }: { isDark: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const isDarkRef = useRef(isDark);

  useEffect(() => { isDarkRef.current = isDark; }, [isDark]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = w; canvas.height = h;
    };
    resize();
    window.addEventListener("resize", resize);

    const dark0 = isDarkRef.current;
    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => makeParticle(w, h, dark0));
    const nodes: Node[] = Array.from({ length: NODE_COUNT }, () => makeNode(w, h, dark0));
    const circuits: CircuitTrace[] = Array.from({ length: CIRCUIT_COUNT }, () => makeCircuitTrace(w, h, dark0));
    const hexes: HexCell[] = Array.from({ length: HEX_COUNT }, () => makeHexCell(w, h, dark0));
    const scans: ScanLine[] = Array.from({ length: SCAN_LINE_COUNT }, () => makeScanLine(h));

    let t = 0;

    function hexPath(cx: number, cy: number, r: number) {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i - Math.PI / 6;
        const px = cx + r * Math.cos(angle);
        const py = cy + r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
      }
      ctx.closePath();
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      t += 0.008;
      const darkMode = isDarkRef.current;

      // ══ 1. Tech Grid ══════════════════════════════════════════════════════
      const gridAlpha = darkMode ? 0.055 : 0.04;
      ctx.strokeStyle = darkMode ? `rgba(59,130,246,${gridAlpha})` : `rgba(37,99,235,${gridAlpha})`;
      ctx.lineWidth = 0.8;
      const gridSize = 60;
      for (let gx = 0; gx < w; gx += gridSize) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
      }
      for (let gy = 0; gy < h; gy += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
      }

      // ══ 2. Scan Lines ═══════════════════════════════════════════════════════
      scans.forEach(sl => {
        sl.y += sl.speed;
        if (sl.y > h) sl.y = 0;
        const grad = ctx.createLinearGradient(0, sl.y - 2, 0, sl.y + 2);
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, darkMode ? `rgba(99,102,241,${sl.alpha * 1.8})` : `rgba(79,70,229,${sl.alpha * 1.8})`);
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.fillRect(0, sl.y - 2, w, 4);
      });

      // ══ 3. Hex Grid Pulse ════════════════════════════════════════════════════
      hexes.forEach(hx => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.7 + hx.phase);
        const alpha = (darkMode ? 0.05 : 0.035) * (0.5 + 0.5 * pulse);
        hexPath(hx.cx, hx.cy, hx.r);
        ctx.strokeStyle = hx.color.replace("VAL", String(alpha));
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // ══ 4. Circuit Traces ════════════════════════════════════════════════════
      circuits.forEach(c => {
        c.progress += c.speed;
        if (c.progress >= 1) {
          const nc = makeCircuitTrace(w, h, darkMode);
          c.points = nc.points; c.progress = 0; c.speed = nc.speed;
          c.color = nc.color; c.alpha = nc.alpha;
          return;
        }
        const totalLen = c.points.length - 1;
        const drawn = c.progress * totalLen;
        const segIdx = Math.floor(drawn);
        const segFrac = drawn - segIdx;
        ctx.beginPath();
        ctx.moveTo(c.points[0].x, c.points[0].y);
        for (let i = 0; i < segIdx && i < totalLen; i++) {
          ctx.lineTo(c.points[i + 1].x, c.points[i + 1].y);
        }
        if (segIdx < totalLen) {
          const a = c.points[segIdx]; const b = c.points[segIdx + 1];
          ctx.lineTo(a.x + (b.x - a.x) * segFrac, a.y + (b.y - a.y) * segFrac);
        }
        ctx.strokeStyle = c.color.replace("VAL", String(c.alpha));
        ctx.lineWidth = 1;
        ctx.stroke();

        for (let i = 0; i <= segIdx && i < c.points.length; i++) {
          ctx.beginPath();
          ctx.arc(c.points[i].x, c.points[i].y, 2, 0, Math.PI * 2);
          ctx.fillStyle = c.color.replace("VAL", String(c.alpha * 2));
          ctx.fill();
        }
      });

      // ══ 5. Connection lines between nearby nodes ══════════════════════════════
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const alpha = (1 - dist / 180) * (darkMode ? 0.1 : 0.05);
            ctx.beginPath();
            ctx.strokeStyle = nodes[i].color.replace("VAL", String(alpha));
            ctx.lineWidth = 0.7;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // ══ 6. Tech Network Nodes ═════════════════════════════════════════════════
      nodes.forEach((node) => {
        node.x += node.vx; node.y += node.vy;
        if (node.x < 0) node.x = w; if (node.x > w) node.x = 0;
        if (node.y < 0) node.y = h; if (node.y > h) node.y = 0;
        const pulse = 0.5 + 0.5 * Math.sin(t * 1.5 + node.pulsePhase);
        const baseAlpha = darkMode ? 0.3 : 0.15;
        const alpha = baseAlpha * (0.6 + 0.4 * pulse);
        ctx.beginPath(); ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace("VAL", String(alpha)); ctx.fill();
      });

      // ══ 7. Floating Tech Symbols ═══════════════════════════════════════════
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        p.rotation += p.rotationSpeed;
        if (p.y < -40) { p.y = h + 20; p.x = Math.random() * w; }
        if (p.x < -60) p.x = w + 20;
        if (p.x > w + 60) p.x = -20;
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.8 + p.pulsePhase);
        const alpha = p.opacity * (0.7 + 0.3 * pulse);
        const color = p.color.replace("VAL", String(alpha));
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.font = `bold ${p.size}px 'Courier New', monospace`;
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      aria-hidden="true"
    />
  );
}
