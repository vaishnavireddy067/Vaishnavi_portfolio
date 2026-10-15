"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Layers, Server, Database, Brain, ArrowRight, CheckCircle2, 
  ExternalLink, Sparkles, Cpu, ShieldCheck, Zap
} from "lucide-react";
import { PROJECTS, Project, ArchitectureTier } from "../data/projects";

interface Props {
  initialProjectName?: string;
  compact?: boolean;
}

type TierKey = "frontend" | "backend" | "database" | "aiModel";

const TIERS: { key: TierKey; title: string; subtitle: string; icon: React.ReactNode; color: string; bg: string }[] = [
  {
    key: "frontend",
    title: "Frontend Tier",
    subtitle: "Client & UI",
    icon: <Layers className="w-5 h-5 text-cyan-400" />,
    color: "from-cyan-500 to-blue-500",
    bg: "rgba(6, 182, 212, 0.12)",
  },
  {
    key: "backend",
    title: "Backend Tier",
    subtitle: "API & Validation",
    icon: <Server className="w-5 h-5 text-indigo-400" />,
    color: "from-indigo-500 to-purple-500",
    bg: "rgba(99, 102, 241, 0.12)",
  },
  {
    key: "database",
    title: "Database Tier",
    subtitle: "Cache & Storage",
    icon: <Database className="w-5 h-5 text-purple-400" />,
    color: "from-purple-500 to-pink-500",
    bg: "rgba(168, 85, 247, 0.12)",
  },
  {
    key: "aiModel",
    title: "AI & ML Model",
    subtitle: "Inference & Agents",
    icon: <Brain className="w-5 h-5 text-emerald-400" />,
    color: "from-emerald-500 to-teal-500",
    bg: "rgba(16, 185, 129, 0.12)",
  },
];

export default function InteractiveArchitectureExplorer({ initialProjectName, compact = false }: Props) {
  const [selectedProjectName, setSelectedProjectName] = useState<string>(
    initialProjectName || PROJECTS[0]?.name || "QIVORA — Adaptive Cognitive Assessment & Procedural Game Platform"
  );
  const [selectedTier, setSelectedTier] = useState<TierKey>("frontend");
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentProject = PROJECTS.find((p) => p.name === selectedProjectName) || PROJECTS[0];
  const arch = currentProject.architecture;

  if (!arch) return null;

  const currentTierData: ArchitectureTier = arch[selectedTier];

  return (
    <div className="w-full space-y-6">
      {/* Project Selector Tabs */}
      {!initialProjectName && (
        <div className="flex flex-wrap items-center justify-center gap-2 pb-2">
          {PROJECTS.map((p) => {
            const isSelected = p.name === currentProject.name;
            const shortName = p.name.split("–")[0].split("—")[0].split("|")[0].trim();
            return (
              <button
                key={p.name}
                onClick={() => {
                  setSelectedProjectName(p.name);
                  setActiveStep(0);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs md:text-sm font-semibold transition-all duration-300 border flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-md shadow-blue-500/20 scale-[1.02]"
                    : "bg-[var(--card-bg)] text-[var(--text-muted)] border-[var(--card-border)] hover:text-[var(--foreground)] hover:border-[var(--card-hover-border)]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 opacity-75" />
                <span>{shortName}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Interactive Board */}
      <div className="bg-[var(--card-bg)]/80 border border-[var(--card-border)] rounded-3xl p-5 sm:p-7 shadow-xl backdrop-blur-md">
        {/* Header with Project info */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Interactive Architecture Explorer
              </span>
              <span className="text-xs text-[var(--text-muted)] font-code">Full-Stack &amp; AI Flow</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[var(--foreground)] font-heading mt-1.5">
              {currentProject.name}
            </h3>
          </div>
          {currentProject.demo && (
            <a
              href={currentProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-blue-600/15 text-blue-400 hover:bg-blue-600 hover:text-white transition-all border border-blue-500/30 self-start sm:self-center"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Launch Live</span>
            </a>
          )}
        </div>

        {/* 4 Interactive Connected Architecture Nodes */}
        <div className="pt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] mb-3 font-code">
            1. Click Any Tier to Inspect Architecture:
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative">
            {TIERS.map((tier, idx) => {
              const isSelected = selectedTier === tier.key;
              const tierData = arch[tier.key];

              return (
                <div key={tier.key} className="relative flex flex-col">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedTier(tier.key)}
                    className={`relative p-4 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between h-full min-h-[110px] ${
                      isSelected
                        ? "glass-card gradient-border border-[var(--accent)] shadow-lg shadow-indigo-500/15 scale-[1.02]"
                        : "bg-[var(--card-bg)]/60 border-[var(--card-border)] hover:border-[var(--card-hover-border)] hover:bg-[var(--card-bg)]"
                    }`}
                    style={{
                      background: isSelected ? tier.bg : undefined,
                    }}
                  >
                    <div className="flex items-center justify-between w-full mb-2">
                      <div className="p-2 rounded-xl bg-black/40 border border-white/10 shadow-inner">
                        {tier.icon}
                      </div>
                      <span className="text-[10px] font-code font-bold px-2 py-0.5 rounded-full bg-[var(--background)]/80 text-[var(--text-muted)] border border-[var(--card-border)]">
                        Tier 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] font-heading leading-tight">
                        {tier.title}
                      </div>
                      <div className="text-[11px] text-[var(--text-muted)] font-body mt-0.5 line-clamp-1">
                        {tierData.name}
                      </div>
                    </div>

                    {isSelected && (
                      <motion.div
                        layoutId="active-tier-glow"
                        className={`absolute -bottom-1 left-4 right-4 h-1 rounded-full bg-gradient-to-r ${tier.color}`}
                      />
                    )}
                  </motion.button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Tier Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTier}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-5 p-5 rounded-2xl bg-black/30 border border-[var(--card-border)] space-y-4 text-left"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-500/10 text-[var(--accent)] border border-blue-500/20">
                  {TIERS.find((t) => t.key === selectedTier)?.icon}
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-[var(--foreground)] font-heading">
                    {currentTierData.name}
                  </h4>
                  <p className="text-xs text-[var(--accent)] font-code">
                    {TIERS.find((t) => t.key === selectedTier)?.title} • Active Inspection
                  </p>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5">
                {currentTierData.tech.map((t) => (
                  <span
                    key={t}
                    className="skill-badge text-[11px] py-0.5 px-2.5 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Role / Responsibility */}
            <div className="text-sm text-[var(--text-muted)] leading-relaxed font-body bg-[var(--card-bg)]/40 p-3.5 rounded-xl border border-[var(--border-subtle)]">
              <span className="font-semibold text-[var(--foreground)]">Role &amp; Pipeline Execution: </span>
              {currentTierData.role}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* End-to-End Data Flow Pipeline Stepper */}
        {arch.dataFlow && arch.dataFlow.length > 0 && (
          <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] text-left">
            <div className="flex items-center justify-between mb-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] font-code flex items-center gap-2">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>2. End-to-End Request &amp; Data Pipeline Flow:</span>
              </div>
              <span className="text-[11px] text-[var(--text-muted)] font-code">
                Step {activeStep + 1} of {arch.dataFlow.length}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-2.5">
              {arch.dataFlow.map((step, idx) => {
                const isActive = idx === activeStep;
                const isPassed = idx < activeStep;

                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    className={`p-3 rounded-xl text-left transition-all duration-200 border text-xs flex flex-col justify-between gap-2 ${
                      isActive
                        ? "bg-blue-600/20 border-blue-500/60 shadow-md shadow-blue-500/10"
                        : isPassed
                        ? "bg-emerald-500/10 border-emerald-500/30 text-[var(--foreground)]"
                        : "bg-[var(--card-bg)]/40 border-[var(--card-border)] text-[var(--text-muted)] hover:border-[var(--card-hover-border)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold font-code px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : isPassed
                          ? "bg-emerald-500 text-white"
                          : "bg-white/10 text-white/70"
                      }`}>
                        Stage {idx + 1}
                      </span>
                      {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <p className={`line-clamp-3 leading-relaxed font-body ${isActive ? "text-[var(--foreground)] font-semibold" : ""}`}>
                      {step}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
