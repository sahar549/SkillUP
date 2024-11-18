import { Button } from "@/components/ui/button";
import { RxGithubLogo } from "react-icons/rx";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
     <Head>
        <title>SkillUP </title>
        <meta name="description" content="Generate personalized AI  Languages courses with our easy-to-use tool. Explore various topics and create your own curriculum today!" />
        <meta name="keywords" content="AI, Course Generator, Online Learning, Educational Tool, Machine Learning, Deep Learning" />
        <meta name="author" content="Sahar Torai" />
        <link rel="canonical" href="https://skill-up-nu.vercel.app/" />
        <meta property="og:title" content="SkillUP" />
        <meta property="og:description" content="Create personalized AI languages courses tailored to your needs." />
        <meta property="og:image" content="" />
        <meta property="og:url" content="https://skill-up-nu.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SkillUP" />
        <meta name="twitter:description" content="Generate personalized AI  languages courses with our easy-to-use tool." />
        <meta name="twitter:image" content="" />
      </Head>
    <div className="flex justify-between p-5 shadow-sm items-center">
      <div className="flex items-center gap-2">
      <Link  href={'/'}  className="flex justify-center items-center gap-2">
      <Image src={'/logo.png'} width={44} height={44} /> <span className="font-bold text-xl">SkillUP   </span>
      </Link>
      </div>
      <div className="flex justify-center items-center gap-10 cursor-pointer">
       <Link href={"https://github.com/sahar549" }>
         <RxGithubLogo className="text-3xl"/>
       </Link>          
      <Link href={'/dashboard'} >

      <Button variant="startButton" > Get started</Button>
      </Link>
      </div>
    </div>
    </>
  );
};

export default Header;
