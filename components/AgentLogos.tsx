import Image from "next/image";
import TerminalDemo from "./TerminalDemo";

const agents = [
  { name: "Claude Code", logo: "/claude.svg", width: 120, height: 40 },
  { name: "Gemini", logo: "/gemini.png", width: 100, height: 40 },
  { name: "OpenClaw", logo: "/openclaw.png", width: 100, height: 40 },
  { name: "OpenCode", logo: "/opencode.svg", width: 120, height: 40 },
];

export default function AgentLogos() {
  return (
    <section className="py-24 px-6 border-b border-border">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          The swiss army knife for containment!
        </h2>

        <TerminalDemo />

        <h3 className="text-3xl md:text-4xl font-bold text-center mt-16 mb-8">
          All Major AI Agent Apps Supported
        </h3>

        <div className="flex flex-wrap justify-center gap-4">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="inline-flex items-center gap-4 px-6 py-4 bg-gray-800/80 border border-gray-700 rounded-full hover:border-accent/50 hover:bg-gray-700/80 transition-all group"
            >
              <Image
                src={agent.logo}
                alt={agent.name}
                width={agent.width}
                height={agent.height}
                className="h-6 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-base font-medium text-gray-300 group-hover:text-white transition-colors">
                {agent.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
