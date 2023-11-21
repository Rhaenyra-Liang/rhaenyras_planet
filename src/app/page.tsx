import { FaSquareFacebook, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import ContactPage from "@/components/Contact";
import CertificatePage from "@/components/Notes";
import WorkPage from "@/components/Work";
import AboutPage from "@/components/about";
export default function t() {
  return (
    <section className="h-screen overflow-auto">
      <div className="h-screen flex justify-center my-0 mx-auto items-center max-w-7xl gap-10 flex-col">
        <div>
          <h1 className="text-[#822820] text-4xl font-bold text-center w-full">
            Welcome to Rhaenyra's Planet
          </h1>
          <p className="text-[#808080] text-xl font-normal text-center pt-10 w-full">
            Hi I am Rhaenyra Liang, self-taught Font-end developer
           and Dancer living in Taiwan.
          </p>
          <div className="h-28"></div>
         <div className="flex justify-center items-center">
          <Image
            src="/avatar.png"
            alt="photo"
            height={250}
            width={250}
            className=""
          />
        </div>
        </div>
         <div className="flex text-4xl text-[#822820] justify-center items-center gap-8">
          <a
            href="https://www.facebook.com/profile.php?id=100001729574889"
            target="_blank"
          >
            <FaSquareFacebook />
          </a>
          <a href="https://github.com/Rhaenyra-Liang" target="_blank">
            <FaSquareGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rhaenyra-liang-28a170252/"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <AboutPage />
      <WorkPage />
      <CertificatePage />
      <ContactPage />
    </section>
  );
}
