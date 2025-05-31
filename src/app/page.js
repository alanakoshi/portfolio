import Image from "next/image"
import SkillsGrid from "@/components/SkillsGrid";

export default function Home() {
  const languageIcons = [
    {src: '/c.svg', alt: 'C'},
    {src: '/css.svg', alt: 'CSS'},
    {src: '/html.svg', alt: 'HTML'},
    {src: '/java.svg', alt: 'Java'},
    {src: '/javascript.svg', alt: 'JavaScript'},
    {src: '/python.svg', alt: 'Python'},
    {src: '/rust.svg', alt: 'Rust'},
  ]
  const toolsAndTechIcons = [
    {src: '/aws.svg', alt: 'AWS'},
    {src: '/docker.svg', alt: 'Docker'},
    {src: '/figma.svg', alt: 'Figma'},
    {src: '/firebase.svg', alt: 'Firebase'},
    {src: '/github.svg', alt: 'GitHub'},
    {src: '/react.svg', alt: 'React'},
    {src: '/vercel.svg', alt: 'Vercel'},
    {src: '/vs-code.svg', alt: 'VS-Code'},
  ]
  return (
    <main className="m-8">
      <section id="home"></section>
      <section id="about" className="mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center items-stretch ">
          {/* Profile */}
          <div className="flex justify-center relative m-8 overflow-hidden rounded-xl">
            <Image src="/profile.jpg" alt="Profile" width={400} height={400} className="object-cover rounded-xl"/>
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
          <h1 className="text-2xl">Skills</h1>
          <h2 className="text-xl mt-4 mb-4">Languages</h2>
          <SkillsGrid icons={languageIcons}/>
          <h2 className="text-xl mt-8 mb-4">Tools and Technologies</h2>
          <SkillsGrid icons={toolsAndTechIcons}/>
        </div>
      </section>
      <section id="projects"></section>
    </main>
  );
}
