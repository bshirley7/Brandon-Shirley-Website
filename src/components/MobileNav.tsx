import { Menu, Mail, Linkedin, PhoneCall } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from "./ui/sheet"
import { Link } from 'react-router-dom'
import { contactInfo } from '../data/personal';

export const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button 
          className="lg:hidden text-white"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] bg-black/95 border-neutral-800">
        <SheetTitle className="text-white sr-only">
          Navigation Menu
        </SheetTitle>
        <SheetDescription className="sr-only">
          Main navigation links for the website
        </SheetDescription>
        <nav className="flex flex-col gap-8 mt-16">
          <Link 
            to="/" 
            className="text-white hover:text-neutral-400 transition-colors text-lg opacity-0 animate-slideLeftAndFade"
            style={{ animationDelay: '150ms' }}
          >
            Home
          </Link>
          <Link 
            to="/work" 
            className="text-white hover:text-neutral-400 transition-colors text-lg opacity-0 animate-slideLeftAndFade"
            style={{ animationDelay: '200ms' }}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="text-white hover:text-neutral-400 transition-colors text-lg opacity-0 animate-slideLeftAndFade"
            style={{ animationDelay: '250ms' }}
          >
            About
          </Link>
          <div className="space-y-4 opacity-0 animate-slideLeftAndFade" style={{ animationDelay: '300ms' }}>
            <div className="text-white text-lg">Contact</div>
            <div className="space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span className="text-sm">Email Me</span>
              </a>
              <a
                href={`https://www.linkedin.com/in/${contactInfo.linkedin}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                <span className="text-sm">Connect On LinkedIn</span>
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 text-neutral-400 hover:text-white transition-colors"
              >
                <PhoneCall size={16} />
                <span className="text-sm">Call or Text</span>
              </a>
            </div>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
