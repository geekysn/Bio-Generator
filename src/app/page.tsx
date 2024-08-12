import Output from "@/components/home/Output";
import UserInput from "@/components/home/UserInput";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { BioProvider } from "@/context/BioContext";
import { ArrowRightIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative grid grid-cols-1 slg:grid-cols-2 gap-12 px-4 py-12 sm:py-16 sm:px-8 md:px-10 slg:p-16 lg:p-24">
      <div className=" col-span-full w-full flex flex-col items-center space-y-4 mb-4 text-center">
        <div className="group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200">
          <Link href={"https://github.com/geekysn/Bio-Generator.git"} target="_blank">
            <AnimatedShinyText className="px-6 py-2 inline-flex items-center justify-center transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <GitHubLogoIcon className="h-6 w-6" />
                &nbsp;|&nbsp;Visit on Github
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </Link>
        </div>
        <h1 className="font-extrabold text-2xl md:text-3xl slg:text-4xl lg:text-5xl text-center w-full lg:w-[90%] uppercase mx-auto pt-4">CRAFT YOUR PERFECT SOCIAL MEDIA BIO IN SECONDS!</h1>
        <p className="text-sm sm:text-base md:text-lg text-accent">Just answer a few questions, and we'll generate a bio that captures who you are.</p>
      </div>
      <BioProvider>
        <UserInput/>
        <Output/>
      </BioProvider>
    </main>
  );
}
