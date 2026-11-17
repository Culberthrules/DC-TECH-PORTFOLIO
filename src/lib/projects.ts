export type Project = {
  id: string;
  number: string;
  title: string;
  type: string;
  timeline?: string;
  url: string;
  sourceCode: { label: string; url: string }[];
  summary: string;
  role: string;
  challenge: string;
  approach: string;
  outcome: string;
  stack: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "amabishi",
    number: "01",
    title: "Amabishi",
    type: "Business website",
    timeline: "August 2026 to present",
    url: "https://amabishi.co.uk",
    sourceCode: [
      { label: "Source code", url: "https://github.com/Culberthrules/A.M-Bishi" },
    ],
    summary:
      "A website for a UK agro-products company selling hibiscus, honey, and sesame. I recovered its domain, rebuilt the site, and fixed its email delivery with Resend.",
    role: "Website rebuild and email delivery",
    challenge:
      "The domain was pointing to the wrong site, and enquiry emails were not arriving reliably.",
    approach:
      "Recovered the domain, rebuilt the site with React and TypeScript, and moved email delivery to Resend through a Vercel function.",
    outcome:
      "The company had its website back on its own domain and a working email path.",
    stack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Resend",
      "Vercel Functions",
      "Vercel Analytics",
    ],
    featured: true,
  },
  {
    id: "parleys-collection",
    number: "02",
    title: "Parley's Collection",
    type: "E-commerce",
    timeline: "August 2026 to present",
    url: "https://parleys-collection.vercel.app",
    sourceCode: [
      {
        label: "Source code",
        url: "https://github.com/Culberthrules/Parleys-Collection",
      },
    ],
    summary:
      "An online watch shop with a custom cart and checkout through WhatsApp Business, matching how the client already handles orders.",
    role: "Shopping cart and checkout flow",
    challenge:
      "The client already takes orders through WhatsApp Business, so a separate payment checkout would add friction.",
    approach:
      "Built a custom cart with session persistence and connected checkout to the client's WhatsApp Business workflow.",
    outcome:
      "Customers can collect items in a cart and finish their order through the channel the client already uses.",
    stack: ["React 19", "Vite", "Sass/SCSS", "Framer Motion", "WhatsApp Business API"],
    featured: true,
  },
  {
    id: "omo-daadaa",
    number: "03",
    title: "Omo Daadaa",
    type: "NGO platform",
    url: "https://omo-daadaa.vercel.app",
    sourceCode: [
      {
        label: "Source code",
        url: "https://github.com/Culberthrules/My-Ngo-Website",
      },
    ],
    summary:
      "A site for an NGO, with enquiry and donation forms connected to its live payment services.",
    role: "NGO website and form flows",
    challenge:
      "The site needed to handle both enquiries and donations, with submitted information reaching the right services.",
    approach:
      "Connected the forms to live services, using React Hook Form and Zod for validation and TanStack Query for server state.",
    outcome:
      "Visitors can send enquiries and make donations through the site.",
    stack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "React Hook Form",
      "TanStack Query",
      "Zod",
      "Radix UI",
    ],
    featured: false,
  },
  {
    id: "the-monolith",
    number: "04",
    title: "The Monolith",
    type: "Portfolio + client portal",
    url: "https://the-monolith-henna.vercel.app",
    sourceCode: [
      {
        label: "Frontend code",
        url: "https://github.com/Culberthrules/The-Monolith",
      },
      {
        label: "Backend code",
        url: "https://github.com/Culberthrules/The-monolith-backend",
      },
    ],
    summary:
      "A portfolio site for an architecture firm, with a client portal for tracking projects. Built with JWT authentication, MongoDB, and Firebase storage.",
    role: "Architecture firm website and client portal",
    challenge:
      "The firm needed a public portfolio as well as a private place for clients to follow active projects.",
    approach:
      "Built the portal with JWT authentication, MongoDB and Mongoose for project data, and Firebase for asset storage.",
    outcome:
      "Clients can log in and follow their active projects alongside the public portfolio.",
    stack: ["React 19", "Node.js", "Express 5", "MongoDB", "Mongoose", "Firebase", "JWT"],
    featured: true,
  },
  {
    id: "resist-ia",
    number: "05",
    title: "RESIST-IA",
    type: "Medical platform",
    url: "https://resist-ia-app.vercel.app",
    sourceCode: [
      { label: "Source code", url: "https://github.com/Culberthrules/RESIST-IA" },
    ],
    summary:
      "A platform for Nigerian medical labs to record and review antibiotic resistance data.",
    role: "Medical laboratory data platform",
    challenge:
      "Laboratory staff need to record antibiotic resistance data and review aggregated reports.",
    approach:
      "Built the application in TypeScript, with Zod validation and TanStack Query to refresh data in the background.",
    outcome:
      "The platform gives labs a place to record and review antibiotic resistance data.",
    stack: ["React 19", "TypeScript", "Tailwind CSS", "TanStack Query", "Zod", "Radix UI"],
    featured: false,
  },
];
