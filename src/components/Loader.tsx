import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface LoaderProps {
  onFinished?: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    // Disable body scrolling while loading
    document.body.style.overflow = 'hidden';
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        
        // Add random progress step for a natural look
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(prev + step, 100);
        return next;
      });
    }, 100);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const fadeTimeout = setTimeout(() => {
        setIsFadingOut(true);
        const finishTimeout = setTimeout(() => {
          setIsMounted(false);
          if (onFinished) onFinished();
        }, 800); // matches the transition duration in CSS
        return () => clearTimeout(finishTimeout);
      }, 500); // pause briefly at 100% to let the user see it complete
      return () => clearTimeout(fadeTimeout);
    }
  }, [progress, onFinished]);

  if (!isMounted) return null;

  return (
    <StyledWrapper className={isFadingOut ? 'fade-out' : ''}>
      <div className="vignette" />
      
      <div className="content-container">
        {/* Core aesthetic loader */}
        <div className="loader-container">
          <div className="loader">
            <div className="cell d-0" />
            <div className="cell d-1" />
            <div className="cell d-2" />
            <div className="cell d-1" />
            <div className="cell d-2" />
            <div className="cell d-2" />
            <div className="cell d-3" />
            <div className="cell d-3" />
            <div className="cell d-4" />
          </div>
        </div>

        {/* Brand System Title */}
        <div className="brand-header">
          <span className="cursor-char">&gt;</span> SYSTEM.M_
        </div>

        {/* Progress Bar and text */}
        <div className="progress-section">
          <div className="progress-bar-wrapper">
            <div className="progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="percentage-text">
            {progress.toString().padStart(3, '0')}% LOADED
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: hsl(var(--background));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.8s;
  
  &.fade-out {
    opacity: 0;
    visibility: hidden;
  }

  /* CRT Scanlines Overlay */
  &::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%);
    background-size: 100% 4px;
    z-index: 10002;
    pointer-events: none;
    opacity: 0.4;
  }

  .vignette {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.8) 100%);
    pointer-events: none;
    z-index: 10001;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    max-width: 400px;
    z-index: 10000;
  }

  .loader-container {
    margin-bottom: 2rem;
    filter: drop-shadow(0 0 15px hsl(var(--primary) / 0.5));
  }

  .loader {
    --cell-size: 24px;
    --cell-spacing: 3px;
    --cells: 3;
    --total-size: calc(var(--cells) * (var(--cell-size) + 2 * var(--cell-spacing)));
    display: flex;
    flex-wrap: wrap;
    width: var(--total-size);
    height: var(--total-size);
  }

  .cell {
    flex: 0 0 var(--cell-size);
    margin: var(--cell-spacing);
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 2px;
    animation: 1.6s ripple ease infinite;
    border: 1px solid hsl(var(--primary) / 0.3);
  }

  .cell.d-1 {
    animation-delay: 150ms;
  }

  .cell.d-2 {
    animation-delay: 300ms;
  }

  .cell.d-3 {
    animation-delay: 450ms;
  }

  .cell.d-4 {
    animation-delay: 600ms;
  }

  /* Colors defined relative to site's primary theme color */
  .cell:nth-child(1) { --cell-color: hsl(var(--primary) / 0.2); }
  .cell:nth-child(2) { --cell-color: hsl(var(--primary) / 0.35); }
  .cell:nth-child(3) { --cell-color: hsl(var(--primary) / 0.5); }
  .cell:nth-child(4) { --cell-color: hsl(var(--primary) / 0.35); }
  .cell:nth-child(5) { --cell-color: hsl(var(--primary) / 0.6); }
  .cell:nth-child(6) { --cell-color: hsl(var(--primary) / 0.75); }
  .cell:nth-child(7) { --cell-color: hsl(var(--primary) / 0.5); }
  .cell:nth-child(8) { --cell-color: hsl(var(--primary) / 0.85); }
  .cell:nth-child(9) { --cell-color: hsl(var(--primary)); }

  @keyframes ripple {
    0%, 100% {
      background-color: transparent;
      box-shadow: none;
    }
    30% {
      background-color: var(--cell-color);
      box-shadow: 0 0 12px var(--cell-color);
      border-color: var(--cell-color);
    }
    60% {
      background-color: transparent;
      box-shadow: none;
    }
  }

  .brand-header {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 1.25rem;
    font-weight: 700;
    color: hsl(var(--primary));
    letter-spacing: 0.15em;
    margin-bottom: 1.5rem;
    text-shadow: 0 0 10px hsl(var(--primary) / 0.4);
    display: flex;
    align-items: center;
  }

  .cursor-char {
    animation: blink 1s step-end infinite;
    margin-right: 0.5rem;
  }

  @keyframes blink {
    from, to { color: transparent }
    50% { color: hsl(var(--primary)) }
  }

  .progress-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .progress-bar-wrapper {
    width: 100%;
    height: 4px;
    background-color: hsl(var(--secondary));
    border-radius: 2px;
    overflow: hidden;
    border: 1px solid hsl(var(--border));
    margin-bottom: 0.5rem;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }

  .progress-bar {
    height: 100%;
    background-color: hsl(var(--primary));
    box-shadow: 0 0 10px hsl(var(--primary) / 0.8);
    transition: width 0.1s ease-out;
  }

  .percentage-text {
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    font-size: 0.75rem;
    color: hsl(var(--primary) / 0.8);
    letter-spacing: 0.1em;
  }
`;

export default Loader;
