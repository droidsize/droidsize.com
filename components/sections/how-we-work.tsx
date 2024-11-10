import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useScroll } from "framer-motion";
import { Database, Link, Palette, ShoppingBag } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  icon: JSX.Element;
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

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
    title: "Strategy and Design",
    description:
      "We provide digital solutions as Website Design,Mobile App Design, Landing Page design, Illustration, Animation increase company’s values",
    icon: <ShoppingBag className="size-5" />,
    imageUrl: "1.jpg",
  },
  {
    number: 2,
    title: "Coding and Implementation",
    description:
      "We implement coding with new tech React, Webflow, Wordpress, Shopify, Flutter, iOS, Android and AI-driven applications.",
    icon: <Link className="size-5" />,
    imageUrl: "1.jpg",
  },
  {
    number: 3,
    title: "SEO/Marketing and Advertisment",
    description:
      "Growth your brand with our SEO/Marketing and advertisment solutions. Help increase the traffic, Google 5* rating and more.",
    icon: <Palette className="size-5" />,
    imageUrl: "1.jpg",
  },
];
