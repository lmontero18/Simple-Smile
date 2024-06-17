import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import laughEmoji from "../../public/laughEmoji.png";
import ParticlesComponent from "@/components/particles";
import Link from "next/link";
export default function Home() {
  const GITHUB_URL = "https://github.com/lmontero18/Simple-Smile";

  return (
    <>
      <ParticlesComponent id="particles" />
      <Header />
      <section className="flex flex-col gap-6 items-center justify-center mt-52 px-4 md:px-6 lg:px-8">
        <div className="flex md:flex-row gap-4 items-center">
          <Image
            src={laughEmoji}
            alt="laugh emoji"
            className="h-12 w-12 md:h-16 md:w-16"
          ></Image>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-2xl text-center">
            Simple Smile
          </h1>
          <Image
            src={laughEmoji}
            alt="laugh emoji"
            className="h-12 w-12 md:h-16 md:w-16"
          ></Image>
        </div>
        <div className="w-full md:w-2/3 lg:w-1/2 text-center mx-auto">
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
            Brighten your day with a laugh! Simple Smile App brings you a daily
            stream of jokes and uplifting quotes directly via a powerful
            JokeAPI. Quick smiles and shared joy are just a tap away. Start
            smiling more today!
          </p>
        </div>
        <div className="flex flex-row gap-4 items-center">
          <Button>
            <Link href="/generate-joke">Generate a Joke</Link>
          </Button>
          <Button variant="secondary">
            <Link href={GITHUB_URL}>Learn More</Link>
          </Button>
        </div>
      </section>
      <footer className="flex items-center justify-center mt-96">
        <span className="text-muted-foreground">©2024 All rights reserved</span>
      </footer>
    </>
  );
}
