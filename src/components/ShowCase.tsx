'use client';
import { motion } from "framer-motion";
import Image from "next/image";


type ShowCaseProps = {
  src: string;
  height: number;
  width:number;
  link:string;
  title:string;
};

const ShowCase = ({ src, height, width, link, title }: ShowCaseProps) => {
  return (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.5,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className=" relative flex flex-col justify-center items-center max-w-7xl gap-4"
        >
          <a
              href={link}
              target="_blank"
              className=""
            >
          <Image
            width={width}
            height={height}
            loading="eager"
            src={src}
            className="flex flex-col justify-center items-center rounded-md hover:-translate-y-0.5 cursor-pointer"
            alt="image"
          />
          </a>
          <a
            className="duration-300 hover:-translate-y-0.5 hover:text-slate-300 text-slate-500"
            href={link}
            target="_blank"
          >
            {title}
            </a>
        </motion.div>
  );
};

export default ShowCase;