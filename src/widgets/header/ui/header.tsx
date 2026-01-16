import Link from "next/link";

import { Button, Heading } from "@/shared/ui";

export const Header = () => {
  return (
    <header>
      <div className="border-border grid h-16 grid-cols-3 items-center border-b px-[5%]">
        <div className="justify-self-start">
          <Button asChild variant="link" className="h-auto p-0" weight="bold">
            <Link href="/" aria-label="BookMe home">
              <Heading level="h2">BookMe</Heading>
            </Link>
          </Button>
        </div>
        <nav className="flex gap-6 justify-self-center">
          <Button asChild variant="link" weight="bold">
            <Link href="/explore">Explore</Link>
          </Button>
          <Button asChild variant="link" weight="bold">
            <Link href="/help">Help</Link>
          </Button>
          <Button asChild variant="link" weight="bold">
            <Link href="/list-service">List your service</Link>
          </Button>
        </nav>
        <div className="flex items-center gap-4 justify-self-end">
          <Button asChild variant="link" weight="bold">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild weight="bold">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
