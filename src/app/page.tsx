import { FaSquareFacebook, FaSquareGithub, FaLinkedin } from "react-icons/fa6";
import Image from "next/image";
import ContactPage from "@/components/Contact";
import CertificatePage from "@/components/Notes";
import WorkPage from "@/components/Work";
import AboutPage from "@/components/about";
import WebSystem from "@/components/WebSystem";
export default function t() {
  return (
    <section className="h-screen overflow-y-auto overflow-x-hidden w-screen">
      <div className="blur-3xl">
      <div className="fixed rounded-full w-96 h-96 opacity-40 top-15 blur-md mix-blend-multiply -left-4 bg-violet-700 animate-blob "></div>
      <div className="fixed rounded-full w-96 h-96 opacity-40 top-20 mix-blend-multiply left-4 blur-md bg-sky-700 animation-delay-3 animate-blob"></div>
      <div className="fixed bg-pink-700 rounded-full w-96 h-96 opacity-40 mix-blend-multiply top-13 left-20 blur-md animation-delay-6 animate-blob"></div>
      <div className="fixed top-0 bg-green-700 rounded-full w-96 h-96 opacity-40 mix-blend-multiply left-15 blur-md animation-delay-9 animate-blob"></div>
      <div className="fixed bg-yellow-700 rounded-full bottom-15 w-96 h-96 opacity-40 blur-md mix-blend-multiply left-4 animate-blob animation-delay-11"></div>
      <div className="fixed bg-indigo-500 rounded-full -top-15 w-96 h-96 opacity-40 blur-md mix-blend-multiply left-4 animate-blob animation-delay-13"></div>
      </div>
      <div className="min-h-full flex justify-center my-0 mx-auto items-center max-w-7xl flex-col">
        <div className="h-[65dvh] flex flex-col gap-6 xs:gap-10"> 
          <div className="flex flex-col gap-4">
          <h1 className="text-[#822820] text-3xl  xs:text-4xl font-bold text-center w-full">
            Welcome to Rhaenyra&apos;s Planet
          </h1>
          <p className="text-[#808080] text-lg xs:text-xl font-normal text-center w-full">
            Hi I am Rhaenyra Liang, self-taught Font-end developer
           and Dancer living in Taiwan.
          </p>
          </div>
           <WebSystem />
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
      </div>
      <AboutPage />
      <WorkPage />
      <CertificatePage />
      <ContactPage />
    </section>
  );
}
