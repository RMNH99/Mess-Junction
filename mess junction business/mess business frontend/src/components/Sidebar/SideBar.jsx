import { NavLink } from "react-router-dom";
import logo from '../../img/logo.png';
// =============================I-CONS========================================
import { FaBars, FaHome, FaLock,FaSignOutAlt, FaUserEdit, FaCompass, FaQuestion,FaChartLine} from "react-icons/fa";
import { MdMessage,MdSupport } from "react-icons/md";
import { BiSearch} from "react-icons/bi";
import { BiCog,BiPhotoAlbum } from "react-icons/bi";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SidebarMenu from "./SidebarMenu";

const routes = [
  {
    path: "/additems",
    name: "Home",
    icon: <FaHome />,
  },
  {
    path: "/status",
    name: "My Status",
    icon: <MdSupport />,
  },
  {
    path: "/Analitics",
    name: "Analitics",
    icon: <FaChartLine />,
  },
  {
    path: "/messages",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/Help",
    name: "Help",
    icon: <FaQuestion />,
  },
  
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/change_password",
        name: "Change Password ",
        icon: <FaLock />,
      },
      {
        path: "/settings/update_location",
        name: "Update location",
        icon: <FaCompass />,
      },
      {
        path: "/settings/update_profile",
        name: "Update Profile",
        icon: <FaUserEdit />,
      },
      {
        path: "/settings/addAlbum",
        name: "Album",
        icon: <BiPhotoAlbum />,
      },
    ],
  },
  {
    path: "/Signout",
    name: "Signout",
    icon: <FaSignOutAlt />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: isOpen ? "200px" : "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <div className="top_section">
            <AnimatePresence>
              {isOpen && (
                <motion.h5
                  variants={showAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  className="logo"
                >
                  <img className="sidebar-img" src={logo} alt="sidebar-img" />
                   MESS JUNCTION
                  
                </motion.h5>
              )}
            </AnimatePresence>

            <div className="bars">
              <FaBars onClick={toggle} />
            </div>
          </div>
          <div className="search">
            <div className="search_icon">
              <BiSearch />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.input
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  variants={inputAnimation}
                  type="text"
                  placeholder="Search"
                />
              )}
            </AnimatePresence>
          </div>
          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsOpen={setIsOpen}
                    route={route}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                  />
                );
              }

              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main>{children}</main>
      </div>
    </>
  );
};

export default SideBar;
