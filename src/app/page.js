import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section id="home"></section>
      <section id="about" className="mt-24">
        <div className="flex flex-col md:flex-row items-center justify-center items-stretch ">
          <div className="flex justify-center relative m-8 overflow-hidden rounded-xl">
            <Image src="/profile.jpg" alt="Profile" width={400} height={400} className="object-cover rounded-xl"/>
          </div>
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
      </section>
      <section id="projects"></section>
    </main>
  );
}
