"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Award,
  Calendar,
  Bot,
  Github,
  Sparkles,
  Terminal,
  Wand2,
  Code2,
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [contactFormOpen, setContactFormOpen] = useState(false)

  const skills = [
    "AWS Infrastructure",
    "Docker",
    "Kubernetes",
    "Jenkins",
    "Linux Systems",
    "CI/CD Pipelines",
    "Nginx",
    "Apache",
    "Bash Scripting",
    "EC2",
    "EKS",
    "Lambda",
    "DynamoDB",
    "S3",
    "RDS",
    "IAM",
    "Route53",
    "CloudWatch",
    "Zabbix",
    "Proxmox",
    "WHM/cPanel",
    "Plesk",
    "Network Configuration",
    "System Security",
    "Cloud Migration",
    "Azure DevOps",
    "AI-Assisted DevOps",
  ]

  const aiTools = [
    {
      name: "Claude (Anthropic)",
      icon: Bot,
      description:
        "AI pair-programmer for infrastructure-as-code, shell scripting, automation, and writing clear runbooks & documentation.",
    },
    {
      name: "GitHub Copilot",
      icon: Github,
      description:
        "In-editor code completion that speeds up writing automation scripts, Terraform/Ansible configs, and CI/CD pipelines.",
    },
    {
      name: "ChatGPT / OpenAI Codex",
      icon: Terminal,
      description:
        "Troubleshooting production issues, drafting deployment pipelines, and generating boilerplate configuration quickly.",
    },
    {
      name: "Google Gemini",
      icon: Sparkles,
      description:
        "Researching cloud architecture options, summarizing logs, and exploring cost & performance optimization strategies.",
    },
    {
      name: "AI-Enabled IDEs (Cursor & co.)",
      icon: Code2,
      description:
        "Faster iteration on tooling and scripts with integrated AI suggestions, refactors, and inline explanations.",
    },
    {
      name: "Prompt Engineering",
      icon: Wand2,
      description:
        "Designing effective prompts to weave LLMs into day-to-day DevOps workflows, monitoring, and AIOps tasks.",
    },
  ]

  const experiences = [
    {
      company: "Webvio Technologies Pvt Ltd",
      role: "Sr. Cloud and System Engineer",
      period: "10/2025 – Present",
      location: "Kolkata, India",
      achievements: [
        "Designs and maintains scalable, secure cloud infrastructure on Linux, Proxmox, and AWS using EC2, EKS, Lambda, and DynamoDB",
        "Orchestrates containerized deployments leveraging Docker and Kubernetes to enhance application scalability",
        "Administers production VPS environments (Plesk, WHM/cPanel) supporting Node.js, React, and PBX solutions while ensuring proactive monitoring via Zabbix",
      ],
    },
    {
      company: "ZenoCloud | ServerGuy",
      role: "Sr. Cloud Support Engineer",
      period: "09/2021 – 09/2025",
      location: "Noida, India",
      achievements: [
        "Built scalable, secure AWS infrastructure using EC2, RDS, IAM, S3, Route53, Docker, and Kubernetes",
        "Managed production VPS hosting with Plesk, WHM/cPanel for apps like WordPress, Node.js, and React",
        "Led cost-effective cloud migrations, improving system performance and efficiency",
        "Applied AWS security best practices, ensuring compliance and minimizing vulnerabilities",
        "Created and maintained CI/CD pipelines with clear infrastructure documentation",
        "Deployed monitoring tools (UptimeRobot, Site24x7, CloudWatch, Zabbix) for proactive issue detection",
      ],
    },
    {
      company: "InSync Solutions",
      role: "System Engineer",
      period: "04/2020 – 09/2021",
      location: "Kolkata, India",
      achievements: [
        "Oversaw and enhanced AWS cloud infrastructure to ensure high availability for web applications",
        "Implemented and oversaw VDI, Lightsail, WHM/cPanel, and Plesk hosting solutions",
        "Managed SAP B1, HANA, CCTV, and Azure DevOps environments",
        "Regularly maintained, updated, and secured infrastructure, including VPC configurations and security groups",
        "Coordinated web servers, internal firewalls, and cloud infrastructure for over 100 virtual machines",
      ],
    },
    {
      company: "Matrix Media Solutions (P) Ltd.",
      role: "Hardware Networking Engineer",
      period: "09/2018 – 03/2020",
      location: "Kolkata, India",
      achievements: [
        "Installed, configured, and maintained Linux desktop and network environments, ensuring optimal performance",
        "Managed internal firewalls, web servers, and enterprise server infrastructure, along with proficient Bash scripting",
        "Quickly diagnosed and resolved hardware/software issues, significantly minimizing downtime",
        "Managed employee onboarding and offboarding processes",
      ],
    },
    {
      company: "Peetel Solutions Pvt. Ltd.",
      role: "Customer Support Engineer",
      period: "07/2017 – 08/2018",
      location: "Kolkata, India",
      achievements: [
        "Managed FTP submissions, E-Paper uploads, and network/printer operations to ensure seamless workflows",
        "Installed, configured, and troubleshooted PCs, OS, and applications for optimal performance",
        "Performed system patching, security updates, and software maintenance to enhance system stability and security",
      ],
    },
  ]

  const navLinks = [
    { href: "#skills", label: "Skills" },
    { href: "#ai-tools", label: "AI Tools" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="text-lg font-bold text-white">
            Prakas Rana<span className="text-emerald-400">.</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="hover:text-emerald-400 transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <Button
            size="sm"
            className="bg-emerald-500 text-slate-950 hover:bg-emerald-400"
            onClick={() => setContactFormOpen(true)}
          >
            Contact
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="relative overflow-hidden scroll-mt-16">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                Available for Cloud & DevOps roles
              </Badge>
              <h1 className="text-4xl font-bold text-white sm:text-6xl mt-4">Prakas Rana</h1>
              <p className="text-xl text-emerald-400 mt-3 font-medium">Linux & Cloud Support Engineer</p>
              <p className="text-lg text-slate-400 mt-6 leading-relaxed">
                Cloud Support & DevOps Engineer with 9+ years of experience managing AWS infrastructure, CI/CD
                automation, and Linux-based systems. Successfully managed 300+ production servers, ensuring 99.9%
                uptime and optimizing web performance for high-traffic platforms. Increasingly leveraging AI tools
                like Claude, GitHub Copilot, ChatGPT/Codex, and Gemini to automate workflows, accelerate
                troubleshooting, and ship faster.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-emerald-500 text-slate-950 hover:bg-emerald-400" onClick={() => setContactFormOpen(true)}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 bg-transparent text-slate-200 hover:bg-slate-800 hover:text-white"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/prakasrana/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-slate-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-emerald-400" />
                  +917003069781
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-emerald-400" />
                  me.prakasrana@gmail.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-400" />
                  Kolkata, WB
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2 text-emerald-400" />
                  linkedin.com/in/prakasrana
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-violet-500 blur-2xl opacity-30" />
                <div className="relative w-80 h-[28rem] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
                  <Image
                    src="/images/prakas-rana.jpg"
                    alt="Prakas Rana - Professional Photo"
                    width={320}
                    height={448}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-slate-950 px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">9+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-2">Technical Skills</h2>
          <p className="text-slate-400 text-center mb-12">Core infrastructure, platform, and automation expertise</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-slate-900 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-300 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-16 bg-slate-900/40 border-y border-white/5 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-2">AI-Augmented Workflow</h2>
          <p className="text-slate-400 text-center mb-12">
            Pairing modern AI tools with DevOps practices to move faster and troubleshoot smarter
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <Card
                  key={index}
                  className="bg-slate-900 border-slate-800 hover:border-violet-500/40 transition-colors"
                >
                  <CardHeader>
                    <div className="w-11 h-11 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-2">
                      <Icon className="w-5 h-5" />
                    </div>
                    <CardTitle className="text-lg text-white">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 leading-relaxed">{tool.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 border-l-4 border-l-emerald-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-emerald-400">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-slate-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center mt-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-slate-300">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-16 bg-slate-900/40 border-y border-white/5 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
              <div className="space-y-6">
                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription className="text-slate-400">
                      Maulana Abul Kalam Azad University of Technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      08/2023 – 08/2025 | Kolkata, India
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-900 border-slate-800">
                  <CardHeader>
                    <CardTitle className="text-lg text-white">Bachelor of Computer Applications (BCA)</CardTitle>
                    <CardDescription className="text-slate-400">
                      Maulana Abul Kalam Azad University of Technology
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-slate-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      09/2015 – 11/2018 | Kolkata, India
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h2>
              <div className="space-y-6">
                <Card className="bg-slate-900 border-slate-800 border-l-4 border-l-amber-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-amber-500 mr-2" />
                      <CardTitle className="text-lg text-white">Red Hat Certified System Administrator (RHCSA)</CardTitle>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-900 border-slate-800 border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-purple-500 mr-2" />
                      <CardTitle className="text-lg text-white">Poster Competition Winner</CardTitle>
                    </div>
                    <CardDescription className="text-slate-400">
                      IoT-Based Temperature and Humidity Monitoring & Alerting System, JIS University, Kolkata
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="bg-slate-900 border-slate-800 border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-green-500 mr-2" />
                      <CardTitle className="text-lg text-white">Hackathon Project</CardTitle>
                    </div>
                    <CardDescription className="text-slate-400">
                      Developed and implemented a Password Manager during InSync Hackathon
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-950 py-12 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
          <p className="text-slate-400 mb-8">
            Actively seeking Cloud or DevOps roles to drive scalable, secure, and AI-augmented infrastructure
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:me.prakasrana@gmail.com?subject=Hiring%20Prakas%20Rana"
              className="flex flex-col items-start px-6 py-4 rounded-xl border border-slate-700 bg-slate-900 hover:border-emerald-500 hover:bg-slate-800 transition-colors min-w-[200px]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">Email</span>
              <span className="text-slate-200 text-sm">me.prakasrana@gmail.com</span>
            </a>
            <a
              href="tel:+917003069781"
              className="flex flex-col items-start px-6 py-4 rounded-xl border border-slate-700 bg-slate-900 hover:border-emerald-500 hover:bg-slate-800 transition-colors min-w-[200px]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">Phone</span>
              <span className="text-slate-200 text-sm">+91 7003069781</span>
            </a>
            <a
              href="https://www.linkedin.com/in/prakasrana/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-start px-6 py-4 rounded-xl border border-slate-700 bg-slate-900 hover:border-emerald-500 hover:bg-slate-800 transition-colors min-w-[200px]"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-1">LinkedIn</span>
              <span className="text-slate-200 text-sm">linkedin.com/in/prakasrana</span>
            </a>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5 text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Prakas Rana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </div>
  )
}
