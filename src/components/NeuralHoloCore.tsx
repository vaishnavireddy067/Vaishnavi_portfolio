"use client";

import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Cpu, Activity } from "lucide-react";

interface NeuralHoloCoreProps {
  onLaunch: () => void;
}

interface Point3D {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  color: string;
}

export default function NeuralHoloCore({ onLaunch }: NeuralHoloCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const width = (canvas.width = 460);
    const height = (canvas.height = 460);
    const radius = 150;
    const numPoints = 140;

    // Generate points on a sphere (Fibonacci sphere distribution)
    const points: Point3D[] = [];
    const colors = ["#818cf8", "#a78bfa", "#38bdf8", "#c084fc", "#60a5fa"];

    const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
    for (let i = 0; i < numPoints; i++) {
      const y = 1 - (i / (numPoints - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        baseX: x * radius,
        baseY: y * radius,
        baseZ: z * radius,
        color: colors[i % colors.length]
      });
    }

    let rotX = 0;
    let rotY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse damping
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const speedMultiplier = isHovered ? 2.2 : 1;
      rotY += 0.006 * speedMultiplier + mouseRef.current.x * 0.0003;
      rotX += 0.003 * speedMultiplier + mouseRef.current.y * 0.0003;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Central Pulsing Glow Core
      const glowGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        radius * 1.1
      );
      glowGrad.addColorStop(0, "rgba(99, 102, 241, 0.25)");
      glowGrad.addColorStop(0.5, "rgba(139, 92, 246, 0.12)");
      glowGrad.addColorStop(1, "rgba(7, 11, 20, 0)");
      ctx.fillStyle = glowGrad;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, radius * 1.1, 0, Math.PI * 2);
      ctx.fill();

      // Project 3D points
      const projected = points.map((p) => {
        let x1 = p.baseX * cosY - p.baseZ * sinY;
        let z1 = p.baseZ * cosY + p.baseX * sinY;

        let y1 = p.baseY * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.baseY * sinX;

        const fov = 380;
        const scale = fov / (fov + z2);
        const x2D = x1 * scale + width / 2;
        const y2D = y1 * scale + height / 2;

        return { x: x2D, y: y2D, z: z2, scale, color: p.color };
      });

      projected.sort((a, b) => a.z - b.z);

      // Draw Synaptic Connecting Lines
      ctx.lineWidth = 0.75;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 46) {
            const alpha = (1 - dist / 46) * 0.35 * Math.max(0, (projected[i].scale + projected[j].scale) / 2);
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Glowing Nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const pointRadius = Math.max(1, 2.2 * p.scale);
        const alpha = Math.max(0.2, (p.z + radius) / (2 * radius));

        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, pointRadius, 0, Math.PI * 2);
        ctx.fill();

        if (p.z > 50) {
          ctx.fillStyle = "#ffffff";
          ctx.globalAlpha = 0.8;
          ctx.beginPath();
          ctx.arc(p.x, p.y, pointRadius * 0.45, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleCanvasMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.targetX = e.clientX - rect.left - width / 2;
      mouseRef.current.targetY = e.clientY - rect.top - height / 2;
    };

    canvas.addEventListener("mousemove", handleCanvasMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener("mousemove", handleCanvasMouseMove);
    };
  }, [isHovered]);

  return (
    <div 
      className="relative flex flex-col items-center justify-center cursor-pointer select-none group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseRef.current.targetX = 0;
        mouseRef.current.targetY = 0;
      }}
      onClick={onLaunch}
    >
      {/* Top Floating Telemetry Badge */}
      <div className="absolute -top-3 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-[#0d1424]/90 backdrop-blur-md text-[10px] font-mono tracking-widest text-indigo-300 flex items-center gap-2 shadow-lg z-20">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
        <span>NEURAL ENGINE ACTIVE // 60 FPS</span>
      </div>

      {/* Rotating Outer Tech Rings */}
      <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-indigo-500/20 animate-[spin_40s_linear_infinite] pointer-events-none" />
      <div className="absolute w-[490px] h-[490px] rounded-full border border-violet-500/10 animate-[spin_60s_linear_infinite_reverse] pointer-events-none" />

      {/* The 3D Interactive Canvas */}
      <div className="relative w-[460px] h-[460px] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        <canvas ref={canvasRef} className="w-full h-full" />

        {/* Center Holographic Core Pulse Marker */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full border border-indigo-400/40 bg-indigo-500/15 backdrop-blur-sm flex items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.5)]">
            <Cpu className="w-6 h-6 text-indigo-300 animate-pulse" />
          </div>
        </div>

        {/* Bottom Floating Interaction Prompt */}
        <div className="absolute bottom-6 px-4 py-2 rounded-xl border border-indigo-500/40 bg-[#070b14]/90 backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-mono text-[#f8fafc] group-hover:border-indigo-400 group-hover:bg-indigo-950/80 transition-all">
          <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
          <span className="font-semibold tracking-wide">CLICK CORE TO LAUNCH PORTFOLIO</span>
          <span className="text-indigo-400 font-bold">↗</span>
        </div>
      </div>

      {/* Bottom Live System Telemetry Strip */}
      <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest text-[#94a3b8] mt-1 uppercase">
        <span className="flex items-center gap-1.5 text-indigo-400">
          <Activity className="w-3 h-3 text-indigo-400" />
          TENSORS RUNNING
        </span>
        <span className="text-[#334155]">•</span>
        <span>LATENCY: 12ms</span>
        <span className="text-[#334155]">•</span>
        <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
      </div>
    </div>
  );
}
