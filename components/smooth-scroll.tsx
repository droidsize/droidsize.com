import { useEffect } from "react";

const SmoothScroll = () => {
  useEffect(() => {
    let locomotiveScroll;

    (async () => {
      try {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScroll = new LocomotiveScroll({});
      } catch (error) {
        console.error("Failed to load locomotive-scroll:", error);
      }
    })();

    // Clean up the LocomotiveScroll instance on unmount
    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  return null;
};

export default SmoothScroll;
