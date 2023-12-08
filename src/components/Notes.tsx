import Image from "next/image";
import ShowCase from "@/components/ShowCase";
function CertificatePage() {
  return(
  <section id="certificate" className="min-h-screen bg-[#C29B9A] w-full">
    <div className="max-w-7xl flex flex-col my-0 mx-auto gap-10 pb-10">
    <p className="text-[#822820] text-4xl font-medium pt-28 mx-auto my-0">CertificatePage</p>
     <div className="flex flex-wrap justify-center items-center gap-20">
     <ShowCase
      src="/responsive.png"
      width={310}
      height={210}
      title="Responsive Web Design"
      link="https://www.freecodecamp.org/certification/Rhaenyra-Liang/responsive-web-design"
    />
     <ShowCase
      src="/javascript.png"
      width={300}
      height={200}
      title="JavaScript Algorithms and Data Structures"
      link="https://www.freecodecamp.org/certification/Rhaenyra-Liang/javascript-algorithms-and-data-structures"  
        />
    </div>
      </div>
  </section>
  ) 
}

export default CertificatePage;
