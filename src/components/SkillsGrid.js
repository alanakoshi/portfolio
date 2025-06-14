'use client'
import Image from "next/image"

export default function SkillsGrid({ icons }) {
    return (
        <div className="overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-16 ">
                {[...icons].map((icons, index) => (
                    <Image key={index} src={icons.src} alt={icons.alt} width={80} height={80}/>
                ))}
            </div>
        </div>
    )
}