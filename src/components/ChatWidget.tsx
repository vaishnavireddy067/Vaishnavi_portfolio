"use client";
import React, { useState } from "react";
import { X, Send, Bot, User } from "lucide-react";
import { PROJECTS } from "../data/projects";
import { SKILL_CATEGORIES } from "../data/skills";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages((prev) => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // Simple bot logic
    const lower = userMsg.toLowerCase();
    let reply = "I’m here to help! Ask me about my portfolio or projects.";
    
    if (lower.includes("project")) {
      const list = PROJECTS.map((p) => `- ${p.name}: ${p.desc}`).join("\n");
      reply = `Here are some projects I have built:\n${list}`;
    } else if (lower.includes("skill")) {
      const list = SKILL_CATEGORIES.map((c) => `${c.title}: ${c.skills.join(", ")}`).join("\n\n");
      reply = `Here are the skills Vaishnavi has:\n\n${list}`;
    }
    
    setMessages((prev) => [...prev, { role: "bot", text: reply }]);
  };

  return (
    <>
      {/* Floating button */}
      <button
        className="fixed bottom-4 right-4 z-50 flex items-center justify-center bg-[var(--accent)] text-white p-3.5 rounded-full shadow-lg hover:bg-[var(--accent)]/90 transition hover:scale-105"
        onClick={() => setOpen(true)}
        aria-label="Ask AI About Me"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-[var(--card-bg)] rounded-2xl w-full max-w-md max-h-[80vh] flex flex-col shadow-xl">
            <div className="flex items-center justify-between p-3 border-b border-[var(--card-border)]">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">AI Assistant</h3>
              <button onClick={() => setOpen(false)} className="p-1 hover:bg-[var(--background)] rounded-full">
                <X className="w-5 h-5 text-[var(--text-muted)]" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-xs rounded-xl p-2 text-sm ${msg.role === "user" ? "bg-[var(--accent)] text-white" : "bg-[var(--card-bg)] text-[var(--foreground)] border border-[var(--card-border)]"}`}
                  >
                    {msg.text.split("\n").map((line, idx) => (
                      <p key={idx} className="whitespace-pre-wrap">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-[var(--card-border)] flex gap-2">
              <input
                type="text"
                placeholder="Ask about me..."
                className="flex-1 px-3 py-2 rounded-xl border border-[var(--card-border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="p-2 bg-[var(--accent)] text-white rounded-xl hover:bg-[var(--accent)]/90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
