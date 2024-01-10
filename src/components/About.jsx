import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is students.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            voluptas atque. Consectetur omnis saepe voluptas dicta, doloribus
            eaque. A sunt asperiores sint sapiente vitae adipisci totam, tempora
            aut porro natus minus saepe quasi et libero commodi ipsa obcaecati,
            soluta repellendus, alias recusandae culpa quidem laboriosam
            praesentium? Distinctio impedit libero tenetur!
          </p>
          <Link to={"menu"} spy={true} smooth={true} duration={500}>
            Explore Campus{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="https://todayslearner.cengage.com/wp-content/uploads/2020/10/tl-blog-supporting-students-1475117-1110x380.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;