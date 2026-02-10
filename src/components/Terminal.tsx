import React, { useState, useEffect, useRef, useMemo } from 'react';
import { Terminal as TerminalIcon, X, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Theme = 'classic' | 'midnight';

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
  const [theme, setTheme] = useState<Theme>('classic');
  const [history, setHistory] = useState<(string | React.ReactNode)[]>([
    "Welcome to ABAYO Moise's secure environment.",
    "",
    "Type 'help' to see available commands."
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isMinimized, setIsMinimized] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const themeConfig = {
    classic: {
      bg: "bg-[#0c0c0c]",
      border: "border-white/10",
      headerBg: "bg-[#1e1e1e]",
      headerBorder: "border-white/5",
      headerText: "text-white/80",
      bodyText: "text-white/90",
      promptUser: "text-green-500",
      promptDir: "text-blue-500",
      cursor: "#22c55e",
      scrollbar: "#333",
      scrollbarHover: "#444"
    },
    midnight: {
      bg: "bg-[#020617]",
      border: "border-cyan-500/20",
      headerBg: "bg-[#0f172a]",
      headerBorder: "border-cyan-500/10",
      headerText: "text-cyan-400/90",
      bodyText: "text-cyan-50/90",
      promptUser: "text-cyan-400",
      promptDir: "text-indigo-400",
      cursor: "#22d3ee",
      scrollbar: "#1e293b",
      scrollbarHover: "#334155"
    }
  };

  const currentTheme = themeConfig[theme];

  const prompt = (
    <span className="flex items-center gap-1 shrink-0">
      <span className={cn("font-bold font-mono", currentTheme.promptUser)}>moise@portfolio</span>
      <span className={currentTheme.bodyText}>:</span>
      <span className={cn("font-bold font-mono", currentTheme.promptDir)}>~</span>
      <span className={currentTheme.bodyText}>$</span>
    </span>
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history, input]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const commands: Record<string, (args?: string[]) => void> = {
    help: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>help</span></div>,
        "Available commands:",
        "  help           - Show this help message",
        "  about          - Learn more about me",
        "  skills         - See my technical stack",
        "  projects       - View my work",
        "  contact        - Get my contact info",
        "  theme [name]   - Switch theme (classic, midnight)",
        "  clear          - Clear the terminal history",
        "  exit           - Close the terminal session"
      ]);
    },
    about: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>about</span></div>,
        "I am ABAYO Moise, a Full-Stack Developer & Cybersecurity Enthusiast.",
        "I specialize in Java, Spring Boot, and React, with a strong focus on building secure and scalable applications."
      ]);
    },
    skills: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>skills</span></div>,
        "Frontend: React, TypeScript, Next.js, Tailwind CSS",
        "Backend: Node.js, Express, NestJS, Spring Boot, Java",
        "Mobile: React Native, Swift",
        "Database: PostgreSQL, MongoDB, MySQL",
        "Security: Ethical Hacking, Penetration Testing"
      ]);
    },
    projects: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>projects</span></div>,
        "1. PublicPulse - Government transparency platform",
        "2. E-commerce API - Scalable backend for online stores",
        "3. SnapLink - Modern URL shortener",
        "4. Lumina - Agrotech logistics platform",
        "5. SupaMenu - Food ordering iOS app"
      ]);
    },
    contact: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>contact</span></div>,
        "Email: abayomoise950@gmail.com",
        "LinkedIn: linkedin.com/in/abayo-moise-3568b7377",
        "GitHub: github.com/A2kmoise"
      ]);
    },
    theme: (args) => {
      const newTheme = args?.[0] as Theme;
      if (newTheme === 'classic' || newTheme === 'midnight') {
        setTheme(newTheme);
        setHistory(prev => [
          ...prev,
          <div className="flex gap-2 font-mono items-center">{prompt} <span>theme {newTheme}</span></div>,
          `Theme changed to ${newTheme}.`
        ]);
      } else {
        setHistory(prev => [
          ...prev,
          <div className="flex gap-2 font-mono items-center">{prompt} <span>theme {args?.[0] || ""}</span></div>,
          "Usage: theme [classic | midnight]"
        ]);
      }
    },
    clear: () => {
      setHistory([
        "Terminal cleared.",
        "Type 'help' for available commands."
      ]);
    },
    exit: () => {
      onClose();
    }
  };

  const commandKeys = useMemo(() => Object.keys(commands), [commands]);

  const suggestion = useMemo(() => {
    if (!input) return "";
    const match = commandKeys.find(cmd => cmd.startsWith(input.toLowerCase()));
    return match ? match.slice(input.length) : "";
  }, [input, commandKeys]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = input.trim();
    const parts = cleanInput.split(/\s+/);
    const cmdKey = parts[0].toLowerCase();
    const args = parts.slice(1);

    if (cmdKey === "") {
      setHistory(prev => [...prev, prompt]);
      return;
    }

    // Add to command history
    if (cmdHistory[cmdHistory.length - 1] !== cleanInput) {
      setCmdHistory(prev => [...prev, cleanInput]);
    }
    setHistoryIndex(-1);

    if (commands[cmdKey]) {
      commands[cmdKey](args);
    } else {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>{input}</span></div>,
        `Command not found: ${cmdKey}. Type 'help' for assistance.`
      ]);
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;

      const newIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;
      if (newIndex >= cmdHistory.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(cmdHistory[newIndex]);
      }
    } else if ((e.key === 'Tab' || e.key === 'ArrowRight') && suggestion) {
      e.preventDefault();
      setInput(input + suggestion);
    }
  };

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={cn(
        "fixed bottom-24 right-6 z-50 transition-all duration-500 ease-in-out",
        isMinimized ? "w-64 h-12" : "w-[90vw] max-w-2xl h-[450px]"
      )}
      onClick={handleClick}
    >
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background-color: ${currentTheme.cursor};
          margin-left: 2px;
          animation: blink 1s step-end infinite;
          vertical-align: middle;
        }
        .terminal-input-transparent {
          caret-color: transparent !important;
          outline: none !important;
          border: none !important;
          box-shadow: none !important;
          background: transparent !important;
          color: transparent !important;
        }
        .terminal-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .terminal-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb {
          background: ${currentTheme.scrollbar};
          border-radius: 10px;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: ${currentTheme.scrollbarHover};
        }
      `}</style>

      <div className={cn("shadow-2xl flex flex-col h-full overflow-hidden rounded-lg font-mono border", currentTheme.bg, currentTheme.border)}>
        {/* Terminal Header */}
        <div className={cn("px-4 py-2 flex items-center justify-between select-none border-b", currentTheme.headerBg, currentTheme.headerBorder)}>
          <div className="flex items-center gap-2">
            <TerminalIcon className={cn("w-4 h-4", currentTheme.headerText)} />
            <span className={cn("text-sm font-mono tracking-tight", currentTheme.headerText)}>
              moise@portfolio: ~
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            >
              {isMinimized ? <Maximize2 className={cn("w-3 h-3", currentTheme.headerText)} /> : <Minimize2 className={cn("w-3 h-3", currentTheme.headerText)} />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-500/80 transition-colors group"
            >
              <X className={cn("w-3 h-3 group-hover:text-white", currentTheme.headerText)} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        {!isMinimized && (
          <div
            ref={scrollRef}
            className={cn("flex-1 p-5 font-mono text-sm overflow-y-auto terminal-scrollbar", currentTheme.bodyText)}
          >
            <div className="space-y-1.5">
              {history.map((line, i) => (
                <div key={i} className="whitespace-pre-wrap leading-relaxed break-all">
                  {line}
                </div>
              ))}

              {/* Inline Input area */}
              <form onSubmit={handleCommand} className="flex items-start gap-2">
                {prompt}
                <div className="flex-1 relative flex items-center flex-wrap">
                  <span className={cn("whitespace-pre-wrap break-all", currentTheme.bodyText)}>
                    {input}
                    {suggestion && <span className="opacity-40">{suggestion}</span>}
                  </span>
                  <div className="terminal-cursor" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="absolute inset-0 w-full terminal-input-transparent"
                    autoFocus
                    spellCheck={false}
                    autoComplete="off"
                  />
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;
