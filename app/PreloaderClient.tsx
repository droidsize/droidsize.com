"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Preloader from "@/components/preloader";

interface PreloaderClientProps {
  children: React.ReactNode;
}

export default function PreloaderClient({ children }: PreloaderClientProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>
      {!isLoading && children}
    </>
  );
} 