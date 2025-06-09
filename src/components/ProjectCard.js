'use client'
import Image from "next/image"
import Link from "next/link";

export default function ProjectCard({project, index}) {
    const isEven = index % 2 === 0;
    const imageCover = project.images?.[0] || null;

    return (
        <div className={`flex flex-col md:flex-row ${isEven ? '' : 'md:flex-row-reverse'} items-center md:justify-between md:gap-24 gap-12 m-8 items-stretch`}>
            <div className=" flex items-center justify-center">
                {imageCover && (
                    <Image 
                        src={project.images[0]} 
                        alt="{project.project_name} cover" 
                        width={300} 
                        height={300}
                        className="rounded-full image-cover shadow-xl"
                    />
                )}
            </div>
            <div className="flex flex-col justify-center text-black text-lg p-4 w-full md:w-2/3 xl:p-12 space-y-6 shadow-xl rounded-xl border border-[#c87377]">
                <div className="text-xl font-semibold">{project.project_name}</div>
                <div>{project.description[0]}</div>
                <Link href={`/projects/${project.slug}`} onClick={() => {sessionStorage.setItem('scrollY', window.scrollY);}} className="self-start inline-block border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2">Learn more</Link>
            </div>
        </div>
    )
}