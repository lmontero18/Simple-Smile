"use client";
import { useEffect, useRef } from "react";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
import JSConfetti from "js-confetti";
export default function Header() {
  const jsConfettiRef = useRef<JSConfetti | null>(null);

  useEffect(() => {
    jsConfettiRef.current = new JSConfetti();
  }, []);

  const emojiRain = () => {
    if (jsConfettiRef.current) {
      jsConfettiRef.current.addConfetti({
        emojis: ["😂"],
        emojiSize: 50,
        confettiNumber: 100,
      });
    }
  };

  return (
    <>
      <header className="flex flex-row justify-between items-center p-4 m-0">
        <Button variant={"default"} onClick={emojiRain}>
          Emoji?
        </Button>
        <ModeToggle />
      </header>
    </>
  );
}
