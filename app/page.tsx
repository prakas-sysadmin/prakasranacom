"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin, Award, Calendar } from "lucide-react"
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
    "S3",
    "RDS",
    "IAM",
    "Route53",
    "CloudWatch",
    "Zabbix",
    "WHM/cPanel",
    "Plesk",
    "Network Configuration",
    "System Security",
    "Cloud Migration",
    "Azure DevOps",
  ]

  const experiences = [
    {
      company: "ZenoCloud | ServerGuy",
      role: "Sr. Cloud Support Engineer",
      period: "09/2021 – present",
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Prakas Rana</h1>
              <p className="text-xl text-gray-600 mt-4">Linux & Cloud Support Engineer</p>
              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                Cloud Support & DevOps Engineer with 7+ years of experience in managing AWS infrastructure, CI/CD
                automation, and Linux-based systems. Successfully managed 300+ production servers, ensuring 99.9% uptime
                and optimizing web performance for high-traffic platforms.
              </p>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => setContactFormOpen(true)}>
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://www.linkedin.com/in/prakasrana/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm text-gray-600">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-emerald-600" />
                  +917003069781
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-emerald-600" />
                  me.prakas95@gmail.com
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-emerald-600" />
                  Kolkata, WB
                </div>
                <div className="flex items-center">
                  <Linkedin className="w-4 h-4 mr-2 text-emerald-600" />
                  linkedin.com/in/prakasrana
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/prakas-photo.jpg"
                    alt="Prakas Rana - Professional Photo"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg">
                  <span className="font-semibold">7+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Skills</h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Professional Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl text-gray-900">{exp.role}</CardTitle>
                      <CardDescription className="text-lg font-medium text-emerald-600">{exp.company}</CardDescription>
                    </div>
                    <div className="flex flex-col sm:items-end text-sm text-gray-600">
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
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{achievement}</span>
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Education</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Master of Computer Applications (MCA)</CardTitle>
                    <CardDescription>Maulana Abul Kalam Azad University of Technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      08/2023 – 08/2025 | Kolkata, India
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bachelor of Computer Applications (BCA)</CardTitle>
                    <CardDescription>Maulana Abul Kalam Azad University of Technology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      09/2015 – 11/2018 | Kolkata, India
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Certifications & Achievements */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Certifications & Achievements</h2>
              <div className="space-y-6">
                <Card className="border-l-4 border-l-amber-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-amber-500 mr-2" />
                      <CardTitle className="text-lg">Red Hat Certified System Administrator (RHCSA)</CardTitle>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-purple-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-purple-500 mr-2" />
                      <CardTitle className="text-lg">Poster Competition Winner</CardTitle>
                    </div>
                    <CardDescription>
                      IoT-Based Temperature and Humidity Monitoring & Alerting System, JIS University, Kolkata
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card className="border-l-4 border-l-green-500">
                  <CardHeader>
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-green-500 mr-2" />
                      <CardTitle className="text-lg">Hackathon Project</CardTitle>
                    </div>
                    <CardDescription>
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
          <p className="text-gray-300 mb-8">
            Actively seeking Cloud or DevOps roles to drive scalable, secure, and automated infrastructure solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              onClick={() => setContactFormOpen(true)}
            >
              <Mail className="w-4 h-4 mr-2" />
              me.prakas95@gmail.com
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
            >
              <Phone className="w-4 h-4 mr-2" />
              +917003069781
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 bg-transparent"
              asChild
            >
              <a href="https://www.linkedin.com/in/prakasrana/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn Profile
              </a>
            </Button>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-gray-400">
            <p>&copy; 2025 Prakas Rana. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      <ContactForm open={contactFormOpen} onOpenChange={setContactFormOpen} />
    </div>
  )
}
