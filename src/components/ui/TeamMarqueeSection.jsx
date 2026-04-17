import React from "react";
import { Marquee } from "@/components/ui/marquee";
import { team } from "@/constants/data";
import { UserCheck } from "lucide-react"; // Using UserCheck or similar as a replacement for the custom star icon if needed, or I'll copy the SVG.

// Extending the team data with images if not present
const teamMembers = team.map((member, index) => ({
  ...member,
  image: `https://images.unsplash.com/photo-${[
    "1507003211169-0a1dd7228f2d", // Alexandre
    "1494790108377-be9c29b29330", // Claire
    "1500648767791-00dcc994a43e", // Thomas
    "1573496359142-b8d87734a5a2", // Émilie
  ][index % 4]}?auto=format&fit=crop&q=80&w=400&h=600`,
}));

export function TeamMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-12 md:py-24 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 max-w-[100vw]">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg
          className="absolute right-0 bottom-0 text-slate-900 dark:text-white"
          fill="none"
          height="154"
          viewBox="0 0 460 154"
          width="460"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_494_1104)">
            <path
              d="M-87.463 458.432C-102.118 348.092 -77.3418 238.841 -15.0744 188.274C57.4129 129.408 180.708 150.071 351.748 341.128C278.246 -374.233 633.954 380.602 548.123 42.7707"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="40"
            />
          </g>
          <defs>
            <clipPath id="clip0_494_1104">
              <rect fill="white" height="154" width="460" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center px-6 text-center lg:px-0 overflow-hidden">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-500 text-white shadow-lg shadow-primary-500/20">
            <UserCheck size={28} />
          </div>

          <h2 className="relative mb-4 font-bold text-4xl text-slate-900 tracking-tight sm:text-5xl dark:text-white">
            Notre Équipe d'Experts
            <svg
              className="absolute -top-6 -right-12 -z-10 w-24 text-primary-100 dark:text-primary-900/30"
              fill="currentColor"
              height="86"
              viewBox="0 0 108 86"
              width="108"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.8484 16.236L15 43.5793L78.2688 15L18.1218 71L93 34.1172L70.2047 65.2739"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="28"
              />
            </svg>
          </h2>
          <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-lg">
            Une équipe passionnée et dévouée à faire de votre événement un moment d'exception.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-white to-transparent dark:from-slate-900" />
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-white to-transparent dark:from-slate-900" />

          <Marquee className="[--gap:1.5rem]" pauseOnHover>
            {teamMembers.map((member) => (
              <div
                className="group flex w-72 shrink-0 flex-col px-2"
                key={member.name}
              >
                <div className="relative h-96 w-full overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-800 shadow-xl transition-all duration-500">
                  <img
                    alt={member.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 hover:scale-110 cursor-pointer"
                    src={member.image}
                  />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/90 backdrop-blur-md p-4 dark:bg-slate-900/90 border border-white/20 pointer-events-none">
                    <h3 className="font-bold text-slate-900 dark:text-white text-lg">
                      {member.name}
                    </h3>
                    <p className="text-primary-600 font-medium text-sm dark:text-primary-400">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        <div className="mx-auto mt-20 max-w-3xl px-6 text-center lg:px-0">
          <p className="mb-8 font-medium text-xl text-slate-900 leading-relaxed md:text-2xl italic dark:text-slate-100">
            "L'excellence n'est pas un acte, mais une habitude. Notre équipe s'efforce chaque jour de transformer cette vision en réalité pour nos clients."
          </p>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full ring-4 ring-primary-500/20">
              <img
                alt="Alexandre Moreau"
                className="h-full w-full object-cover"
                src={teamMembers[0].image}
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                Alexandre Moreau
              </p>
              <p className="text-slate-500 text-sm font-medium dark:text-slate-400">
                Fondateur · ORIOTEL PREMIUM
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
