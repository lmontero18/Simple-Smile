import smile from "../../public/smile.svg";
import { ModeToggle } from "./modeToggle";
import { Button } from "./ui/button";
export default function Header() {
  return (
    <>
      <header className="flex flex-row justify-between items-center p-4 m-0">
        <Button variant={"default"}>Get some laughs</Button>
        <ModeToggle />
      </header>
    </>
  );
}
