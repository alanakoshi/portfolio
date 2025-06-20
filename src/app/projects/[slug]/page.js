'use client'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { HiArrowLeft } from 'react-icons/hi';
import Carousel from "@/components/Carousel";

export default function ProjectPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function loadProject() {
            const res = await fetch('/projects.json');
            const data = await res.json();
            const found = data.find((p) => p.slug === slug);
            if (found) {
                found.descriptionText = found.description?.slice(1).join(' ') ?? '';
                setProject(found);
            } else {
                router.push('/404');
            }
        }
        loadProject();
    }, [slug]);

    if (!project)
        return <p>Loading...</p>;

    function handleBack() {
        sessionStorage.setItem('scrollTo', 'projects');
        router.push('/');
    }

    return(
        <div className="m-8 mt-20">
            <div className="md:m-8 space-y-2">
                <button onClick={handleBack} className="flex items-center gap-2 font-semibold text-xl underline cursor-pointer">
                    <HiArrowLeft className="w-5 h-5" />
                    Projects
                </button>
                <h1 className="text-3xl font-bold mb-4 text-center">{project.project_name}</h1>
            </div>
            <Carousel images={project.images}/>
            <div className="m-8 text-xl space-y-6">
                <div>{project.descriptionText}</div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="font-semibold"> Languages: </div>
                    <div>{project.languages.join(', ')}</div>
                </div>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="font-semibold">Tools and Technologies:</div>
                    <div>{project.toolsAndTech.join(', ')}</div>
                </div>
                <div>
                    {project.project_link && (
                        <a href={project.project_link} className="underline font-semibold">Website</a>
                    )}
                </div>
                <div>
                    <a href={project.github_link} className="underline font-semibold">GitHub</a>
                </div>
            </div>
        </div>
    )
}