'use client'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";

export default function ProjectPage() {
    const { slug } = useParams();
    const router = useRouter();
    const [project, setProject] = useState(null);

    useEffect(() => {
        async function loadProject() {
            const res = await fetch('/projects.json');
            const data = await res.json();
            const found = data.find((p) => p.slug === slug);
            if (found)
                setProject(found);
            else
                router.push('/404');
        }
        loadProject();
    }, [slug]);

    if (!project)
        return <p>Loading...</p>;
    return(
        <div>
            <h1>{project.project_name}</h1>
            <div>
                {project.images.map((src, idx) => (
                    <Image key={idx} src={src} alt="{project_name} image" width={500} height={500}/>
                ))}
            </div>
            
        </div>
    )
}