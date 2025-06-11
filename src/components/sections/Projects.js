'use client'
import { useEffect, useState } from "react"
import ProjectCard from "../ProjectCard"

export default function Projects() {
    const [projects, setProjects] = useState([]);
    
    useEffect(() => {
        fetch('/projects.json')
        .then(res => res.json())
        .then(setProjects);
    }, []);
    
    return (
        <section id="projects" className="m-16">
            <h1 className="text-2xl font-semibold">Projects</h1>
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} index={index}/>
                ))}
            </div>
        </section>
    )
}