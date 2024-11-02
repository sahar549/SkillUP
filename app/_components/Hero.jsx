import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Footer from "./Footer";
import { HiChevronDoubleRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div>
      <section className="h-screen">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-10 lg:flex lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl text-primary">
              <span className="text-black"> AI Language Course  
              </span>Generator.
              <strong className=" mt-12 font-medium text-3xl text-black sm:block">
                {" "}
                Personalized Language Learning, Powered by AI.{" "}
              </strong>
            </h1>

            <p className="mt-4 text-xm relaxed">
            Unlock your language potential with AI-driven course creation! Tailor your
             learning journey to match your skill level, goals, and pace for optimized language mastery.
            </p>

            <div className="mt-40 flex flex-wrap justify-center gap-4 cursor-pointer">
              <Link href={"/explore-course"}>
                <Button variant="startButton" size="lg">Explore Now.<HiChevronDoubleRight className="text-xl" /></Button>
              </Link>
            </div>
          </div>
        </div>
      
      </section>
    </div>
  );
};

export default Hero;
