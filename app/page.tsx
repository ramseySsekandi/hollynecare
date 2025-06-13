import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-lg">Welcome to the Next.js app with Tailwind CSS!</p>
      <p className="text-lg">This is a simple example of a Next.js app using Shadcn components with dark mode.</p>
      <Button>
        Heading to GitHub
      </Button>
      <ModeToggle />
    </main>
  );
}
