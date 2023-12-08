import { FaSquareFacebook, FaSquareGithub, FaLinkedin, FaRegEnvelope  } from "react-icons/fa6";
function ContactPage() {
  return(
  <div id="contact" className="pb-20 max-w-7xl flex flex-col my-0 mx-auto gap-20">
   <h1 className="my-0 mx-auto pt-20 text-[#822820] text-4xl font-medium">Let's Work Torgther......</h1>
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
          <a
            href="mailto:rhaenyrliang1999@gmail.com"
            target="_blank"
          >
            <FaRegEnvelope  />
          </a>
        </div>
        <p className="my-0 mx-auto text-[#822820] text-sm">rhaenyraliang1999@gmail.com</p>
  </div>
  );
}

export default ContactPage;
