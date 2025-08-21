"use client"

import Image from "next/image";
import {Mail, Smartphone, Linkedin, MapPin, Calendar, GraduationCap, Code, Briefcase, User, Github} from "lucide-react";

import {
  contact,
  experienceList,
  fullName,
  jobTitle,
  languages,
  personalProjects,
  summary,
  technologies
} from "@/Domain/cvData";
import styles from "./CV.module.css";

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <div className="mb-2">
    <h3 className="text-highlight text-xl font-semibold mb-2">{title}</h3>
    <div className="text-gray-700">{children}</div>
  </div>
);

const education = [
  {
    diploma: "Licence professionnelle Systèmes Audiovisuels Numériques",
    school: "INA",
    duration: "09/2012 - 09/2013",
    location: "Paris",
  },
  {
    diploma: "BTS Audiovisuel: Techniques d'Ingénierie et Exploitation des Équipements",
    school: "Lycée Viette",
    duration: "09/2008 - 09/2010",
    location: "Montbéliard",
  },
];

export default function CVPage() {
  return (
    <div className="w-[210mm] h-[297mm] bg-white overflow-hidden" style={{pageBreakInside: "avoid"}}>
      <header className="bg-alt-secondary-background text-white">
        <div className="w-full flex flex-row justify-end">
          <div className={`absolute m-8 rounded-full overflow-hidden bg-highlight ${styles.distantRight}`}>
            <Image
              className="rounded-full m-1"
              src="/profilepic.jpg"
              alt="Profile Picture"
              width={110}
              height={110}
            />
          </div>
        </div>
        <div className="">
          <div className="m-10 mb-4">
            <h1 className="text-3xl font-bold">{fullName}</h1>
            <p className="mt-2 text-highlight text-xl">{jobTitle}</p>
            <p className="mt-1 w-3/4">{summary}</p>
          </div>
          <div className="flex flex-row justify-around w-full bg-secondary-background pl-4 pr-4">
            {contact.map((contact: {label: string, href: string | null, content: string}) => {
              return (
                <div key={contact.label} className="flex flex-row items-center p-2 text-sm">
                  {contact.label === "Email" && <Mail className="mr-2 w-6" />}
                  {contact.label === "Phone" && <Smartphone className="mr-2 w-6" />}
                  {contact.label === "LinkedIn" && <Linkedin className="mr-2 w-6" />}
                  {contact.label === "Github" && <Github className="mr-2 w-6" />}
                  {contact.href ? (
                    <a href={contact.href} className="text-white hover:underline">
                      {contact.content}
                    </a>
                  ) : (
                    <span className="text-white">{contact.content}</span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </header>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-2/3 m-6">
          <Section title="EXPÉRIENCES">
            {experienceList.map((experience) => (
              <div key={experience.title} className="mb-3">
                <div className="flex flex-row items-center mb-1">
                  <h4 className="text-lg font-semibold">{experience.title}</h4>
                </div>
                <div className="flex flex-row items-center mb-1">
                  <Briefcase className="mr-2 w-5 h-5" />
                  <span className="text-gray-700">{experience.company}</span>
                {experience.location && (<div className="flex flex-row items-center ml-3">
                    <MapPin className="mr-2 w-5" />
                    <span className="text-gray-700">{experience.location}</span>
                </div>)}
                  <Calendar className="mr-2 w-5 items-center ml-3" />
                  <span className="text-gray-700">{experience.duration}</span>
                </div>
                <ul className="list-disc pl-5 text-gray-700">
                  {experience.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Section>
          <Section title={"DIPLÔMES"}>
            {education.map((education, i) => (
              <div key={education.diploma} className="mb-1">
                <div className="flex flex-row items-center mb-0">
                  <h4 className={"text-lg font-semibold"}>
                    { i===1 ? <><span className={`text-lg font-semibold ${i === 1 ? "absolute": ""}`}>{education.diploma}</span><span className='h-7'>&nbsp;</span></> : education.diploma}
                  </h4>
                </div>
                <div className="flex flex-row items-center mb-0">
                  <GraduationCap className="mr-2 w-5 h-5" />
                  <span className="text-gray-700">{education.school}</span>
                  <span className="w-2"/>
                  {education.location && (<>
                      <MapPin className="mr-2 w-5" />
                      <span className="text-gray-700">{education.location}</span>
                    </>
                  )}
                  <Calendar className="mr-2 w-5 ml-3" />
                  <span className="text-gray-700">{education.duration}</span>
                </div>
              </div>
            ))}
          </Section>
        </div>
        <div className="flex flex-col w-1/3 m-6 ml-0">
          <Section title="TECHNOLOGIES">
            <div className="flex flex-wrap mb-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="px-3 py-2 rounded-sm" style={{backgroundColor: tech.color, margin: 2}} >
                    <span className="text-white font-bold">{tech.name}</span>
                </div>
              ))}
            </div>
          </Section>
          <Section title={"PROJETS PERSONNELS"}>
            {personalProjects.map((project) => (
              <div key={project.name} className="mb-3">
                <div className="flex flex-row items-center mb-1">
                  <h4 className="text-lg font-semibold">{project.name}</h4>
                </div>
                <div className="flex flex-row items-center mb-1">
                  <span className="text-gray-700 indent-4">{project.description}</span>
                </div>
              </div>
            ))}
          </Section>
          <Section title="LANGUES">
            {languages.map((language) => (
              <div key={language.name} className="mb-3">
                <div className="flex flex-row items-center mb-1">
                  <Image src={language.href} alt={language.name} width={30} height={30} className="mr-2" />
                  <span className="text-gray-700">{language.level}</span>
                </div>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  )
}
