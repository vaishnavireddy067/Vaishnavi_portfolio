"use client";
import React, { useState, useRef, useEffect } from "react";
import { Download, FileText, File } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DownloadDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-5 py-2.5 bg-[var(--card-bg)] text-[var(--foreground)] text-xs md:text-sm font-semibold border border-[var(--card-border)] rounded-xl hover:bg-[var(--background)] hover:border-[var(--card-hover-border)] transition-all flex items-center gap-1.5 shadow-sm"
        aria-label="Download Options"
      >
        <Download className="w-4 h-4" />
        <span>Download</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full mt-2 left-0 w-40 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl shadow-xl overflow-hidden z-50 flex flex-col"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors border-b border-[var(--card-border)]/50"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 px-4 py-3 text-sm text-[var(--foreground)] hover:bg-[var(--background)] hover:text-[var(--accent)] transition-colors"
            >
              <File className="w-4 h-4" />
              CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DownloadDropdown;
