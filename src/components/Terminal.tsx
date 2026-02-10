import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, ChevronRight, Minimize2, Maximize2 } from 'lucide-react';
import { cn } from "@/lib/utils";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Terminal: React.FC<TerminalProps> = ({ isOpen, onClose }) => {
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

  const prompt = (
    <span className="flex items-center gap-1 shrink-0">
      <span className="text-green-500 font-bold font-mono">moise@portfolio</span>
      <span className="text-white">:</span>
      <span className="text-blue-500 font-bold font-mono">~</span>
      <span className="text-white">$</span>
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

  const commands: Record<string, () => void> = {
    help: () => {
      setHistory(prev => [
        ...prev,
        <div className="flex gap-2 font-mono items-center">{prompt} <span>help</span></div>,
        "Available commands:",
        "  help     - Show this help message",
        "  about    - Learn more about me",
        "  skills   - See my technical stack",
        "  projects - View my work",
        "  contact  - Get my contact info",
        "  clear    - Clear the terminal history",
        "  exit     - Close the terminal session"
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

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim();
    const cmdKey = cmd.toLowerCase();

    if (cmd === "") {
      setHistory(prev => [...prev, prompt]);
      return;
    }

    // Add to command history
    if (cmdHistory[cmdHistory.length - 1] !== cmd) {
      setCmdHistory(prev => [...prev, cmd]);
    }
    setHistoryIndex(-1);

    if (commands[cmdKey]) {
      commands[cmdKey]();
    } else {
      setHistory(prev => [...prev, <div className="flex gap-2 font-mono items-center">{prompt} <span>{input}</span></div>, `Command not found: ${cmdKey}. Type 'help' for assistance.`]);
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
          background-color: #22c55e;
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
          background: #333;
          border-radius: 10px;
        }
        .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #444;
        }
      `}</style>

      <div className="bg-[#0c0c0c] border border-white/10 shadow-2xl flex flex-col h-full overflow-hidden rounded-lg font-mono">
        {/* Terminal Header - Classic Dark Style */}
        <div className="bg-[#1e1e1e] px-4 py-2 flex items-center justify-between select-none border-b border-white/5">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-white/60" />
            <span className="text-white/80 text-sm font-mono tracking-tight">
              moise@portfolio: ~
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/5 transition-colors"
            >
              {isMinimized ? <Maximize2 className="w-3 h-3 text-white/50" /> : <Minimize2 className="w-3 h-3 text-white/50" />}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-500/80 transition-colors group"
            >
              <X className="w-3 h-3 text-white/50 group-hover:text-white" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        {!isMinimized && (
          <div
            ref={scrollRef}
            className="flex-1 p-5 font-mono text-sm overflow-y-auto text-white/90 terminal-scrollbar"
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
                  <span className="whitespace-pre-wrap break-all text-white/90">{input}</span>
                  <span className="terminal-cursor" />
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
