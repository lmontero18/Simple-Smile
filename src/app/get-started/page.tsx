"use client";
import Header from "@/components/header";
import ParticlesComponent from "@/components/particles";
import React, { useEffect, useState } from "react";

function JokesPage() {
  const [joke, setJoke] = useState();

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Dark")
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          const fetchedJoke = data.setup
            ? `${data.setup} - ${data.delivery}`
            : data.joke;
          setJoke(fetchedJoke);
        } else {
          console.error("Failed to fetch Joke:", data.message);
        }
      });
  }, []);

  return (
    <main>
      <ParticlesComponent id="particles" />
      <Header />
      <div>
        <h1>Random Joke</h1>
        <p>{joke}</p>
      </div>
    </main>
  );
}

export default JokesPage;
