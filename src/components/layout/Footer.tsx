import Link from "next/link"
import Image from "next/image"
import githubLogo from "../../../public/icons/Github.svg"
import discordLogo from "../../../public/icons/Discord.svg"
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto grid max-w-7xl grid-cols-3 bg-[#2a2a2c39] border-x border-white/10">
        
        {/* Column 1: Copyright */}
        <div className="flex h-20 items-center justify-center border-b border-white/10 md:border-b-0 md:border-r">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Zeist
          </p>
        </div>

        {/* Column 2: GitHub */}
        <div className="flex h-20 items-center justify-center border-b border-white/10 transition-colors hover:bg-white/5 md:border-b-0 md:border-r">
          <Link 
            href="https://github.com" 
            target="_blank" 
            className="flex items-center gap-2 text-sm text-foreground"
          >
            <Image src={githubLogo} alt="GitHub Logo" width={18} height={18} />
            <span>Join our Github</span>
          </Link>
        </div>

        {/* Column 3: Discord */}
        <div className="flex h-20 items-center justify-center transition-colors hover:bg-white/5">
          <Link 
            href="https://discord.com" 
            target="_blank" 
            className="flex items-center gap-2 text-sm text-foreground"
          >
            <Image src={discordLogo} alt="Discord Logo" width={18} height={18} />
            <span>Discord</span>
          </Link>
        </div>
        
      </div>
    </footer>
  )
}