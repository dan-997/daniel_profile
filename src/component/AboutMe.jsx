import React from 'react';
import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const AboutMe = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} text-[25px]`}>
            <span className="text-white">About</span> Me
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[25px] text-white ss:leading-[100.8px] leading-[75px]">
            Name: {" "}
            <span className="text-gradient">Daniel Chua</span>{" "}
          </h1>
          <h1 className="flex-1 font-poppins font-semibold ss:text-[25px] text-white ss:leading-[100.8px] leading-[75px]">
            Age: {" "}
            <span className="text-gradient">26</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} text-[18px] max-w-[620px] mt-0`}>
        Welcome to my website! My name is Daniel, and I'm a fresh graduate who is passionate about coding. I have always been fascinated by technology and its ability to change the world, and that's why I decided to pursue a career in coding. I am now actively seeking a job in this field, and I'm excited to share my skills and knowledge with potential employers. On this website, you will find information about my background, experience, and projects that I have worked on. Thank you for taking the time to visit my site, and I hope you find it informative and engaging!
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>

  )
}

export default AboutMe;