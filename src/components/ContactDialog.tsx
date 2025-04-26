import React from 'react';
import { Mail, Linkedin, PhoneCall, ArrowUpRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { contactInfo } from '../data/personal';

interface ContactDialogProps {
  children: React.ReactNode;
}

export const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] bg-white dark:bg-zinc-900 border-none p-10">
        <DialogHeader className="mb-10">
          <DialogTitle className="text-4xl text-center font-bold text-foreground">
            Let's Create Something Together
          </DialogTitle>
          <p className="text-foreground/70 text-xl font-light mt-6 text-center max-w-2xl mx-auto">
            Interested in collaborating? Whether you have a project in mind or just want to explore possibilities, I'd love to hear from you.
          </p>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <a
            href={`mailto:${contactInfo.email}`}
            className="group relative flex flex-col items-center gap-4 px-6 py-8 rounded-xl bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
              <Mail size={28} className="text-zinc-800 dark:text-zinc-200" />
            </div>
            <span className="text-sm font-medium tracking-wider text-center text-zinc-800 dark:text-zinc-200">
              EMAIL ME
            </span>
            <ArrowUpRight 
              className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
              size={20} 
            />
          </a>
          <a
            href={`https://www.linkedin.com/in/${contactInfo.linkedin}`}
            className="group relative flex flex-col items-center gap-4 px-6 py-8 rounded-xl bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
              <Linkedin size={28} className="text-zinc-800 dark:text-zinc-200" />
            </div>
            <span className="text-sm font-medium tracking-wider text-center text-zinc-800 dark:text-zinc-200">
              CONNECT ON LINKEDIN
            </span>
            <ArrowUpRight 
              className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
              size={20} 
            />
          </a>
          <a
            href={`tel:${contactInfo.phone}`}
            className="group relative flex flex-col items-center gap-4 px-6 py-8 rounded-xl bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all duration-300"
          >
            <div className="p-4 rounded-full bg-gradient-to-br from-zinc-100 to-zinc-50 dark:from-zinc-800 dark:to-zinc-900 border border-zinc-200 dark:border-zinc-700 group-hover:scale-110 transition-transform duration-300">
              <PhoneCall size={28} className="text-zinc-800 dark:text-zinc-200" />
            </div>
            <span className="text-sm font-medium tracking-wider text-center text-zinc-800 dark:text-zinc-200">
              CALL ME
            </span>
            <ArrowUpRight 
              className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" 
              size={20} 
            />
          </a>
        </div>
        <div className="text-center text-zinc-500 dark:text-zinc-400 text-sm font-light">
          {contactInfo.location} • {contactInfo.availability}
        </div>
      </DialogContent>
    </Dialog>
  );
};
