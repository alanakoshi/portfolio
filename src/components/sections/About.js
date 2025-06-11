import Image from "next/image"
import SkillsGrid from "../SkillsGrid"

export default function About() {
    const languageIcons = [
        {src: 'icons/c.svg', alt: 'C'},
        {src: 'icons/css.svg', alt: 'CSS'},
        {src: 'icons/html.svg', alt: 'HTML'},
        {src: 'icons/java.svg', alt: 'Java'},
        {src: 'icons/javascript.svg', alt: 'JavaScript'},
        {src: 'icons/python.svg', alt: 'Python'},
        {src: 'icons/rust.svg', alt: 'Rust'},
    ]
    const toolsAndTechIcons = [
        {src: 'icons/aws.svg', alt: 'AWS'},
        {src: 'icons/docker.svg', alt: 'Docker'},
        {src: 'icons/figma.svg', alt: 'Figma'},
        {src: 'icons/firebase.svg', alt: 'Firebase'},
        {src: 'icons/github.svg', alt: 'GitHub'},
        {src: 'icons/react.svg', alt: 'React'},
        {src: 'icons/vercel.svg', alt: 'Vercel'},
        {src: 'icons/vs-code.svg', alt: 'VS-Code'},
    ]

    return (
        <section id="about" className="m-8 mt-24">
            <div className="flex flex-col md:flex-row items-center justify-center items-stretch ">
                {/* Profile */}
                <div className="flex flex-col items-center relative m-8 overflow-hidden rounded-xl">
                <Image src="/profile.jpg" alt="Profile" width={400} height={400} className="object-cover rounded-xl"/>
                {/* External Links */}
                <div className="flex flex-row justify-center gap-2 md:gap-16 mt-6 m-2">
                    <a href="https://www.linkedin.com/in/alanakoshikawa/" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 md:text-xl font-semibold">LinkedIn</a>
                    <a href="https://github.com/alanakoshi" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 md:text-xl font-semibold">GitHub</a>
                    <a href="/resume.pdf" className="border rounded-2xl border-[#c87377] bg-[#c87377] text-white hover:scale-110 px-2 md:text-xl font-semibold">Resume</a>
                </div>
                </div>
                {/* About Message */}
                <div className="flex flex-col justify-center items-center m-8 text-black text-lg p-4 md:w-1/2 xl:p-12 space-y-6 shadow-xl rounded-xl border border-[#c87377]">
                <p>
                    Hi, I’m Alana Koshikawa! I am an upcoming senior 
                    at the University of Texas at Austin, majoring in
                    Computer Science with a minor in Business. 
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
            <div className="flex flex-col m-8">
                <h1 className="text-2xl font-semibold">Skills</h1>
                <h2 className="text-xl mt-4 mb-4 font-semibold">Languages</h2>
                <SkillsGrid icons={languageIcons}/>
                <h2 className="text-xl mt-8 mb-4 font-semibold">Tools and Technologies</h2>
                <SkillsGrid icons={toolsAndTechIcons}/>
            </div>
        </section>
    )
}