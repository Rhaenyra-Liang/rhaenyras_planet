import Image from "next/image";
import { FaSquareFacebook, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

function AboutPage() {
  return (
    <div id="about" className="h-screen flex flex-col  bg-[#C29B9A]">
      <div className="flex flex-col gap-4">
        <div className="h-20"></div>
        <div className="flex justify-center items-center">
          <Image
            src="/avatar.jpg"
            alt="photo"
            height={200}
            width={200}
            className="rounded-[2.5rem] border-[#822820]  border-[2.5px]"
          />
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
      <div className="flex flex-col gap-4">
        <p className="text-[#822820] text-4xl font-medium flex pt-10 justify-center">
          About me
        </p>
        <p>
          Hi I am Rhaenyra Liang, a 23 years old self-taught Font-end developer
          and Dancer living in Taiwan.
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default AboutPage;
