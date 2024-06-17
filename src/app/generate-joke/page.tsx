"use client";
import Header from "@/components/header";
import ParticlesComponent from "@/components/particles";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect, useState } from "react";

function JokesPage() {
  // const [joke, setJoke] = useState();

  // useEffect(() => {
  //   fetch("https://v2.jokeapi.dev/joke/Dark")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (!data.error) {
  //         const fetchedJoke = data.setup
  //           ? `${data.setup} - ${data.delivery}`
  //           : data.joke;
  //         setJoke(fetchedJoke);
  //       } else {
  //         console.error("Failed to fetch Joke:", data.message);
  //       }
  //     });
  // }, []);

  return (
    <main>
      <ParticlesComponent id="particles" />
      <Header />
      <section className="flex flex-col items-center justify-center mt-14 md:mt-20 ">
        <h1 className="text-4xl font-bold md:text-5xl">Generate Your Joke</h1>
        <Card className="mt-10">
          <CardHeader>
            <CardTitle>Based on your interests</CardTitle>
            <CardDescription>
              Select joke type, category, and language
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Category
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Dark">Dark</SelectItem>
                  <SelectItem value="Programming">Programming</SelectItem>
                  <SelectItem value="Misc">Misc</SelectItem>
                  <SelectItem value="Pun">Pun</SelectItem>
                  <SelectItem value="Spooky">Spooky</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="twopart">Two Part</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button>Generate Joke</Button>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </main>
  );
}

export default JokesPage;
