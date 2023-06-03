"use client";

import { useSidebarStore } from "@/store/useSidebarStore";
import { EyeIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export const OpenSidebar = () => {
  const [openSidebar, setOpenSidebar] = useSidebarStore(
    ({ openSidebar, setOpenSidebar }) => [openSidebar, setOpenSidebar]
  );

  const openSidebarAnimation = {
    borderTopRightRadius: ["5%", "50%"],
    borderBottomRightRadius: ["5%", "50%"],

    transition: {
      duration: 0.3,
      bounce: 0,
      delay: 1,
    },
  };

  const containerVariant = {
    visible: {
      x: 0,
      opacity: 1,

      transition: {
        delay: 0.6,
        type: "spring",
        bounce: 0,
      },
    },
    hidden: {
      x: -100,
      opacity: 0,
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={containerVariant}>
      <motion.div
        animate={openSidebarAnimation}
        onClick={() => setOpenSidebar(!openSidebar)}
        className="bg-theme-purple-200 absolute bottom-6 left-0 p-4 pr-5 pl-7 cursor-pointer"
      >
        <EyeIcon className="text-white w-5 h-5" />
      </motion.div>
    </motion.div>
  );
};
