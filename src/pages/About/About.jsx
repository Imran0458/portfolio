import HeroImg from "@/assets/images/hero.jpg";
export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, and Lifelong Learner
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
  Hello! I'm Shaik Imran, a passionate Full-Stack Developer and
  B.Tech student specializing in Computer Science and Engineering
  (AI & ML). I enjoy building modern, responsive, and user-friendly
  web applications using technologies like HTML, CSS, JavaScript,
  React, and Python.
</p>

<p className="text-white">
  My focus is on improving my development skills and creating
  practical web solutions that provide great user experiences.
  I am currently expanding my knowledge in backend development,
  databases, and full-stack technologies to build complete and
  scalable applications.
</p>

<div className="pt-6">
  <blockquote className="border-l-4 border-gray-300 pl-4">
    <p className="text-white">
      I'm a self-motivated developer and lifelong learner who is
      passionate about technology, problem-solving, and building
      meaningful projects. My goal is to continuously improve my
      skills and grow as a professional software developer while
      contributing to real-world projects.
    </p>

    <div className="mt-6 space-y-3">
      <cite className="block font-medium text-white">
        Shaik Imran
      </cite>

      <div className="flex items-center gap-2">
        {/* Add social icons or other content here */}
      </div>
    </div>
  </blockquote>
</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
