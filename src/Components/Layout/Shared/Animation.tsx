export const Animations = {
  // Logo
  FadeLogo: {
    hidden: {
      y: "-200%",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 90,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
      },
    },
  },

  // NAV
  nav: {
    hidden: {
      y: "-200%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 0.85,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1.2,
        delay: 1.1,
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
        duration: 1.5,
        delay: 0.7,
      },
    },
  },

  // Main Heading
  DesktopTitle: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        stiffness: 20,
        dampness: 0.2,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.7,
        delay: 2,
      },
    },
  },

  // HAMBURG MENU
  DisplayHamburgMenu: {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 120,
        mass: 6,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
        delay: 0.1,
      },
    },
  },

  // Main Heading - Mobile
  mobileTitle: {
    hidden: {
      y: "10%",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      color: ["#FFF", "#000", "#FFF"],
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 3,
        delay: 1.2,
      },
    },
  },

  // Sub heading
  subtitle: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 0.7,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.8,
        delay: 2.2,
      },
    },
  },

  // Buttons
  buttons: {
    hidden: {
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
        delay: 2.1,
      },
    },
  },

  // socials
  socials: {
    hidden: {
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 1,
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

  // HeroPicture
  picture: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 2,
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
      opacity: 0.08,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 3.5,
        delay: 3,
      },
    },
  },

  // Nav container
  container: {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  },
};
