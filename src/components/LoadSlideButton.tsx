import React, { useState } from 'react';

interface LoadSlideButtonProps {
  /** Name of the slide to navigate to (must match one of the activeSlide values). */
  targetSlide: string;
  /** Delay in milliseconds before navigation occurs after the button is clicked. Default 2000ms. */
  delayMs?: number;
  /** Function from the parent component to change the active slide. */
  setActiveSlide: (slide: string) => void;
  /** Optional custom label for the button. */
  label?: string;
}

/**
 * A tiny button that shows a spinner while waiting, then automatically changes the slide.
 * Place it on any slide (home, about, education, etc.). It follows the existing design system
 * (accent colour, rounded‑xl, glass‑morphism background).
 */
export const LoadSlideButton: React.FC<LoadSlideButtonProps> = ({
  targetSlide,
  delayMs = 2000,
  setActiveSlide,
  label = 'Load Next Slide',
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    if (isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setActiveSlide(targetSlide);
      setIsLoading(false);
    }, delayMs);
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[var(--accent)] text-[var(--foreground)] text-xs md:text-sm font-semibold rounded-xl transition-all shadow-sm hover:bg-[var(--accent-hover)] disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {isLoading && (
        <svg
          className="w-4 h-4 animate-spin"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
          <path d="M22 12a10 10 0 0 1-10 10" />
        </svg>
      )}
      {label}
    </button>
  );
};
