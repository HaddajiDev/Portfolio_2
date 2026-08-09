"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowDown, Code, Gamepad2, Terminal, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { projects, personalInfo, skills } from "@/lib/data"
import { useCursor } from "@/hooks/use-cursor"
import axios from 'axios';
import { message } from 'antd';
import { useAlert } from "../components/AlertProvider";
import Silk from "@/components/Silk"
import Beams from "@/components/Beams"
import Threads from '@/components/Threads';
import Particles from "@/components/particales"
import TiltedCard from "@/components/TiltedCard"
import { ShowcaseCard } from "@/components/showcase-cards"

export default function Portfolio() {
  useCursor()

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
          <Silk
            speed={15}
            scale={1}
            color="#301934"
            noiseIntensity={1.5}
            rotation={0}
          />
      </div> */}

      <div>
        <div className="absolute inset-0 z-0">
          <Beams
            beamWidth={3}
            beamHeight={30}
            beamNumber={20}
            lightColor="#9370DB"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
      </div>

      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-purple-900/20 opacity-30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-700/30 rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-800/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      </div> */}

      <div className="z-10 text-center px-4">
        <div className="mb-4">
          <h1 className="text-5xl md:text-7xl font-bold gradient-text animate-gradient">{personalInfo.name}</h1>
        </div>

        <div className="typewriter-container mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-purple-500/20">
              <Code className="w-5 h-5 text-purple-400" />
              <span className="typewriter" data-text="Web Developer">
                Web Developer
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-purple-500/20">
              <Gamepad2 className="w-5 h-5 text-purple-400" />
              <span className="typewriter" data-text="Game Developer">
                Game Developer
              </span>
            </div>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto animate-pulse-slow">
          Creating immersive digital experiences through code and design
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  )
}

function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            About Me
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-1 gap-8 items-center"
        >
          <div className="code-editor-container bg-gray-950 rounded-xl overflow-hidden border border-purple-500/20 shadow-xl">
            <div className="code-editor-header bg-gray-900 px-4 py-2 flex items-center justify-between border-b border-gray-800">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-sm text-gray-400">ahmed_haddaji.js</div>
              <div className="w-4"></div>
            </div>

            <div className="code-editor-content p-6 font-mono text-sm md:text-base relative overflow-hidden">
              <div className="line-numbers absolute left-0 top-0 p-6 text-gray-600 select-none">
                {Array.from({ length: 33 }, (_, i) => (
                  <div key={i} className="line-number">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>

              <div className="code-content pl-12">
                <div>
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Ahmed_Haddaji</span>{" "}
                  {`{`}
                </div>
                <div className="pl-4">
                  <span className="text-purple-400">constructor</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">name</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.name}'</span>;
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">age</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.age}'</span>;
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">this</span>.<span className="text-green-300">email</span> ={" "}
                  <span className="text-orange-300">'{personalInfo.email}'</span>;
                </div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">workExperience</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {personalInfo.workExperience.map((exp, index) => {
                  const [period, role] = Object.entries(exp)[0]
                  return (
                    <div key={index} className="pl-12">
                      {`{ `}
                      <span className="text-orange-300">'{period}'</span> :{" "}
                      <span className="text-orange-300">'{role}'</span> {`}`},
                    </div>
                  )
                })}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">education</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {personalInfo.education.map((edu, index) => {
                  const [period, institution] = Object.entries(edu)[0]
                  return (
                    <div key={index} className="pl-12">
                      {`{ `}
                      <span className="text-orange-300">'{period}'</span> :{" "}
                      <span className="text-orange-300">'{institution}'</span> {`}`}
                      {index < personalInfo.education.length - 1 ? "," : ""}
                    </div>
                  )
                })}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div className="pl-4"></div>
                <div className="pl-4">
                  <span className="text-purple-400">skills</span>() {`{`}
                </div>
                <div className="pl-8">
                  <span className="text-blue-400">return</span> [
                </div>
                {/* Group skills into chunks of 5 for better display */}
                {Array.from({ length: Math.ceil(personalInfo.skills.length / 5) }).map((_, chunkIndex) => (
                  <div key={chunkIndex} className="pl-12">
                    {personalInfo.skills.slice(chunkIndex * 5, chunkIndex * 5 + 5).map((skill, i) => (
                      <span key={i}>
                        <span className="text-orange-300">'{skill}'</span>
                        {chunkIndex * 5 + i < personalInfo.skills.length - 1 ? ", " : ""}
                      </span>
                    ))}
                    {chunkIndex < Math.ceil(personalInfo.skills.length / 5) - 1 ? "," : ""}
                  </div>
                ))}
                <div className="pl-8">];</div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>

              <div className="cursor-blink absolute"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-800/10 rounded-full filter blur-3xl"></div>
      </div> */}

      <div className="absolute inset-0 z-0">
      <Particles
        particleColors={['#DA70D6', '#9370DB']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
      />
      </div> 

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Web Development</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.web.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm border border-purple-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-xl font-semibold">Game Development</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.game.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                  className="px-3 py-1 bg-gray-800 text-purple-300 rounded-full text-sm border border-purple-500/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, type, index } : any) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <motion.div // Retaining the framer-motion wrapper for entry animations
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <Link href={`/projects/${type}/${project.slug}`}>
      {type === "other" ? (
        <ShowcaseCard project={project} />
      ) : (
      <TiltedCard
        imageSrc={project.images?.[0] || `/placeholder.svg?height=240&width=400`}
        altText={`${project.title} preview`}
        captionText={project.title}

        containerHeight="300px" 
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"

        rotateAmplitude={12}
        scaleOnHover={1.05} 
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <div className="p-4 ">
            
              <p className="text-white bold p-1 mb-3 text-lg leading-relaxed line-clamp-3 ">
                {project.title}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag: any) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-700/60  text-purple-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* <div className="flex justify-end">
                <Link
                  href={`/projects/${type}/${project.slug}`}
                  className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center gap-1 group-hover:underline"
                >
                  View Project
                </Link>
              </div> */}
            
          </div>
        }
      />
      )}
      </Link>
    </motion.div>
  );
}

function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.1 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">A showcase of my work across web and game development</p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <Code className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold">Web Development Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.web.map((project, index) => (
                <ProjectCard key={project.slug} project={project} type="web" index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.1}}
              className="flex items-center gap-3 mb-8"
            >
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold">Game Development Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.game.map((project, index) => (
                <ProjectCard key={project.slug} project={project} type="game" index={index} />
              ))}
            </div>
          </div>

          <div>
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
              initial="hidden"
              animate={controls}
              transition={{ duration: 0.1}}
              className="flex items-center gap-3 mb-8"
            >
              <Terminal className="w-6 h-6 text-purple-400" />
              <h3 className="text-2xl font-semibold">Other Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.other.map((project, index) => (
                <ProjectCard key={project.slug} project={project} type="other" index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Alert(title: String, msg: String){
  return(
    <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg">
      <p className="text-lg font-semibold">{title}</p>
      <p>{msg}</p>
    </div>
  )
}

axios.defaults.withCredentials = false;

function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()
  const [name, setName] = useState<string>()
  const [email, setEmail] = useState<string>()
  const [_message, setMessage] = useState<string>()
  const [priority, setPriority] = useState<string>("low")
  const { showAlert } = useAlert()
  const [loading, setLoading] = useState<boolean>(false)

  const sendInfo = async (name: string, email: string, _message: string, priority: string) => {
    try {
      setLoading(true)
      await axios.post("https://contact-dashboard-ashen.vercel.app/api/new", {
        name,
        email,
        message: _message,
        priority,
      })
      showAlert("Success", "Thank You For You Message <3", "success")
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = () => {
    try {
      if (name && email && _message && priority) {
        sendInfo(name, email, _message, priority)
      } else {
        showAlert("Error", "You Have To Fill All The Feilds", "error")
      }
    } catch (error) {}
  }
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 relative overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 left-0 w-full h-full bg-purple-900/10 opacity-30"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-800/20 rounded-full filter blur-3xl"></div>
      </div> */}
      <div className="absolute inset-0 z-0">
      <Silk
            speed={15}
            scale={1}
            color="#301934"
            noiseIntensity={1.5}
            rotation={0}
          />
      </div> 

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">Interested in working together? Feel free to reach out!</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">Let's Connect</h3>
            <p className="text-gray-300">
              Whether you have a project in mind or just want to chat about technology, I'm always open to new
              opportunities and collaborations.
            </p>

            <div className="space-y-4">
              <Link
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </Link>

              <Link
                href="https://github.com/HaddajiDev"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>github.com/HaddajiDev</span>
              </Link>

              <Link
                href="www.linkedin.com/in/ahmed-haddaji-b70953299"
                className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>linkedin.com/in/ahmedhaddaji</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
            initial="hidden"
            animate={controls}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20"
          >
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                  placeholder="Your message"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="priority" className="block text-sm font-medium text-gray-300 mb-1">
                  Priority
                </label>
                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-200"
                >
                  <option value="low" className="bg-gray-800">
                    Low Priority
                  </option>
                  <option value="medium" className="bg-gray-800">
                    Medium Priority
                  </option>
                  <option value="high" className="bg-gray-800">
                    High Priority
                  </option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center"
                onClick={() => handleSubmit()}
                disabled={loading}
              >
                {loading ? (
                  <div role="status" className="flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
