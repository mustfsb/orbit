"use client";

import { useEffect, useRef } from "react";

// ── Config ──────────────────────────────────────────────────────
const COLS    = 31;
const ROWS    = 43;
const LETTERS = ['O','R','B','I','T'];

const RATIO   = 0.52;

// Torus geometrisi (elips halka — yandan dar, boydan uzun)
const R1      = 0.30;
const R2X     = 1.38;
const R2Y     = 3.40;
const K2      = 6.0;
const K1      = 18;
const SHEAR   = 0;

const SPEED   = (2 * Math.PI) / 9;

const USTEPS  = 135;
const VSTEPS  = 30;

function renderFrame(t: number): string {
  const grid: string[] = new Array(COLS * ROWS).fill(' ');
  const zbuf = new Float32Array(COLS * ROWS);
  let letterIdx = 0;

  const A    = SPEED * t;
  const cosA = Math.cos(A), sinA = Math.sin(A);

  for (let i = 0; i < USTEPS; i++) {
    const u    = (i / USTEPS) * 2 * Math.PI;
    const cosU = Math.cos(u), sinU = Math.sin(u);

    for (let j = 0; j < VSTEPS; j++) {
      const v    = (j / VSTEPS) * 2 * Math.PI;
      const cosV = Math.cos(v), sinV = Math.sin(v);

      const tx = (R2X + R1 * cosV) * cosU;
      const ty = (R2Y + R1 * cosV) * sinU;
      const tz = R1 * sinV;

      const x =  tx * cosA + tz * sinA;
      const y =  ty;
      const z = -tx * sinA + tz * cosA;

      const xSheared = x + SHEAR * y;
      const ooz = 1 / (K2 - z);
      const xp  = Math.round(COLS / 2 + (K1 * xSheared * ooz) / RATIO);
      const yp  = Math.round(ROWS / 2 - (K1 * y * ooz));

      if (xp < 0 || xp >= COLS || yp < 0 || yp >= ROWS) continue;

      const idx = yp * COLS + xp;
      if (ooz > zbuf[idx]) {
        zbuf[idx] = ooz;
        grid[idx] = LETTERS[letterIdx % LETTERS.length];
        letterIdx++;
      }
    }
  }

  let s = '';
  for (let r = 0; r < ROWS; r++) {
    s += grid.slice(r * COLS, (r + 1) * COLS).join('');
    if (r < ROWS - 1) s += '\n';
  }
  return s;
}

export default function HeroAsciiOrbit() {
  const preRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let t0: number | null = null;
    let raf = 0;
    const loop = (ts: number) => {
      raf = requestAnimationFrame(loop);
      if (t0 === null) t0 = ts;
      const t = (ts - t0) / 1000;
      if (preRef.current) {
        preRef.current.textContent = renderFrame(t);
      }
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <pre
      ref={preRef}
      aria-hidden="true"
      style={{
        margin: 0,
        padding: 0,
        fontFamily: '"Courier New", Courier, monospace',
        fontSize: 'clamp(8px, 1.05vw, 14px)',
        fontWeight: 700,
        lineHeight: '1.18',
        color: 'var(--landing-text-strong)',
        letterSpacing: '0em',
        userSelect: 'none',
        whiteSpace: 'pre',
        background: 'transparent',
      }}
    />
  );
}
