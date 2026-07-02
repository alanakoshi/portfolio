import Image from "next/image"
import SkillsGrid from "../SkillsGrid"

export default function About() {
    const languageIcons = [
        {src: '/icons/java.png', alt: 'Java'},
        {src: '/icons/python.svg', alt: 'Python'},
        {src: '/icons/c.svg', alt: 'C'},
        {src: '/icons/c++.svg', alt: 'C++'},
        {src: '/icons/javascript.svg', alt: 'JavaScript'},
        {src: '/icons/typescript.svg', alt: 'TypeScript'},
        {src: '/icons/html.svg', alt: 'HTML'},
        {src: '/icons/css.svg', alt: 'CSS'},
        {src: '/icons/sql.png', alt: 'SQL'},
        {src: '/icons/swift.svg', alt: 'Swift'}
    ]

    const frameAndLibIcons = [
        {src: '/icons/react.svg', alt: 'React'},
        {src: '/icons/next.svg', alt: 'Next.js'},
        {src: '/icons/swiftui.png', alt: 'SwiftUI'},
        {src: '/icons/uikit.svg', alt: 'UIKit'},
        {src: '/icons/tensorflow.svg', alt: 'TensorFlow'},
        {src: '/icons/fastapi.svg', alt: 'FastAPI'},
        {src: '/icons/tailwind css.svg', alt: 'Tailwind CSS'},
        {src: '/icons/pandas.svg', alt: 'Pandas'},
        {src: '/icons/scikit-learn.png', alt: 'Scikit-learn'},
        {src: '/icons/numpy.svg', alt: 'NumPy'},
    ]

    const toolsAndPlatIcons = [
        {src: '/icons/git.svg', alt: 'Git'},
        {src: '/icons/github.svg', alt: 'GitHub'},
        {src: '/icons/gitlab.svg', alt: 'GitLab'},
        {src: '/icons/rest api.png', alt: 'REST APIs'},
        {src: '/icons/docker.svg', alt: 'Docker'},
        {src: '/icons/ci:cd.webp', alt: 'CI/CD'},
        {src: '/icons/aws.svg', alt: 'AWS'},
        {src: '/icons/firebase.svg', alt: 'Firebase'},
        {src: '/icons/supabase.svg', alt: 'Supabase'},
        {src: '/icons/vercel.svg', alt: 'Vercel'},
        {src: '/icons/figma.svg', alt: 'Figma'},
    ]

    return (
        <section id="about" className="mt-24" style={{scrollMarginTop: '6rem'}}>
            <div className="flex flex-col md:flex-row items-center m-8 justify-center items-stretch ">
                {/* Profile */}
                <div className="flex flex-col items-center relative m-8 overflow-hidden rounded-xl">
                    <Image src="/profile.jpg" alt="Profile" width={400} height={400} className="object-cover rounded-xl"/>
                    {/* External Links */}
                    <div className="flex flex-row justify-between w-full mt-6 m-2 px-2">
                        <a href="https://www.linkedin.com/in/alanakoshikawa/" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 sm:text-xl font-semibold">LinkedIn</a>
                        <a href="https://github.com/alanakoshi" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 sm:text-xl font-semibold">GitHub</a>
                        <a href="/resume.pdf" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 sm:text-xl font-semibold">Resume</a>
                    </div>
                </div>
                {/* About Message */}
                <div className="flex flex-col justify-center items-center mx-8 mb-8 md:my-8 text-black text-lg md:text-xl p-4 md:w-1/2 xl:p-16 2xl:p-24 space-y-6 shadow-xl rounded-xl border border-[#c87377]">
                    <p>
                        Hi, I’m Alana Koshikawa! I am a Computer Science graduate 
                        from the University of Texas at Austin with a minor in Business. 
                    </p>
                    <p>
                        I’m passionate about designing and building
                        intuitive, meaningful, and visually engaging apps,
                        as well as developing programs that automate tasks
                        and analyze data. In my free time, I enjoy exploring,
                        understanding, and experimenting with new technologies.
                        I also love creative, hands-on activities like crocheting,
                        baking, painting, and building models.
                    </p>
                </div>
            </div>
            {/* Skills */}
            <div className="w-full flex flex-col p-16 mt-8 bg-[rgba(200,115,119,0.2)]">
                <h1 className="text-2xl font-bold">Skills</h1>
                <h2 className="text-xl mt-4 mb-4 font-semibold">Languages</h2>
                <SkillsGrid icons={languageIcons}/>
                <h2 className="text-xl mt-8 mb-4 font-semibold">Frameworks and Libraries</h2>
                <SkillsGrid icons={frameAndLibIcons}/>
                <h2 className="text-xl mt-8 mb-4 font-semibold">Tools and Platforms</h2>
                <SkillsGrid icons={toolsAndPlatIcons}/>
            </div>
        </section>
    )
}