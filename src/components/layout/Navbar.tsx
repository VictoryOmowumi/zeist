import Link from "next/link"
import { Button } from "@/components/ui/button"
import zeistLogo from "../../../public/images/zeist-logo.png"
import githubLogo from "../../../public/icons/Github.svg"
import discordLogo from "../../../public/icons/Discord.svg"
import Image from "next/image"
export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-y border-white/10  bg-background/80 backdrop-blur-xl h-[80px] mt-2">
      <div className="mx-auto flex h-[calc(100%-1px)] max-w-7xl items-center justify-between  relative px-4 md:px-6 lg:px-0">
        
        <div className="absolute -top-1 -left-1 z-50 hidden lg:block text-[#57565B]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>

        <div className="absolute -top-1 -right-1 z-50 hidden lg:block text-[#57565B]">
             <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>

        <div className="absolute -bottom-1 -left-1 z-50 hidden lg:block text-[#57565B]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>

        <div className="absolute -bottom-1 -right-1 z-50 hidden lg:block text-[#57565B]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                <path d="M4 0V8M0 4H8" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>

        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80  lg:ml-24">
            <Image src={zeistLogo} alt="Zeist Logo" width={78} height={26} />
        </Link>

        <div className="flex items-center gap-4 lg:mr-24">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="text-muted-foreground transition-colors hover:text-white hidden lg:block"
          >
            <Image src={githubLogo} alt="GitHub Logo" width={18} height={18} />
            <span className="sr-only">GitHub</span>
          </Link>
          
          <Link 
            href="https://discord.com" 
            target="_blank" 
            className="text-muted-foreground transition-colors hover:text-white hidden lg:block"
          >
            <Image src={discordLogo} alt="Discord Logo" width={18} height={18} />
            <span className="sr-only">Discord</span>
          </Link>

          <Button 
            asChild 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-light text-[13.5px] shadow-[0_0_20px_rgba(99,91,255,0.3)]"
          >
            <Link href="#waitlist">
              Join Waitlist
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}