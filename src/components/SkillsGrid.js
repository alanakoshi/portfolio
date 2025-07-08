'use client'
import Image from "next/image"

export default function SkillsGrid({ icons }) {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-16">
                {icons.map((icon, index) => (
                    <div className="flex gap-4 items-center justify-start" key={index}>
                        <Image src={icon.src} alt={icon.alt} width={60} height={60} className="w-10 sm:w-15"/>
                        <div className="flex items-center text-lg">{icon.alt}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}