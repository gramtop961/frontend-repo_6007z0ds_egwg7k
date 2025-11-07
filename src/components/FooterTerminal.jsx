import React, { useState } from 'react';

const FooterTerminal = () => {
  const [input, setInput] = useState('ping ubai-developer-server.com');
  const [responses, setResponses] = useState([
    'Reply from ubai@email.com: Contact available. Send Message.',
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setResponses((prev) => [
      `> ${input.trim()}`,
      'Reply from ubai@email.com: Contact available. Send Message.',
      ...prev,
    ]);
    setInput('');
  };

  return (
    <footer className="w-full bg-black text-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="rounded-xl border border-white/10 bg-[#0c0c0c] p-4">
          <div className="mb-3 text-xs text-neutral-400">Terminal</div>
          <div className="mb-4 h-40 w-full overflow-auto rounded-md bg-black p-3 font-mono text-xs leading-relaxed text-green-400">
            {responses.map((r, i) => (
              <div key={i}>{r}</div>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2">
            <span className="select-none font-mono text-emerald-400">$</span>
            <input
              className="flex-1 rounded-md border border-emerald-500/30 bg-[#0b0f0b] p-2 font-mono text-sm text-emerald-200 outline-none ring-0 placeholder:text-emerald-300/40"
              placeholder="ping ubai-developer-server.com"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="rounded-md bg-emerald-400 px-3 py-2 text-sm font-medium text-black"
            >
              Run
            </button>
          </form>
        </div>
        <div className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Ubai — The Code Alchemist's Lab
        </div>
      </div>
    </footer>
  );
};

export default FooterTerminal;
