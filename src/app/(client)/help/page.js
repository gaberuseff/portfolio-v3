"use client";

import { 
  LuMail, 
  LuPhone, 
  LuSend, 
  LuExternalLink,
  LuGlobe
} from "react-icons/lu";

const channels = [
  {
    name: "Direct Email",
    value: "dev.gaber@gmail.com",
    icon: <LuMail className="size-5" />,
    iconBg: "bg-blue-500/10 text-blue-500 border-blue-500/10",
    url: "mailto:dev.gaber@gmail.com"
  },
  {
    name: "WhatsApp Chat",
    value: "+20 155 002 23440",
    icon: <LuPhone className="size-5" />,
    iconBg: "bg-emerald-500/10 text-emerald-500 border-emerald-500/10",
    url: "https://wa.me/201500223440"
  },
  {
    name: "GitHub Profile",
    value: "github.com/gaberuseff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    iconBg: "bg-zinc-500/10 text-zinc-600 dark:text-zinc-300 border-zinc-500/10",
    url: "https://github.com/gaberuseff"
  },
  {
    name: "LinkedIn Network",
    value: "linkedin.com/in/gaberuseff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    iconBg: "bg-sky-500/10 text-sky-500 border-sky-500/10",
    url: "https://linkedin.com/in/gaberuseff"
  },
  {
    name: "Facebook Profile",
    value: "facebook.com/gaberuseff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    iconBg: "bg-blue-600/10 text-blue-600 border-blue-600/10",
    url: "https://facebook.com/gaberuseff"
  },
  {
    name: "Twitter / X Profile",
    value: "@gaberuseff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-5">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    iconBg: "bg-neutral-500/10 text-foreground border-neutral-500/10",
    url: "https://x.com/gaberuseff"
  },
  {
    name: "Telegram Chat",
    value: "t.me/gaberuseff",
    icon: <LuSend className="size-5" />,
    iconBg: "bg-cyan-500/10 text-cyan-500 border-cyan-500/10",
    url: "https://t.me/gaberuseff"
  },
  {
    name: "Personal Portfolio",
    value: "gaberuseff.com",
    icon: <LuGlobe className="size-5" />,
    iconBg: "bg-purple-500/10 text-purple-500 border-purple-500/10",
    url: "https://gaberuseff.com"
  }
];

export default function ContactPage() {
  return (
    <div className="space-y-6 max-w-4xl mr-auto ml-0 text-left">
      {/* Premium Compact Left-Aligned Header */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold">Contact Gaber Usef</h1>
        <p className="text-xs sm:text-sm text-muted-foreground max-w-2xl leading-relaxed">
          Looking to collaborate, network, or just say hello? Reach out directly below, or connect with me across all major social media platforms under my unified username: <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-primary font-bold">@gaberuseff</code>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
        {channels.map((ch) => (
          <div 
            key={ch.name} 
            className="group relative border border-border/60 bg-card/60 backdrop-blur-md p-4 flex items-center justify-between overflow-hidden rounded-xl"
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className={`p-2.5 rounded-lg border border-border/40 shrink-0 transition-transform duration-300 group-hover:scale-105 ${ch.iconBg}`}>
                {ch.icon}
              </div>

              <div className="space-y-0.5 min-w-0">
                <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors duration-200 truncate">
                  {ch.name}
                </h3>
                <span className="block text-xs font-mono text-muted-foreground/80 truncate">
                  {ch.value}
                </span>
              </div>
            </div>

            <a 
              href={ch.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-muted/20 text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-all duration-300 cursor-pointer ml-3 shrink-0"
              title={ch.name}
            >
              <LuExternalLink className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
