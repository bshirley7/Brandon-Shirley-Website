import { Menu } from "lucide-react"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle,
  SheetDescription 
} from "./ui/sheet"
import { Link } from 'react-router-dom'
import { ContactDialog } from './ContactDialog'

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
          <ContactDialog>
            <button 
              className="text-left text-white hover:text-neutral-400 transition-colors text-lg opacity-0 animate-slideLeftAndFade"
              style={{ animationDelay: '300ms' }}
            >
              Contact
            </button>
          </ContactDialog>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
