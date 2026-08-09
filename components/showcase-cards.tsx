"use client"

/**
 * Bespoke card art for projects that have no screenshot.
 * Each project gets its own composition — these are deliberately NOT a shared
 * template. The art has to say what the project is before you read the title.
 */

const SHELL =
  "group relative h-[300px] w-[300px] cursor-pointer overflow-hidden rounded-2xl ring-1 ring-white/[0.07] shadow-[0_2px_10px_rgba(0,0,0,0.5)] transition-[transform,box-shadow] duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_22px_46px_-18px_rgba(88,28,135,0.8)] hover:ring-purple-400/25 motion-reduce:transform-none motion-reduce:transition-none"

/* ------------------------------------------------------------------ *
 * Tawla — a language. The art is an honest terminal session: you run
 * the compiler, it goes native, it prints. No window chrome theatre.
 * ------------------------------------------------------------------ */

export function TawlaTerminalArt({ large = false }: { large?: boolean }) {
  const size = large ? "text-[15px]" : "text-[12.5px]"

  return (
    <div className={`w-full font-mono ${size} leading-[1.85]`}>
      <p className="text-gray-100">
        <span className="mr-2 select-none text-purple-400">$</span>
        tawlac run hello.twl
      </p>
      <p className="text-gray-600">
        <span className="mr-2 text-emerald-500/80">✓</span>
        compiled to native · 0.4s
      </p>
      <p className="text-gray-300">Hello, Tawla!</p>
      <p className="text-gray-100">
        <span className="mr-2 select-none text-purple-400">$</span>
        <span
          className="inline-block h-[1.05em] w-[0.55em] translate-y-[0.15em] animate-pulse bg-purple-400/80 motion-reduce:animate-none"
          aria-hidden="true"
        />
      </p>
    </div>
  )
}

export function TawlaCard({ project }: { project: any }) {
  return (
    <div className={`${SHELL} bg-[#08080c]`}>
      <div className="flex h-full flex-col">
        {/* one thin title strip — enough to read as a terminal, no traffic lights */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-2.5">
          <span className="font-mono text-[10.5px] text-gray-600">~/tawla</span>
          <span
            className="h-1.5 w-1.5 rounded-full bg-purple-500/70 transition-colors duration-300 group-hover:bg-purple-400"
            aria-hidden="true"
          />
        </div>

        <div className="flex min-h-0 flex-1 items-center px-5">
          <TawlaTerminalArt />
        </div>

        <div className="px-5 pb-5">
          <div className="mb-3 h-px bg-white/[0.06] transition-colors duration-300 group-hover:bg-purple-400/20" />
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="truncate text-[17px] font-semibold tracking-tight text-white">{project.title}</h4>
            <span className="shrink-0 font-mono text-[10px] text-gray-600">.twl</span>
          </div>
          <p className="mt-1 truncate text-[12px] text-gray-500">Python · LLVM · compiles to native</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ *
 * Lowkey Solver — a maths app. The art is the thing it actually draws:
 * the 3-4-5 triangle, as clean line work, with the side it solved for
 * picked out in colour.
 * ------------------------------------------------------------------ */

export function SolvedTriangleArt({ large = false }: { large?: boolean }) {
  const w = large ? 260 : 178

  return (
    <div className="flex w-full flex-col items-center">
      <svg
        viewBox="0 0 170 130"
        width={w}
        className="overflow-visible"
        role="img"
        aria-label="Right triangle with legs 3 and 4 and hypotenuse 5"
      >
        {/* the two known legs — quiet */}
        <path d="M34 104 L34 12 M34 104 L103 104" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round" fill="none" />

        {/* right-angle marker */}
        <path d="M34 92 L46 92 L46 104" stroke="#4b5563" strokeWidth="1.25" fill="none" />

        {/* the hypotenuse — the side being solved for, so it carries the colour */}
        <path
          d="M34 12 L103 104"
          stroke="#c4b5fd"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          className="transition-[stroke,filter] duration-300 group-hover:stroke-purple-300 group-hover:[filter:drop-shadow(0_0_6px_rgba(196,181,253,0.55))]"
        />

        {/* vertices */}
        <circle cx="34" cy="12" r="3.25" fill="#0a0a0f" stroke="#c4b5fd" strokeWidth="1.5" />
        <circle cx="34" cy="104" r="3.25" fill="#0a0a0f" stroke="#9ca3af" strokeWidth="1.5" />
        <circle cx="103" cy="104" r="3.25" fill="#0a0a0f" stroke="#c4b5fd" strokeWidth="1.5" />

        <g fill="#6b7280" fontSize="10" fontStyle="italic" fontFamily="Georgia, serif">
          <text x="27" y="8" textAnchor="middle">B</text>
          <text x="25" y="117">A</text>
          <text x="108" y="117">C</text>
        </g>

        <g fontSize="11" fontFamily="Georgia, serif">
          <text x="25" y="61" textAnchor="end" fill="#9ca3af">4</text>
          <text x="68" y="119" textAnchor="middle" fill="#9ca3af">3</text>
          <text x="76" y="52" fill="#d8b4fe">5</text>
        </g>
      </svg>

      <p className={`mt-3 font-serif italic ${large ? "text-2xl" : "text-[17px]"} text-gray-100`}>BC = 5</p>
    </div>
  )
}

export function LowkeySolverCard({ project }: { project: any }) {
  return (
    <div className={`${SHELL} bg-[#0a0a0f]`}>
      {/* light pooling behind the figure */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[radial-gradient(ellipse_at_50%_30%,rgba(139,92,246,0.14),transparent_70%)] opacity-80 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex min-h-0 flex-1 items-center justify-center px-6 pt-5">
          <SolvedTriangleArt />
        </div>

        <div className="px-5 pb-5">
          <div className="mb-3 h-px bg-white/[0.06] transition-colors duration-300 group-hover:bg-purple-400/20" />
          <div className="flex items-baseline justify-between gap-3">
            <h4 className="truncate text-[17px] font-semibold tracking-tight text-white">{project.title}</h4>
            <span className="shrink-0 text-[10px] uppercase tracking-wider text-gray-600">Android</span>
          </div>
          <p className="mt-1 truncate text-[12px] text-gray-500">Step-by-step, in a tone you pick</p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */

export function ShowcaseCard({ project }: { project: any }) {
  if (project.cardStyle === "geometry") return <LowkeySolverCard project={project} />
  if (project.cardStyle === "terminal") return <TawlaCard project={project} />
  return null
}

export function ShowcaseArt({ cardStyle }: { cardStyle?: string }) {
  if (cardStyle === "geometry") return <SolvedTriangleArt large />
  if (cardStyle === "terminal") return <TawlaTerminalArt large />
  return null
}
