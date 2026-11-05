// Your projects, in the order they appear. The first one with featured: true
// gets the large card at the top.
//
// accent: 'pink' | 'lemon' | 'mint' | 'cobalt'
// status: 'live' | 'in-progress' | 'coursework'
// links: leave a value as '' to hide that button.
// draft: true hides a project until it's ready.

export const projects = [
  {
    title: "Care Navigator",
    kicker: "Healthcare · Web app",
    summary:
      '"Where should I go tonight?" Someone who feels unwell after hours shares their location and how urgent it feels, and gets nearby ERs, walk-in clinics, pharmacists and virtual care options that are actually open.',
    highlights: [
      "Designed from interviews with people who have been stuck deciding where to go",
      "Urgency picker sends emergencies to 911 before showing anything else",
      "Filters by care type and open-now status, with published wait times where available",
      "Built with public and synthetic data only, no patient information",
    ],
    stack: ["Vue 3", "Vite", "Tailwind CSS", "Maps", "Public health data"],
    status: "in-progress",
    statusNote: "Live by Nov 30",
    accent: "pink",
    featured: true,
    links: { live: "", code: "", caseStudy: "" }, // TODO: add as soon as you deploy
  },
  {
    title: "AI Coding Agent",
    kicker: "AI · Python CLI",
    summary:
      "A command-line coding agent built on the Gemini API. It reads, writes and runs files in a sandboxed workspace by calling tools, then feeds the results back to the model until the task is done.",
    highlights: [
      "Implemented LLM function calling with a modular tool package",
      "Found and fixed a path-containment bypass by replacing a startswith check with os.path.commonpath",
      "Handled model responses that return function calls with no text",
    ],
    stack: ["Python", "Gemini API", "Function calling", "unittest"],
    status: "coursework",
    statusNote: "Guided through Boot.dev", 
    accent: "mint",
    links: { live: "Can work Locally", code: "https://github.com/SaifOver9000/Python-Coding-Agent-Gemini-API" }, // TODO: add the GitHub repo
  },
  {
    title: "AI-based-tool-for-real-time-peptide-cytotoxicity-prediction",
    kicker: "ML · Python · Research · Bioinformatics · Peptide Cytotoxicity Prediction ",
    summary:"a machine learning system that predicts the cytotoxicity of anticancer peptides, i.e. the percentage of cancer cells killed, for breast cancer. A researcher enters a 14-amino-acid peptide sequence and gets back a predicted cytotoxicity value plus a breakdown of the sequence’s composition, net charge, average hydrophobicity, and longest hydrophobic patch.",
    highlights: ["Engineered a custom 38-dimensional peptide representation",
      "Developed a comprehensive feature extraction pipeline for peptide sequences",
      "Implemented a user-friendly web interface for real-time predictions",
    ],
    stack: ["Python, scikit-learn, NumPy, pandas, Matplotlib, FastAPI, REST, JavaScript, React, Vite, HTML/CSS, Vitest"],
    statusNote: "Capstone",
    accent: "mint",
    featured: true,
    links: {live: "Can work Locally", code: "https://github.com/SaifOver9000/AI-based-tool-for-real-time-peptide-cytotoxicity-prediction" },

  },
  {
    title: "Toronto Suite Directory",
    kicker: "Frontend · Vue app",
    summary:
      "A searchable directory of suites across the Toronto area, built as a component-driven Vue app with JSON-backed listings and deployed on Netlify.",
    highlights: [
      "Reusable component hierarchy with props, computed filters and v-model search",
      "Styled with Tailwind CSS v4 and deployed with continuous builds on Netlify",
      "Compared hosting options and chose static hosting over Kubernetes for the scale of the app",
    ],
    stack: ["Vue 3", "Vite", "Tailwind CSS v4", "Netlify"],
    status: "live",
    statusNote: "Not yet deployed",
    accent: "lemon",
    draft: true,
    links: { live: "Not yet deployed", code: "Private" }, // TODO: add the Netlify URL and repo
  },
  {
    title: "This Portfolio",
    kicker: "Frontend · Personal site",
    summary:
      "The site you are looking at. Content is driven entirely from two data files, so adding a project is a one-object change.",
    highlights: [
      "Data-driven sections",
      "Accessible focus states and reduced-motion support",
      "Responsive down to small phones",
    ],
    stack: ["Vue 3", "Vite", "Tailwind CSS v4", "Netlify"],
    status: "live",
    statusNote: "You are here",
    accent: "cobalt",
    links: { live: "", code: "https://github.com/SaifOver9000/saif-portfolio" }, // TODO: add the repo link
  },
];
