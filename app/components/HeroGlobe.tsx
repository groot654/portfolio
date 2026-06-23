"use client";

import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

type Vec3 = [number, number, number];

// Theme presets. t = 0 → light (pale, fits the cream theme), t = 1 → dark
// (warm globe with glowing city lights). We tween between them so flipping the
// theme animates the lights "turning on".
const LIGHT = {
  dark: 0.55, // a little shading so it reads as a soft 3D globe, not a flat ball
  base: [0.86, 0.55, 0.36] as Vec3, // soft terracotta, light + on-theme
  marker: [0.62, 0.3, 0.14] as Vec3,
  glow: [0.99, 0.92, 0.85] as Vec3, // warm cream rim
  mapBrightness: 2.6,
  mapBaseBrightness: 0.42,
  diffuse: 1.0,
};
const DARK = {
  dark: 1,
  base: [0.45, 0.26, 0.14] as Vec3, // warm ember land
  marker: [1.0, 0.5, 0.16] as Vec3, // bright amber city lights
  glow: [0.55, 0.3, 0.15] as Vec3,
  mapBrightness: 5.5, // lit hemisphere glows
  mapBaseBrightness: 0.05,
  diffuse: 1.2,
};

// A scattering of cities so the dark side reads as a lit-up globe.
const markers: { location: [number, number]; size: number }[] = [
  { location: [40.71, -74.0], size: 0.05 }, // New York
  { location: [34.05, -118.24], size: 0.045 }, // Los Angeles
  { location: [37.77, -122.41], size: 0.04 }, // San Francisco
  { location: [51.5, -0.12], size: 0.045 }, // London
  { location: [48.85, 2.35], size: 0.04 }, // Paris
  { location: [55.75, 37.61], size: 0.04 }, // Moscow
  { location: [35.68, 139.69], size: 0.05 }, // Tokyo
  { location: [31.23, 121.47], size: 0.045 }, // Shanghai
  { location: [1.35, 103.81], size: 0.04 }, // Singapore
  { location: [28.61, 77.2], size: 0.045 }, // Delhi
  { location: [19.07, 72.87], size: 0.04 }, // Mumbai
  { location: [25.2, 55.27], size: 0.04 }, // Dubai
  { location: [30.04, 31.23], size: 0.038 }, // Cairo
  { location: [-26.2, 28.04], size: 0.038 }, // Johannesburg
  { location: [-23.55, -46.63], size: 0.045 }, // São Paulo
  { location: [-33.86, 151.21], size: 0.04 }, // Sydney
];

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const lerp3 = (a: Vec3, b: Vec3, t: number): Vec3 => [
  lerp(a[0], b[0], t),
  lerp(a[1], b[1], t),
  lerp(a[2], b[2], t),
];
const clamp = (n: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, n));

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

    // Mutable animation state (survives globe rebuilds on resize).
    let phi = 4.2; // start over the Atlantic, like the reference
    let theta = 0.18;
    let tTheme = isDark() ? 1 : 0; // eased theme position
    let tTarget = tTheme;

    // Pointer drag → spin in any direction.
    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let spin = 0.0035; // idle auto-rotation

    const onDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      canvas.setPointerCapture(e.pointerId);
      canvas.style.cursor = "grabbing";
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      phi += (e.clientX - lastX) * 0.005;
      theta = clamp(theta + (e.clientY - lastY) * 0.005, -1.1, 1.1);
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try {
        canvas.releasePointerCapture(e.pointerId);
      } catch {}
      canvas.style.cursor = "grab";
    };
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointerleave", onUp);

    // React to theme toggles.
    const themeObserver = new MutationObserver(() => {
      tTarget = isDark() ? 1 : 0;
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    let globe: ReturnType<typeof createGlobe> | null = null;
    let raf = 0;

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      const size = Math.max(1, Math.round(rect.width));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      const options: COBEOptions = {
        devicePixelRatio: dpr,
        width: size * dpr,
        height: size * dpr,
        phi,
        theta,
        dark: tTheme,
        diffuse: lerp(LIGHT.diffuse, DARK.diffuse, tTheme),
        mapSamples: 16000,
        mapBrightness: lerp(LIGHT.mapBrightness, DARK.mapBrightness, tTheme),
        mapBaseBrightness: lerp(LIGHT.mapBaseBrightness, DARK.mapBaseBrightness, tTheme),
        baseColor: lerp3(LIGHT.base, DARK.base, tTheme),
        markerColor: lerp3(LIGHT.marker, DARK.marker, tTheme),
        glowColor: lerp3(LIGHT.glow, DARK.glow, tTheme),
        markers,
        opacity: 0.95,
        onRender: (state) => {
          // ease theme transition → lights fade on/off
          tTheme += (tTarget - tTheme) * 0.06;
          if (!dragging && !reduced) phi += spin;

          state.phi = phi;
          state.theta = theta;
          state.dark = tTheme;
          state.diffuse = lerp(LIGHT.diffuse, DARK.diffuse, tTheme);
          state.mapBrightness = lerp(LIGHT.mapBrightness, DARK.mapBrightness, tTheme);
          state.mapBaseBrightness = lerp(
            LIGHT.mapBaseBrightness,
            DARK.mapBaseBrightness,
            tTheme
          );
          state.baseColor = lerp3(LIGHT.base, DARK.base, tTheme);
          state.markerColor = lerp3(LIGHT.marker, DARK.marker, tTheme);
          state.glowColor = lerp3(LIGHT.glow, DARK.glow, tTheme);
        },
      };

      globe = createGlobe(canvas, options);
    };

    build();
    canvas.style.cursor = "grab";

    // Rebuild on resize (cobe bakes size in at creation).
    let resizeTimer = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        globe?.destroy();
        build();
      }, 150);
    });
    ro.observe(canvas);

    // Fade the canvas in once mounted.
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      ro.disconnect();
      themeObserver.disconnect();
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointerleave", onUp);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="hero-globe-stage" aria-hidden="true">
      <canvas ref={canvasRef} className="hero-globe" />
    </div>
  );
}
