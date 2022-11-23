export const Animations = {
  // Logo
  FadeLogo: {
    hidden: {
      y: "-200%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.9,
        delay: 0.1,
      },
    },
  },

  // phone
  Phone: {
    hidden: {
      y: "-200%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.2,
        delay: 0.9,
      },
    },
  },

  nav: {
    hidden: {
      y: "-200%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
        delay: 1.5,
      },
    },
  },

  // Main Heading
  title: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 1.1,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
        delay: 2.3,
      },
    },
  },
  // Main Heading
  darkTitle: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 1.1,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
        delay: 2.3,
      },
    },
  },

  // Sub heading
  subtitle: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 0.85,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
        delay: 2.4,
      },
    },
  },

  // Buttons
  buttons: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 0.85,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
        delay: 2.5,
      },
    },
  },

  // links
  socials: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 0.85,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
        delay: 2.6,
      },
    },
  },
  // links
  mobileNav: {
    hidden: {
      y: "90%",
      opacity: 0,
      transition: {
        duration: 0.85,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.75,
      },
    },
  },

  // Tailor Made
  tailorMade: {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.85,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 0.06,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 3,
        delay: 3.3,
      },
    },
  },

  // Nav container
  container: {
    visible: {
      transition: {
        staggerChildren: 1,
      },
    },
  },

  // HeroPicture
  picture: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 3
      },
    },
  },
};

