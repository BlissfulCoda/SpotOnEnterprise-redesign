import { motion } from "framer-motion";
import { HomeNav } from "../../../Data/ComponentData";
import { Animations } from "./Animation";

export default function Nav(): JSX.Element {
  return (
    <motion.nav
      variants={Animations.container}
      className="hidden h-10 pt-2 text-sm font-medium laptop:flex laptop:space-x-7 desktop:space-x-8 laptop:px-6"
    >
      {HomeNav.map((link) => (
        <div
          key={link.id}
          className="duration-700 opacity-50 group hover:opacity-100"
        >
          <motion.a
            variants={Animations.nav}
            href={link.href}
            className={link.styling}
          >
            {link.title}
          </motion.a>
          <div className="mx-2 group-hover:border-b group-hover:border-purple-300"></div>
        </div>
      ))}
    </motion.nav>
  );
}
