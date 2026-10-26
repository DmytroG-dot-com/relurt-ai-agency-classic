/** Client-specific settings for Relurt AI Agency Classic. */
const domain = "relurt.com";
const brandName = "Relurt AI Agency";

type LogoConfig =
  | { kind: "text"; mark: string }
  | { kind: "mark"; lightSrc: string; darkSrc: string; width: number; height: number }
  | { kind: "image"; lightSrc: string; darkSrc: string; width: number; height: number };

export type SiteConfig = {
  brandName: string;
  legalName: string;
  domain: string;
  siteUrl: string;
  servicesUrl: string;
  email: string;
  phone: { display: string; href: string };
  bookingEmbedUrl: string;
  tagline: string;
  logo: LogoConfig;
  seo: { backgroundColor: string; accentColor: string };
  chat: {
    assistantName: string;
    avatarSrc: string;
    leadSource: string;
    verticalSlug: string;
    industry: string;
    consentVersion: string;
    welcome: string;
    suggestions: string[];
  };
  contact: { leadSource: string; consentVersion: string; bottlenecks: string[] };
  about: { title: string; lead: string; story: string[]; answer: string; quote: string };
};

export const siteConfig: SiteConfig = {
  brandName,
  legalName: "Relurt LLC",
  domain,
  siteUrl: `https://${domain}`,
  servicesUrl: `https://services.${domain}`,
  email: `contact@info.${domain}`,
  phone: { display: "+1 240-916-1963", href: "tel:+12409161963" },
  bookingEmbedUrl: "https://api.leadconnectorhq.com/widget/booking/WGBWwfjpJ2QpKv0smgjC",
  tagline: "Moving AI from theory to infrastructure.",
  logo: {
    kind: "image",
    lightSrc: "/brand-logo.svg",
    darkSrc: "/brand-logo-on-dark.svg",
    width: 283,
    height: 109,
  },
  seo: { backgroundColor: "#0c1834", accentColor: "#4ae4df" },
  chat: {
    assistantName: "Anna",
    avatarSrc: "/anna-chat.png",
    leadSource: "relurt-ai-agency-classic-chat",
    verticalSlug: "classic-landing",
    industry: "Cross-industry service businesses",
    consentVersion: "relurt-ai-agency-classic-chat-2026-10-26",
    welcome: `Hi — I’m Anna, ${brandName}’s 24/7 chat assistant. Tell me where leads, scheduling, follow-up, or operations are getting stuck, and I’ll help identify a practical first workflow.`,
    suggestions: [
      "Where could automation save my team the most time?",
      "How could AI improve our lead response and booking?",
      "Can you work with our current CRM and tools?",
    ],
  },
  contact: {
    leadSource: "relurt-ai-agency-classic-contact",
    consentVersion: "relurt-ai-agency-classic-contact-2026-10-26",
    bottlenecks: [
      "Slow lead response",
      "Missed calls or after-hours inquiries",
      "Manual scheduling and intake",
      "Inconsistent follow-up",
      "Disconnected CRM and software",
      "Too much repetitive admin work",
      "Other",
    ],
  },
  about: {
    title: "Why we exist",
    lead: "Strong businesses should not need enterprise budgets to put practical AI to work.",
    story: [
      `${brandName} was created after years spent watching capable service businesses lose time and opportunities to slow follow-up, disconnected tools, and work that should never have stayed manual.`,
      `The same gap appears across industries: enterprise teams can invest in intelligent systems, while small and mid-sized operators are too often handed presentations, pilots, and more software to manage. ${brandName} makes the useful part of AI accessible — systems that work inside a real operation and produce a measurable result.`,
    ],
    answer: `${brandName} is how we close that gap.`,
    quote: `We built ${brandName} to turn practical operating experience into AI systems that do useful work every day — not experiments that disappear after the presentation.`,
  },
};
