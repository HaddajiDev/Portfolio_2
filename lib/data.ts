export interface Project {
  title: string
  slug: string
  description: string
  fullDescription?: string
  tags: string[]
  images?: string[]
  /** Selects the project's bespoke, image-free card art (see components/showcase-cards.tsx). */
  cardStyle?: "terminal" | "geometry"
  links?: {
    github?: string
    live?: string
  }
}

export interface ProjectsData {
  web: Project[]
  game: Project[]
  other: Project[]
}

export const projects: ProjectsData = {
  web: [
    // {
    //   title: "Agency app",
    //   slug: "agency-app",
    //   description: "A modern agency application",
    //   fullDescription: "A responsive agency website with modern features and animations",
    //   tags: ["React", "Next.js", "Tailwind"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FAgence.3123c6fb.png&w=3840&q=75"],
    //   links: {
    //     live: "https://agencyahmed.vercel.app/",
    //     github: "https://github.com/HaddajiDev/Agency_Front/"
    //   }
    // },
    // {
    //   title: "Weather app",
    //   slug: "weather-app",
    //   description: "Real-time weather forecasting application",
    //   fullDescription: "A weather application with real-time updates and location-based forecasting",
    //   tags: ["React", "API Integration"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FWeather.68adc3ef.png&w=1920&q=75"],
    //   links: {
    //     live: "https://weather-app-five-ruby-57.vercel.app/",
    //     github: "https://github.com/HaddajiDev/Weather_App/"
    //   }
    // },
    // {
    //   title: "E-commerce app",
    //   slug: "e-commerce-app",
    //   description: "Full-stack e-commerce platform",
    //   fullDescription: "Complete e-commerce solution with product management and shopping cart",
    //   tags: ["React", "Node.js", "MongoDB"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fstore.0ff87c5a.png&w=1920&q=75"],
    //   links: {
    //     live: "https://ecommerce-front-pi-blue.vercel.app/",
    //     github: "https://github.com/HaddajiDev/Ecommerce_Project/"
    //   }
    // },
    // {
    //   title: "Savage Blog",
    //   slug: "savage-blog",
    //   description: "Modern blogging platform",
    //   fullDescription: "Feature-rich blog and content management",
    //   tags: ["Next.js", "CMS"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fblog.a0eb0f15.png&w=1920&q=75"],
    //   links: {
    //     live: "https://savageblog.vercel.app/",
    //     github: "https://github.com/HaddajiDev/SavageBlog/"
    //   }
    // },
    // {
    //   title: "Savage Talk",
    //   slug: "savage-talk",
    //   description: "Real-time chat application",
    //   fullDescription: "Interactive messaging platform with real-time communication",
    //   tags: ["WebSocket", "React"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftalk.d1f49c4f.png&w=1920&q=75"],
    //   links: {
    //     live: "https://savage-talk.vercel.app/",
    //     github: "https://github.com/HaddajiDev/Savage-Talk/"
    //   }
    // },
    {
      title: "Savage Files",
      slug: "savage-files",
      description: "File management system",
      fullDescription: "Cloud-based file storage and management solution",
      tags: ["React", "Cloud Storage"],
      images: ["/savage-files.png"],
      links: {
        live: "https://savage-files.vercel.app",
        github: "https://github.com/HaddajiDev/Savage-Files"
      }
    },
    // {
    //   title: "Savage AI",
    //   slug: "savage-ai",
    //   description: "AI-powered application",
    //   fullDescription: "Artificial intelligence integration platform with various AI features",
    //   tags: ["AI", "Machine Learning"],
    //   images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fai.4a434127.png&w=1920&q=75"],
    //   links: {
    //     live: "https://savageai.vercel.app",
    //     github: "https://github.com/HaddajiDev/Savage-AI"
    //   }
    // },
    {
      title: "Food Rescue",
      slug: "food-rescue",
      description: "AI-powered food waste application",
      fullDescription: "Artificial intelligence integration platform with various AI features to prevent food waste",
      tags: ["AI", "Machine Learning", "Food"],
      images: ["https://res.cloudinary.com/dqkvgv7mh/image/upload/v1746204010/sgqeavdixeutp5ofv8ja.png"],
      links: {
        live: "https://foodrescue-1.vercel.app/",
        github: "https://github.com/HaddajiDev/Food-Rescue"
      }
    },
    {
      title: "Pyx",
      slug: "pyx",
      description: "Encrypted peer-to-peer LAN file transfer app",
      fullDescription: "A peer-to-peer file transfer desktop app built with Tauri and Rust. Pyx discovers nearby devices on the local network via mDNS and streams files or entire folders directly between them over encrypted QUIC connections, at full LAN speed with no cloud involved.",
      tags: ["Tauri", "Rust", "React", "TypeScript", "QUIC"],
      images: ["/pyx.png"],
      links: {
        live: "https://pyx-app.vercel.app",
        github: "https://github.com/HaddajiDev/Pyx"
      }
    },
    {
      title: "Pirate's Dual Art Community",
      slug: "pirates-dual-art-community",
      description: "Pixel art battle community site for Pirate's Dual",
      fullDescription: "A community platform built around the Pirate's Dual game where artists submit pixel art ships, flags, and sails, vote and comment on each other's work, and compete in tournaments with prize pools.",
      tags: ["Community", "Web", "Pixel Art"],
      images: ["/artist.png"],
      links: {
        live: "https://art.piratesdual.com/"
      }
    }
  ],
  game: [
    {
      title: "Gems Rush",
      slug: "gems-rush",
      description: "Mobile puzzle game with gem-matching mechanics",
      fullDescription: "Addictive puzzle game with power-ups and level progression",
      tags: ["Mobile", "Puzzle"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot%202023-07-18%20181741.483fb8df.png&w=256&q=75"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.haddajiDev.pirategemrush",
        github: "https://play.google.com/store/apps/details?id=com.haddajiDev.pirategemrush"
      }
    },
    {
      title: "Sliding puzzle",
      slug: "sliding-puzzle",
      description: "Classic sliding puzzle game",
      fullDescription: "Traditional sliding puzzle with multiple difficulty levels",
      tags: ["Puzzle", "Mobile"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsliding.716a8555.jpg&w=256&q=75"],
      links: {
        live: "https://play.google.com/store/apps/details?id=com.haddajidev.slidingpuzzle",
        github: "https://play.google.com/store/apps/details?id=com.haddajidev.slidingpuzzle"
      }
    },
    {
      title: "Memory puzzle",
      slug: "memory-puzzle",
      description: "Memory matching card game",
      fullDescription: "Pirate-themed memory matching game with multiple difficulty levels",
      tags: ["Memory", "Web"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmemory.ffb5856b.png&w=256&q=75"],
      links: {
        live: "https://haddajidev.itch.io/puzzle-pirates-memory-edition",
        github: "https://haddajidev.itch.io/puzzle-pirates-memory-edition"
      }
    },
    {
      title: "Chess",
      slug: "chess",
      description: "Classic chess game implementation",
      fullDescription: "Traditional chess game with AI opponent and multiplayer options",
      tags: ["Strategy", "Web"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FChess.a43c71de.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/chess-with-no-checkmate",
        github: "https://haddajidev.itch.io/chess-with-no-checkmate"
      }
    },
    {
      title: "Treasure Clicker",
      slug: "treasure-clicker",
      description: "Incremental clicker game",
      fullDescription: "Pirate-themed incremental clicker game with resource management",
      tags: ["Clicker", "Web"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclicker.66bdd2a3.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/treasure-clicker",
        github: "https://haddajidev.itch.io/treasure-clicker"
      }
    },
    {
      title: "Dog Rescue",
      slug: "dog-rescue",
      description: "Arcade-style rescue game",
      fullDescription: "Fast-paced arcade game with animal rescue mechanics",
      tags: ["Adventure", "PC"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdog.9775f97c.png&w=640&q=75", "https://img.itch.zone/aW1hZ2UvMjIzNTU2MC8xMzIzNzIzNi5wbmc=/347x500/eQA8Yc.png", "https://img.itch.zone/aW1hZ2UvMjIzNTU2MC8xMzIzNzIzNy5wbmc=/347x500/U5EV7U.png"],
      links: {
        live: "https://haddajidev.itch.io/dog-rescue",
        github: "https://haddajidev.itch.io/dog-rescue"
      }
    },
    {
      title: "The Wizard and the warrior time keeper",
      slug: "the-wizard-and-the",
      description: "Fantasy adventure game",
      fullDescription: "Story-driven RPG with magic and combat system",
      tags: ["Adventure", "PC"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwizard.8e537869.png&w=640&q=75", "https://img.itch.zone/aW1hZ2UvMjAwMjMxOC8xMTc3MTQyNi5wbmc=/original/mtyiCE.png", "https://img.itch.zone/aW1hZ2UvMjAwMjMxOC8xMTc3MTQyNS5wbmc=/347x500/bxqAs6.png"],
      links: {
        live: "https://haddajidev.itch.io/the-wizard-and-the-warrior-time-keeper",
        github: "https://haddajidev.itch.io/the-wizard-and-the-warrior-time-keeper"
      }
    },
    {
      title: "The Cursed Cave",
      slug: "the-cursed-cave",
      description: "Adventure exploration stroy game",
      fullDescription: "Dark cave exploration game with puzzle elements",
      tags: ["Adventure", "PC"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcave.b8bff699.png&w=640&q=75", "https://img.itch.zone/aW1hZ2UvMjUyMTQ1MC8xNDk5NDQxOC5wbmc=/347x500/Id7qYI.png", "https://img.itch.zone/aW1hZ2UvMjUyMTQ1MC8xNDk5NDQxMi5wbmc=/347x500/1sWeht.png"],
      links: {
        live: "https://haddajidev.itch.io/the-cursed-cave",
        github: "https://haddajidev.itch.io/the-cursed-cave"
      }
    },
    {
      title: "رحلة النمو",
      slug: "growth-journey",
      description: "Clicker game",
      fullDescription: "Educational clicker game focused on personal growth",
      tags: ["Clicker", "Web"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclicker_2.d4590d7e.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/gamejam",
        github: "https://haddajidev.itch.io/gamejam"
      }
    },
    {
      title: "Bomb Skipper",
      slug: "bomb-skipper",
      description: "Arcade bomb avoidance game",
      fullDescription: "Fast-paced bomb dodging game with power-ups",
      tags: ["Arcade", "Fast"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbomb.4abf7a1c.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/bomb-skipper",
        github: "https://github.com/HaddajiDev/Bomb-Skipper"
      }
    },
    {
      title: "Tank Showdown",
      slug: "tank-showdown",
      description: "Multiplayer tank battle game",
      fullDescription: "multiplayer tank combat game",
      tags: ["Multiplayer", "PC"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftank.7013f5f4.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/tank-showdown",
        github: "https://haddajidev.itch.io/tank-showdown"
      }
    },
    {
      title: "Balls Merge",
      slug: "balls-merge",
      description: "Puzzle merge game",
      fullDescription: "Addictive merging puzzle game with strategy elements",
      tags: ["Puzzle", "Mobile"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FMerge.6350e771.png&w=640&q=75"],
      links: {
        live: "https://haddajidev.itch.io/balls-merge",
        github: "https://haddajidev.itch.io/balls-merge"
      }
    },
    {
      title: "Pirate's Dual",
      slug: "pirates-dual",
      description: "Pirate ship battle game",
      fullDescription: "Naval combat game with pirate ship customization",
      tags: ["Strategy", "Web", "Ship"],
      images: ["https://haddajidev.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPirateDuel.78e50741.png&w=640&q=75", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE3My5wbmc=/347x500/v9jRNR.png", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE2OS5wbmc=/347x500/1POwZC.png", "https://img.itch.zone/aW1hZ2UvMjk3NzEwOC8xNzgwOTE3MS5wbmc=/347x500/%2F1dZDR.png"],
      links: {
        live: "https://haddajidev.itch.io/pirates-dual",
        github: "https://github.com/HaddajiDev/Pirate-s-Dual"
      }
    }
  ],
  other: [
    {
      title: "Tawla",
      slug: "tawla-lang",
      description: "A statically-typed, object-oriented programming language",
      fullDescription: "Tawla is a statically-typed, object-oriented programming language built from scratch in Python, with its own compiler (tawlac) that compiles directly to machine code via LLVM (using llvmlite). It supports classes, inheritance, interfaces, generics, exception handling, and standard libraries for HTTP, SQLite, JSON, file I/O, and cryptography.",
      tags: ["Python", "LLVM", "Compilers", "Language Design"],
      cardStyle: "terminal",
      links: {
        github: "https://github.com/HaddajiDev/tawla-lang"
      }
    },
    {
      title: "Lowkey Solver",
      slug: "lowkey-solver",
      description: "AI math solver that explains every step like a friend, not a textbook",
      fullDescription: "Stuck on a math problem? Lowkey Solver gets it. Type it, snap a photo, or upload a worksheet and get a clear, step-by-step solution explained in a tone you pick — Gen Z, Casual, Formal, or Explain Like I'm 12. Covers algebra, calculus, geometry, trigonometry, statistics, pre-calc, and more, with every step broken into what was done, why it works, and the actual math rendered cleanly. Not just an answer machine.",
      tags: ["Android", "AI", "Education", "Math"],
      cardStyle: "geometry",
      links: {
        live: "https://play.google.com/store/apps/details?id=com.lowkey.solver"
      }
    }
  ]
};

export interface PersonalInfo {
  name: string
  age: string
  email: string
  workExperience: Array<{ [key: string]: string }>
  education: Array<{ [key: string]: string }>
  skills: string[]
}

export const personalInfo: PersonalInfo = {
  name: "Ahmed Haddaji",
  age: "21",
  email: "ahmedhaddajiahmed@gmail.com",
  workExperience: [{ "2020-now": "Full-stack Game Developer" }, { "2024-now": "Full-stack Developer" }],
  education: [{ "2021-2022": "Bachelor of Computer Science" }, { "2023-2024": "isimg Gabes - Computer Science (IT)" }],
  skills: [
    "HTML",
    "CSS",
    "Node.js",
    "Bootstrap",
    "SCSS/Less",
    "Tailwind",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "npm/yarn/pnpm",
    "TypeScript",
    "SQL",
    "PostgreSQL",
    "React",
    "Nextjs",
    "Unity",
    "C#",
    "PHP",
    "MongoDB",
    "MySQL",
    "PlayFab",
    "Photoshop",
    "Motion design",
    "Rust",
    "Java",
    "Android Studio",
    "Git",
    "Godot",
    "GDScript",
  ],
}

export interface SkillsData {
  web: string[]
  game: string[]
}

export const skills: SkillsData = {
  web: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "HTML/CSS", "Tailwind CSS", "GraphQL", "REST APIs"],
  game: ["Unity", "C#", "Game Design", "Godot", "Level Design", "Animation", "Physics", "GDScript"],
}
