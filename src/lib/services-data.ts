export type Service = {
  slug: string;
  icon:
    | "Code2"
    | "PenTool"
    | "Sparkles"
    | "LayoutDashboard"
    | "Clapperboard"
    | "SearchCheck"
    | "Wrench"
    | "ShieldCheck"
    | "Megaphone";
  title: string;
  desc: string;
  tagline: string;
  intro: string;
  benefits: string[];
  deliverables: string[];
  plans: { name: string; price: string; note: string; features: string[]; featured?: boolean }[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    icon: "Code2",
    title: "Web Development",
    desc: "Fast, scalable sites and web apps built to convert.",
    tagline: "Sites that load fast and sell harder",
    intro:
      "We build marketing sites, e-commerce stores and web apps with clean code, real performance budgets and a CMS your team can actually use.",
    benefits: [
      "Sub-2s load times on real mobile networks",
      "SEO-ready structure, metadata and sitemaps",
      "Editable content without calling a developer",
      "Analytics and conversion tracking wired in",
    ],
    deliverables: ["Responsive build", "CMS integration", "Performance report", "30 days post-launch support"],
    plans: [
      { name: "Landing", price: "$900", note: "one-off", features: ["1 page", "Contact form", "Basic SEO", "2 revisions"] },
      { name: "Business Site", price: "$2,400", note: "one-off", features: ["Up to 8 pages", "CMS", "SEO setup", "Speed optimisation"], featured: true },
      { name: "Custom App", price: "from $6,000", note: "project", features: ["Custom features", "Database & auth", "Integrations", "Dedicated PM"] },
    ],
  },
  {
    slug: "graphic-design",
    icon: "PenTool",
    title: "Graphic Design",
    desc: "Print and social assets with a sharp, consistent voice.",
    tagline: "Design that looks intentional everywhere",
    intro:
      "From social templates to packaging and print, we produce artwork that stays on-brand across every format and size.",
    benefits: [
      "Consistent visual voice across channels",
      "Source files you own and can reuse",
      "Templates your team can edit",
      "Print-ready exports checked for colour",
    ],
    deliverables: ["Source files", "Export pack", "Editable templates", "Usage notes"],
    plans: [
      { name: "Single Asset", price: "$120", note: "per asset", features: ["1 design", "2 revisions", "Print + digital export"] },
      { name: "Campaign Pack", price: "$780", note: "per campaign", features: ["10 assets", "Social templates", "3 revisions"], featured: true },
      { name: "Design Retainer", price: "$1,500", note: "/month", features: ["Unlimited requests", "2 active at a time", "48h turnaround"] },
    ],
  },
  {
    slug: "identity-branding",
    icon: "Sparkles",
    title: "Identity Branding",
    desc: "Logos, systems and guidelines that hold up everywhere.",
    tagline: "A brand system, not just a logo file",
    intro:
      "We define how your brand looks, sounds and behaves — then document it so every future asset stays coherent.",
    benefits: [
      "Distinct positioning against competitors",
      "Logo suite for every placement and size",
      "Colour, type and tone documented",
      "Faster future design work",
    ],
    deliverables: ["Logo suite", "Colour & type system", "Brand guidelines PDF", "Stationery set"],
    plans: [
      { name: "Starter Identity", price: "$1,200", note: "one-off", features: ["Logo suite", "Colour & type", "Mini guidelines"] },
      { name: "Full Identity", price: "$3,500", note: "one-off", features: ["Strategy workshop", "Full logo system", "Guidelines book", "Launch assets"], featured: true },
      { name: "Rebrand", price: "from $7,000", note: "project", features: ["Audit & research", "Naming support", "Rollout plan", "Team training"] },
    ],
  },
  {
    slug: "ui-ux-design",
    icon: "LayoutDashboard",
    title: "UI/UX Design",
    desc: "Research-led interfaces people actually enjoy using.",
    tagline: "Interfaces designed around real behaviour",
    intro:
      "We map user journeys, prototype the hard screens first and hand developers a design system that is ready to build.",
    benefits: [
      "Fewer support tickets and drop-offs",
      "Clickable prototypes before code",
      "Accessible by default (WCAG AA)",
      "Component library devs can reuse",
    ],
    deliverables: ["User flows", "Wireframes", "High-fidelity UI", "Design system in Figma"],
    plans: [
      { name: "UX Review", price: "$600", note: "one-off", features: ["Heuristic audit", "Prioritised fixes", "Walkthrough call"] },
      { name: "Product Design", price: "$3,200", note: "project", features: ["Up to 15 screens", "Prototype", "Design system"], featured: true },
      { name: "Embedded Designer", price: "$4,000", note: "/month", features: ["Full-time designer", "Sprint participation", "Ongoing system work"] },
    ],
  },
  {
    slug: "video-editing",
    icon: "Clapperboard",
    title: "Video Editing",
    desc: "Cuts, motion and sound that keep attention to the end.",
    tagline: "Edits built for retention, not just polish",
    intro:
      "Short-form social cuts, product films and event recaps — edited with pacing, captions and motion that hold viewers.",
    benefits: [
      "Higher watch-through on social",
      "Captions and formats per platform",
      "Licensed music and sound design",
      "Consistent on-brand motion",
    ],
    deliverables: ["Edited master", "Vertical & square cuts", "Captions file", "Thumbnail frames"],
    plans: [
      { name: "Short Form", price: "$150", note: "per video", features: ["Up to 60s", "Captions", "2 revisions"] },
      { name: "Brand Film", price: "$1,400", note: "per film", features: ["Up to 3 min", "Motion graphics", "Sound design", "3 revisions"], featured: true },
      { name: "Content Retainer", price: "$2,000", note: "/month", features: ["12 videos", "Multi-format exports", "Priority turnaround"] },
    ],
  },
  {
    slug: "brand-audit",
    icon: "SearchCheck",
    title: "Brand Audit",
    desc: "An honest read on where your brand leaks value.",
    tagline: "Find what's costing you customers",
    intro:
      "We review your brand, site, content and competitors, then hand you a prioritised list of fixes ranked by impact and effort.",
    benefits: [
      "Clear view of how you compare to rivals",
      "Prioritised, actionable fix list",
      "Evidence for internal buy-in",
      "No obligation to buy further work",
    ],
    deliverables: ["Audit report", "Competitor benchmark", "Priority roadmap", "Presentation call"],
    plans: [
      { name: "Quick Audit", price: "Free", note: "48h", features: ["Top 5 findings", "Written summary"] },
      { name: "Full Audit", price: "$750", note: "one-off", features: ["Brand + web + content", "3 competitors", "90-day roadmap", "Live walkthrough"], featured: true },
      { name: "Quarterly Audit", price: "$500", note: "/quarter", features: ["Ongoing tracking", "Progress scoring", "Updated roadmap"] },
    ],
  },
  {
    slug: "web-maintenance",
    icon: "Wrench",
    title: "Web Maintenance",
    desc: "Updates, backups and fixes so nothing quietly breaks.",
    tagline: "Your site, looked after every month",
    intro:
      "Patches, backups, uptime monitoring and content edits handled by the same team that builds — so nothing sits broken.",
    benefits: [
      "Fewer outages and broken pages",
      "Backups you can actually restore",
      "Content edits without hiring in-house",
      "Monthly report on what changed",
    ],
    deliverables: ["Update log", "Offsite backups", "Uptime monitoring", "Monthly report"],
    plans: [
      { name: "Essential", price: "$120", note: "/month", features: ["Monthly updates", "Weekly backups", "Uptime monitoring"] },
      { name: "Care", price: "$320", note: "/month", features: ["Weekly updates", "Daily backups", "2h content edits", "Priority fixes"], featured: true },
      { name: "Enterprise", price: "$800", note: "/month", features: ["24/7 monitoring", "Staging environment", "8h dev time", "SLA response"] },
    ],
  },
  {
    slug: "web-security",
    icon: "ShieldCheck",
    title: "Web Security",
    desc: "Hardening, monitoring and recovery plans that work.",
    tagline: "Hardened before someone tests it for you",
    intro:
      "We close the common attack paths, add monitoring, and make sure you can restore quickly if something does get through.",
    benefits: [
      "Reduced risk of defacement and data loss",
      "Malware and vulnerability monitoring",
      "Tested restore procedure",
      "Compliance-friendly documentation",
    ],
    deliverables: ["Security assessment", "Hardening changes", "Monitoring setup", "Incident playbook"],
    plans: [
      { name: "Assessment", price: "$450", note: "one-off", features: ["Vulnerability scan", "Findings report", "Fix recommendations"] },
      { name: "Hardening", price: "$1,100", note: "one-off", features: ["Assessment included", "Firewall & SSL setup", "Access controls", "Incident playbook"], featured: true },
      { name: "Managed Security", price: "$450", note: "/month", features: ["Continuous monitoring", "Malware removal", "Patch management", "Incident response"] },
    ],
  },
  {
    slug: "digital-marketing",
    icon: "Megaphone",
    title: "Digital Marketing",
    desc: "Campaigns measured on pipeline, not impressions.",
    tagline: "Spend that can be traced to revenue",
    intro:
      "Search, social and email campaigns planned around your margins — with reporting that ties every channel to leads.",
    benefits: [
      "Clear cost per lead by channel",
      "Creative and copy produced in-house",
      "Landing pages built to convert",
      "Monthly strategy call, not just a PDF",
    ],
    deliverables: ["Channel strategy", "Ad creative & copy", "Tracking setup", "Monthly performance report"],
    plans: [
      { name: "Kickstart", price: "$600", note: "/month", features: ["1 channel", "Tracking setup", "Monthly report"] },
      { name: "Growth", price: "$1,600", note: "/month", features: ["3 channels", "Creative production", "Landing pages", "Strategy call"], featured: true },
      { name: "Scale", price: "from $3,500", note: "/month", features: ["Full-funnel campaigns", "Weekly optimisation", "Dedicated strategist"] },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
