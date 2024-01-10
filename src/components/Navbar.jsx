import React, { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleLogout = async (e) =>  {
    navigate("/login");
  };
  return (
    <nav>
      <div className="logo">UNIVERSITY RAGGING</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        {/* <Link
          to="menu"
          spy={true}
          smooth={true}
          duration={500}
          className="menuBtn"
        >
          OUR MENU
        </Link> */}
        <button
          onClick={handleLogout}  // Use handleLogout for the onClick event
          className="menuBtn"
        >
          LOGIN
        </button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;