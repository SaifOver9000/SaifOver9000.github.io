// Everything about you lives here. Edit this file to update the site.
// Search for "TODO" to find what still needs filling in.

export const profile = {
  name: "Saif",
  role: "Software Developer",
  location: "Toronto, ON", // TODO: adjust as your plans change
  tagline:
    "I build practical web apps and tools across the frontend and backend, and I like turning messy real-world problems into something people can actually use.",

  // The "Currently building" card in the hero. Set to null to hide it.
  currentlyBuilding: {
    title: "Care Navigator",
    blurb:
      "Helping people find the right kind of care tonight: ER, walk-in, pharmacist or virtual.",
    target: "Live by Nov 30",
    href: "#projects",
  },

  about: [
    // TODO: make this sound like you. Two or three short paragraphs work best.
    "I'm a developer who enjoys working across the whole stack, from component architecture and styling on the frontend to APIs, data and tooling on the backend.",
    "Lately I've been building AI-powered tools with LLM function calling, shipping Vue apps, and working on a healthcare project that helps people figure out where to go for care.",
    "I learn by building. Most of what you'll see here started as a question I wanted to answer, then turned into something deployed.",
    "I graduated from Acadia University in 2026 with a Bachelor of Computer Science with Co-op, and I was president of the Computer Science Society. I love coding, learning, and helping others do the same.",
  ],

  email: "saifmiskin9@gmail.com", // shown publicly on the site; change it if you prefer another address

  links: {
    github: "https://github.com/SaifOver9000", // TODO: e.g. 'https://github.com/your-username'
    linkedin: "https://www.linkedin.com/in/saif-miskin-54a299201/", // TODO: e.g. 'https://www.linkedin.com/in/your-name'
    resume: "/resume.pdf", // TODO: put resume.pdf in /public and set this to '/resume.pdf'
  },

  skills: [
    {
      group: "Frontend",
      items: ["Vue 3", "JavaScript", "HTML & CSS", "Tailwind CSS", "Vite"],
    },
    {
      group: "Backend & AI",
      items: ["Python", "Gemini API", "LLM function calling", "REST APIs"],
    },
    {
      group: "Tools",
      items: ["Git & GitHub", "Netlify", "Unit testing", "Linux"],
    },
    // TODO: add or remove anything here
    {
      group: "AI & ML",
      items: [
        "TensorFlow",
        "PyTorch",
        "scikit-learn",
        "Natural Language Processing",
      ],
    },
    {
      group: "Virtual Reality & Unity",
      items: ["Unity", "Blender", "C#", "VR development"],
    },
    {
      group: "Community & Leadership",
      items: [
        "President of the Computer Science Society at Acadia University",
        "Organized hackathons and coding workshops",
      ],
    },
  ],

  // Entries with draft: true are hidden until you fill them in and remove the flag.
  experience: [
    {
      role: "Software Developer (Research Assistant → Developer)",
      org: "Computational and Applied Neuroscience Lab, Acadia University",
      period: "Sep 2024 – Apr 2026",
      summary:
        "Started as a co-op research assistant and was rehired three times, ending as a part-time contract developer. Built and maintained VR motor learning experiments in Unity and C# that use eye tracking to study sensorimotor adaptation, including a new Mixed Reality experiment combining VR with real-world interaction. Fixed bugs affecting data collection accuracy, tested each release across sessions, and ran in-home trials with stroke patients.",
      // Optional photos, served from /public. Leave out or empty for no photos.
      images: [
        {
          src: "VR_Headset.jpg",
          alt: "The lab's VR headset with its eye-tracking module",
          caption: "the lab headset",
        },
        {
          src: "MTL_Snapshot.jpg",
          alt: "Unity editor open on the Ball Shooter VR experiment scene",
          caption: "Ball Shooter in Unity",
        },
      ],
    },
    {
      role: "STEM Education Research Assistant (Co-op)",
      org: "Acadia University",
      period: "May 2024 – Jul 2024",
      summary:
        "Built a WordPress site to share research and connect a community of scholars, and supported qualitative research on the experiences of Black engineers in Canada, including a literature review. Helped run the pre-orientation for the STEM Leadership Academy Scholars program and built its participant survey in LimeSurvey.",
    },
  ],

  education: {
    degree: "Bachelor of Computer Science with Co-op",
    school: "Acadia University",
    year: "2026",
  },
};
