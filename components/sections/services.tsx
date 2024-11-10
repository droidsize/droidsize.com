import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Crown, MapPin, Palette, TrendingUp } from "lucide-react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

interface ServiceItemProps {
  service: Service;
}

function ServiceItem({ service }: ServiceItemProps) {
  return (
    <div className="group relative overflow-hidden border-t border-white/20 bg-background transition-all duration-500 hover:bg-white/5">
      <div className="flex items-center justify-between px-8 py-4">
        <p className="pointer-events-none m-0 -mb-16 text-[7vw] font-semibold uppercase tracking-tight transition-all duration-500 group-hover:mb-0 group-hover:text-[#8963fd]">
          {service.title}
        </p>
        <div className="flex items-center gap-10">
          <p className="text-md max-w-[16vw] font-medium text-white">
            {service.description}
          </p>
          <div className="text-white*:size-6 rounded-full border border-white/20 p-4">
            {service.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

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

export default function Services() {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress, scrollY } = useScroll();
  const { position } = useElementViewportPosition(mainRef);

  const textX = useTransform(
    scrollYProgress,
    position,
    typeof window !== "undefined"
      ? [
          window.innerWidth / 2,
          window.innerWidth / 3 - (textRef.current?.offsetWidth || 0),
        ]
      : [0, 0],
  );

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      ref={mainRef}
      id="our-services"
    >
      <div className="container mx-auto px-4 py-20">
        {/* headline */}
        <h1 className="text-gradient_white-black z-[2] self-center text-center text-8xl font-bold leading-normal dark:text-[#ebe1f9]">
          Our Services
        </h1>
        <motion.div
          ref={textRef}
          className="absolute left-0 top-20 -z-10 w-full -translate-y-1/2 text-center text-[10vw] font-bold uppercase leading-none text-neutral-700/30"
          style={{ x: textX }}
          data-scroll-section
        >
          Our Services
        </motion.div>

        {/* section */}
        <div className="relative mt-12">
          {services.map((service, index) => (
            <div key={index} className="border-white/20 last:border-b">
              <ServiceItem service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const services = [
  {
    title: "Development",
    description: "Full-stack Development & Architecture",
    icon: <Code />,
  },
  {
    title: "Design",
    description: "UI/UX Design, Web & Mobile Design",
    icon: <Palette />,
  },
  {
    title: "Marketing",
    description: "Marketing Strategy & Analytics",
    icon: <TrendingUp />,
  },
  {
    title: "Branding",
    description: "Brand Identity, Strategy & Consulting",
    icon: <Crown />,
  },
];
