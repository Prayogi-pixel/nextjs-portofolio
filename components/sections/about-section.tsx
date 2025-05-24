"use client"

import { SKILLS } from "@/lib/constants"
import Image from "next/image"

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">About Me</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        I work with modern technologies to build clean and scalable web applications.
      </p>

      <div className="flex justify-center flex-wrap gap-6">
        {SKILLS.map((iconPath, index) => (
          <Image
            key={index}
            src={iconPath}
            alt={`Skill ${index + 1}`}
            width={48}
            height={48}
            className="transition-transform hover:scale-110"
          />
        ))}
      </div>
    </section>
  )
}
