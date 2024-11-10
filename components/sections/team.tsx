import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dribbble, Github, X } from "lucide-react";

import { Card } from "@/components/ui/card";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    x?: string;
    dribbble?: string;
    github?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Yogesh Kumar",
    role: "CEO Founder",
    image: "yogesh.png",
    social: {
      x: "#",
      github: "#",
    },
  },
  {
    name: "Kajal Kumaru",
    role: "Program Manager",
    image: "kajal.png",
    social: {
      x: "#",
    },
  },
  {
    name: "Tarun Sharma",
    role: "App Developer",
    image: "tarun.png",
    social: {
      x: "#",
      dribbble: "#",
      github: "#",
    },
  },
  {
    name: "Nitesh Sharma",
    role: "Marketing Director",
    image: "nitesh.png",
    social: {
      dribbble: "#",
    },
  },
  {
    name: "Sekh Soyeb Ali",
    role: "Wordpress Developer",
    image: "soyeb.png",
    social: {
      x: "sekhsoyebali",
      github: "sekhsoyebali",
    },
  },
];

function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop - 600;
    const end = start + ref.current.offsetHeight + 1000;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

export default function Team() {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const { position } = useElementViewportPosition(mainRef);

  const textX = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [
          window.innerWidth,
          window.innerWidth / 2 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  return (
    <section
      ref={mainRef}
      className="relative mx-auto flex min-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden"
    >
      <h2 className="text-gradient_white-black z-[2] self-center text-center text-9xl font-bold leading-normal dark:text-[#ebe1f9]">
        Our Team
      </h2>
      <motion.div
        ref={textRef}
        className="absolute left-0 top-14 z-[-1] w-full -translate-y-1/2 text-center text-[10vw] font-bold leading-none text-neutral-700/30"
        style={{ x: textX }}
        data-scroll-section
      >
        Meet our leaders
      </motion.div>
      {team.map((member) => (
        <Card
          key={member.name}
          className="group relative flex h-44 w-full max-w-6xl items-center gap-6 overflow-hidden rounded-xl bg-[#271e30] transition-all duration-500 hover:bg-[#8963fd]"
        >
          {/* Image */}
          <div className="w-1/3">
            <Image
              alt={member.name}
              className="aspect-square size-full object-cover"
              src={`/_static/team/${member.image}`}
              width={100}
              height={100}
            />
          </div>
          {/* Name and Role */}
          <div className="flex w-1/3 flex-1 flex-col gap-4">
            <h3 className="text-5xl font-bold text-white transition-colors group-hover:text-black">
              {member.name}
            </h3>
            <p className="ml-1 text-zinc-400 transition-colors group-hover:text-black">
              {member.role}
            </p>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 self-start p-8">
            {member.social.x && (
              <a
                href={member.social.x}
                className="rounded-full border border-white/25 bg-zinc-800 p-2.5 text-white transition-colors hover:bg-zinc-700 group-hover:border-black/50 group-hover:bg-black/10 group-hover:text-black"
              >
                <X className="size-5" />
              </a>
            )}
            {member.social.dribbble && (
              <a
                href={member.social.dribbble}
                className="rounded-full border border-white/25 bg-zinc-800 p-2.5 text-white transition-colors hover:bg-zinc-700 group-hover:border-black/50 group-hover:bg-black/10 group-hover:text-black"
              >
                <Dribbble className="size-5" />
              </a>
            )}
            {member.social.github && (
              <a
                href={member.social.github}
                className="rounded-full border border-white/25 bg-zinc-800 p-2.5 text-white transition-colors hover:bg-zinc-700 group-hover:border-black/50 group-hover:bg-black/10 group-hover:text-black"
              >
                <Github className="size-5" />
              </a>
            )}
          </div>
        </Card>
      ))}
    </section>
  );
}
