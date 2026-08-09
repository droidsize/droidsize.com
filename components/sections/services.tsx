import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code, Compass, Layers3, Palette } from "lucide-react";

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
    <div className="group relative overflow-hidden border-t border-white/20 bg-transparent transition-colors duration-500 hover:bg-white/[0.04]">
      <div className="flex flex-col gap-5 px-4 py-7 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <h3 className="pointer-events-none m-0 text-[clamp(2.8rem,7vw,6rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-[var(--site-ink)] transition-colors duration-500 group-hover:text-white/55">
          {service.title}
        </h3>
        <div className="flex items-center justify-between gap-6 md:justify-end md:gap-10">
          <p className="max-w-sm text-base font-medium leading-relaxed text-white md:max-w-[18rem]">
            {service.description}
          </p>
          <div
            aria-hidden="true"
            className="shrink-0 rounded-full border border-white/20 p-4 text-white *:size-6"
          >
            {service.icon}
          </div>
        </div>
      </div>
    </div>
  );
}

function useElementViewportPosition(ref: React.RefObject<HTMLElement | null>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop - 600;
    const end = start + ref.current.offsetHeight + 1000;

    setPosition([start / pageHeight, end / pageHeight]);
  }, [ref]);

  return { position };
}

export default function Services() {
  const mainRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
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
        <h2 className="z-[2] self-center text-center text-[clamp(3.5rem,9vw,6rem)] font-bold leading-normal tracking-[-0.04em] text-[var(--site-ink)]">
          Our Services
        </h2>
        <motion.div
          ref={textRef}
          className="absolute left-0 top-20 -z-10 w-full -translate-y-1/2 text-center text-[10vw] font-bold uppercase leading-none text-white/[0.035]"
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
    title: "Strategy",
    description:
      "Clarify the problem, define the product, and turn uncertainty into a practical roadmap.",
    icon: <Compass />,
  },
  {
    title: "Design",
    description:
      "Shape clear interfaces, useful flows, and a visual system people remember.",
    icon: <Palette />,
  },
  {
    title: "Engineering",
    description:
      "Build dependable web and mobile products with maintainable foundations.",
    icon: <Code />,
  },
  {
    title: "Evolution",
    description:
      "Improve what ships through focused releases, measurement, and long-term technical care.",
    icon: <Layers3 />,
  },
];
