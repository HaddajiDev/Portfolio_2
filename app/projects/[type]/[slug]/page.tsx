"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { ArrowLeft, Code, Gamepad2, Terminal, Github, ExternalLink, SquareRadical } from "lucide-react"
import Link from "next/link"
import { projects, type Project } from "@/lib/data"
import { ShowcaseArt } from "@/components/showcase-cards"

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<Project>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.type && params.slug) {
      const type = params.type.toString()
      const slug = params.slug.toString()

      let foundProject = null

      if (type === "web") {
        foundProject = projects.web.find((p) => p.slug === slug)
      } else if (type === "game") {
        foundProject = projects.game.find((p) => p.slug === slug)
      } else if (type === "other") {
        foundProject = projects.other.find((p) => p.slug === slug)
      }

      if (foundProject) {
        setProject(foundProject)
      } else {
        router.push("/")
      }

      setLoading(false)
    }
  }, [params, router])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="animate-pulse text-2xl">Loading project details...</div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-950 text-gray-100 flex items-center justify-center">
        <div className="text-2xl">Project not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="relative h-[40vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-gray-900/30"></div>
        {project?.images?.[0] ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${project.images[0]}')` }}
          ></div>
        ) : (
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent"></div>

        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          <Link
            href="/"
            className="absolute top-8 left-8 flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="max-w-5xl mx-auto w-full">
            <div className="flex items-center gap-3 mb-2">
              {params.type === "web" ? (
                <Code className="w-6 h-6 text-purple-400" />
              ) : params.type === "game" ? (
                <Gamepad2 className="w-6 h-6 text-purple-400" />
              ) : project.cardStyle === "geometry" ? (
                <SquareRadical className="w-6 h-6 text-purple-400" />
              ) : (
                <Terminal className="w-6 h-6 text-purple-400" />
              )}
              <div className="text-sm uppercase tracking-wider text-purple-300">
                {params.type === "web" ? "Web Development" : params.type === "game" ? "Game Development" : "Other Project"}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 glitch" data-text={project.title}>
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-gray-800/80 text-purple-300 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-[2fr_1fr] gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.fullDescription || project.description}</p>

            {project.images && project.images.length > 0 ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-purple-500/20"
                    >
                      <img
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </>
            ) : project.cardStyle ? (
              <>
                <h2 className="text-2xl font-semibold mb-4">
                  {project.cardStyle === "geometry" ? "A solved problem" : "Running it"}
                </h2>
                <div className="mb-8 overflow-hidden rounded-2xl bg-[#0a0a0f] ring-1 ring-white/[0.08]">
                  <div className="relative flex justify-center px-8 py-12">
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_50%_30%,rgba(139,92,246,0.14),transparent_70%)]"
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <ShowcaseArt cardStyle={project.cardStyle} />
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>

          <div>
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 sticky top-8">
              <h3 className="text-xl font-semibold mb-4">Project Links</h3>

              <div className="space-y-4">
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>View Source Code</span>
                  </a>
                )}

                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>{project.cardStyle === "geometry" ? "Get it on Google Play" : "View Live Demo"}</span>
                  </a>
                )}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
