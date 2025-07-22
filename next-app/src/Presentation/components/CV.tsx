"use client"

import Image from "next/image";
import { Mail, Phone, Linkedin, MapPin, Calendar, GraduationCap, Code, Briefcase, User } from "lucide-react";

import { contact, fullName, jobTitle, summary } from "@/Domain/cvData";
import styles from "./CV.module.css";

export default function CVPage() {
  return (
    <div className="w-[210mm] min-h-[297mm] bg-white">
      <header className="bg-secondary text-white pb-1">
        <div className="w-full flex flex-row justify-end">
          <div className={`absolute m-5 rounded-full overflow-hidden bg-highlight ${styles.distantRight}`}>
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
          <div className="m-10 mb-0">
            <h1 className="text-3xl font-bold">{fullName}</h1>
            <p className="mt-2 text-highlight">{jobTitle}</p>
            <p className="mt-1 text-sm w-3/4">{summary}</p>
          </div>
          <div className="flex flex-row justify-around bg-red-700 w-full">
            {contact.map((contact: {label: string, href: string | null, content: string}) => {
              return (
                <div key={contact.label} className="flex flex-row items-center p-2">
                  {contact.label === "Email" && <Mail className="mr-2" />}
                  {contact.label === "Phone" && <Phone className="mr-2" />}
                  {contact.label === "LinkedIn" && <Linkedin className="mr-2" />}
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
      <h1>End</h1>
    </div>
  )
}
