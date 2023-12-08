
function AboutPage() {
  return (
    <section id="about" className="min-h-screen flex flex-col  bg-[#C29B9A] pb-10">
      <div className="flex flex-col  max-w-7xl my-0 mx-auto">
        <div className="h-16"></div>
      </div>
      <div className="flex flex-col gap-10 max-w-7xl my-0 mx-auto">
        <h1 className="text-[#822820] text-4xl font-medium flex pt-10 justify-center">
          About me
        </h1>
        <div className="w-full flex flex-col justify-center pl-4">
        <h2 className="text-white text-xl">
        MY EDUCATION
        <div className="border-b-2 max-w-[150px]"></div>
        </h2>
         <p className="pt-4 text-lg">National Taiwan University of Art The Dept. of Dance.</p>
        </div>
        <div className="w-full pl-4">
        <h2 className="text-white text-xl">
        MY EXPEREINCES
        <div className="border-b-2 max-w-[150px]"></div>
        </h2>
         <li className="pt-4 text-lg">Frontend Developer - Now</li>
         <p className=" text-gray-800/70">Jul 2023 - Now at Story Never Die Studio</p>
         <li className="pt-4 text-lg">Frontend Developer Intern - Now</li>
         <p className=" text-gray-800/70">Sep 2023 - Now at TVBS</p>
         <li className="pt-4 text-lg">Software Developer Intern</li>
         <p className=" text-gray-800/70">Feb 2023 - Sep 2023 at Dentall.TW </p>
        </div>
        <div className="w-full pl-4">
        <h2 className="text-white text-xl">
        MY SKILLS
        <div className="border-b-2 max-w-[150px]"></div>
        </h2>
         <li className="pt-4 text-lg">HTML, CSS, JavaScript, TypeScript</li>
         <li className="pt-4 text-lg">ReactJS, NextJS</li>
         <li className="pt-4 text-lg">Tailwind CSS, Tailwind UI, Shadcn UI, Materia UI,  Antdesign, Other UI library, Figma</li>
         <li className="pt-4 text-lg">NextAuth, Vercel, Firebase, Git, Github, RWD, GTM</li>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
