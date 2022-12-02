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
        duration: 1,
      },
    },
  },
  // HAMBURG MENU
  DisplayHamburgMenu: {
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
        mass: 9,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.2,
        delay: 0.2,
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
        delay: 1.3,
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
        duration: 1.7,
        delay: 0.7,
      },
    },
  },

  // Main Heading
  DesktopTitle: {
    hidden: {
      y: "70%",
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
        duration: 0.8,
        delay: 2.2,
      },
    },
  },

  // Main Heading - Mobile
  mobileTitle: {
    hidden: {
      y: "30%",
      opacity: 0,
      transition: {
        duration: 1.1,
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 2,
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
      y: "90%",
      opacity: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
      },
    },
    visible: {
      opacity: 0.7,
      y: 0,
      transition: {
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.85,
        delay: 2.2,
      },
    },
  },

  // Buttons
  buttons: {
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
        duration: 1,
        delay: 2.2,
      },
    },
  },

  // socials
  socials: {
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
        duration: 0.86,
        delay: 2.2,
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
        duration: 3,
        delay: 2.7,
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
