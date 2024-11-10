export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.9,
    transition: { duration: 1, delay: 0.2 },
  },
};

export const slideUp = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
};


export const slideUpSection = {
  initial: {
      y: 300
  },
  enter: {
      y: 0,
      transition: {duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.5}
  }
}