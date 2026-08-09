import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Code2, Compass, PanelsTopLeft } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: React.ReactElement;
  imageUrl: string;
}

function Separator() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -50% 0px",
  });

  return (
    <div ref={ref} className="my-12 h-[3px] w-full bg-white/10 md:my-24">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isInView ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="size-full origin-left bg-white"
      />
    </div>
  );
}

interface StepContentProps extends Step {
  onVisible: () => void;
}

function StepContent({
  title,
  description,
  icon,
  imageUrl,
  onVisible,
}: StepContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { amount: 0.6 });

  useEffect(() => {
    if (isInView) {
      onVisible();
    }
  }, [isInView, onVisible]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative"
    >
      <div className="mb-4 flex items-center gap-6">
        <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          {title}
        </h2>
        <span className="mb-3 inline-flex items-center rounded-full border-2 border-white/10 p-3 text-white/70">
          {icon}
        </span>
      </div>

      <p className="mb-6 max-w-3xl text-base text-white md:mb-8 md:text-lg">
        {description}
      </p>

      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
        <Image
          src={`/_static/how-we-work/${imageUrl}`}
          alt={title}
          className="size-full object-cover"
          width={1920}
          height={1080}
          quality={80}
        />
      </div>
    </motion.div>
  );
}

export default function HowWeWork() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div ref={containerRef} className="relative">
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-12">
          {/* Left side - sticky numbers */}
          <div className="relative hidden lg:block">
            <div className="sticky top-[20vh] h-[180px] font-droidsize text-[#e5e7eb]">
              {/* Static "0" */}
              <div className="absolute left-0 top-[-38px] text-[14rem] font-bold leading-none">
                0
              </div>
              {/* Dynamic number */}
              <div className="absolute left-[140px] top-[-38px] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -50, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-[14rem] font-bold leading-none"
                  >
                    {activeStep}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Mobile number display */}
          <div className="mb-8 lg:hidden">
            <div className="font-droidsize text-6xl font-bold text-[#e5e7eb]">
              0{activeStep}
            </div>
          </div>

          {/* Right side - scrolling content */}
          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number}>
                <StepContent
                  {...step}
                  onVisible={() => setActiveStep(step.number)}
                />
                {index < steps.length - 1 && <Separator />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export const steps: Step[] = [
  {
    number: 1,
    title: "Discover and align",
    description:
      "We begin with the people, the business, and the constraints. The outcome is a shared brief and a clear definition of what success should look like.",
    icon: <Compass className="size-5" />,
    imageUrl: "1.jpg",
  },
  {
    number: 2,
    title: "Design and prototype",
    description:
      "We make the product tangible early, testing structure, interaction, and visual language before expensive decisions become difficult to change.",
    icon: <PanelsTopLeft className="size-5" />,
    imageUrl: "1.jpg",
  },
  {
    number: 3,
    title: "Build and evolve",
    description:
      "Design and engineering move together through release. After launch, we keep the product useful, stable, and ready for what comes next.",
    icon: <Code2 className="size-5" />,
    imageUrl: "1.jpg",
  },
];
