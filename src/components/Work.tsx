import ShowCase from "@/components/ShowCase";

function WorkPage() {
  return(
  <section id="work" className="min-h-full max-w-7xl flex flex-col my-0 mx-auto gap-10 pb-10">
    <p className="text-[#822820] text-4xl font-medium pt-28 mx-auto my-0"> Project</p>
    <div className="flex flex-wrap justify-center items-center gap-20">
     <ShowCase
      src="/audit.png"
      width={350}
      height={150}
      link="https://audit-beta.vercel.app/"
      title="https://audit-beta.vercel.app/"
    />
     <ShowCase
      src="/story.png"
      width={150}
      height={250}
      link="https://eternalstory.com.mo/zh"
      title="https://audit-beta.vercel.app/"
    />
      <ShowCase
      src="/fcc.png"
      width={350}
      height={150}
      link="https://fcc-final-react-project.vercel.app/"
      title="https://audit-beta.vercel.app/"
    />
    </div>
  </section>
  )
}

export default WorkPage;
